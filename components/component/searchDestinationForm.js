'use client'
import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@nextui-org/react";
import { DatePicker } from "@/components/ui/datepicker"

export default function SearchDestinationForm() {
  return (
    <form className="grid gap-4 grid-cols-5">
      <Input className="" type="search" label="Where" placeholder="Search destination" />
      <DatePicker label={"Start date"}/>
      <DatePicker label={"End date"}/>
      <Input type="number" label="Guests" placeholder="Number of guests" />
      <Button className="h-14 rounded-xl" type="submit">
        Search
      </Button>
    </form>
  )
}