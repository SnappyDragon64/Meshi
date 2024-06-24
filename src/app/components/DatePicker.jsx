"use client"

import * as React from "react"
import {format} from "date-fns"
import {Calendar as CalendarIcon} from "lucide-react"

import {cn} from "@/util/Utils"
import {Button} from "@/components/Button"
import {Calendar} from "@/components/Calendar"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/Popover"

export function DatePicker({date, setDate}) {
  return (
    <Popover>
      <PopoverTrigger asChild className="grow min-w-52">
        <Button
          className={cn(
            "justify-start text-left font-normal",
            !date
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4"/>
          {date ? format(date, "PPP") : <span>Challenge Start Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
