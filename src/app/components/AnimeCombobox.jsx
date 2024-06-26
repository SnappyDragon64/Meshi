"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/util/Utils.js"
import { Button } from "@/components/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/Command.jsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/Popover.jsx"
import {CommandList} from "cmdk";
import {useEffect, useState} from "react";
import {getAnime} from "@/services/IndexedDB.js";

export function AnimeCombobox({getItemAnime, setItemAnime}) {
  const [results, setResults] = useState([]);
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    getAnime()
      .then((res) => setResults(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {getItemAnime()
            ? getItemAnime().englishName
            : "Select anime"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search anime" />
          <CommandList>
            <CommandEmpty>No anime found.</CommandEmpty>
            <CommandGroup>
              {results.map((result, index) => (
                <CommandItem
                  key={index}
                  value={result}
                  onSelect={() => {
                    setItemAnime(result);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      getItemAnime() === result ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {result.englishName}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}