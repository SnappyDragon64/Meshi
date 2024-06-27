"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/util/Utils.js"
import { Button } from "@/components/shadcn/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/shadcn/Command.jsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/Popover.jsx"
import {CommandList} from "cmdk";

export function AnimeCombobox({searchResults, getItemAnime, setItemAnime, date, language}) {
  const [open, setOpen] = React.useState(false)

  const getKey = () => {
    return language + "Name";
  }

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
            ? getItemAnime()[getKey()]
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
              {searchResults.map((result, index) => (
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
                  {result[getKey()]}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}