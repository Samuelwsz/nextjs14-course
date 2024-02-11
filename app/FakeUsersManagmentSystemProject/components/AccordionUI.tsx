"use client"

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"
import { useState } from "react"
import AllUsers from "./AllUsers"
import SpecificUser from "./SpecificUser"

export default function AccordionUI() {
  const [open, setOpen] = useState(1)

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)

  return (
    <section className="w-[40rem]">
      <Accordion open={open === 1} placeholder="Your Placeholder Text">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          placeholder="Your Placeholder Text"
        >
          All Users
        </AccordionHeader>
        <AccordionBody>
          <AllUsers />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} placeholder="">
        <AccordionHeader onClick={() => handleOpen(2)} placeholder="">
          Search For Specific User
        </AccordionHeader>
        <AccordionBody>
          <SpecificUser />
        </AccordionBody>
      </Accordion>
    </section>
  )
}
