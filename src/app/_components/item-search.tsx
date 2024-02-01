"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/app/_lib/utils";
import { Button } from "@/app/_components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/_components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";

export function ItemSearchInput() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSelectItem = (selectedValue: string) => {
    setValue(selectedValue);
    sessionStorage.setItem("item", selectedValue);
    setOpen(false);
  };

  const itemCategories = [
    {
      value: "mobile",
      label: "Mobile",
    },
    {
      value: "laptop",
      label: "Laptop",
    },
    {
      value: "charger",
      label: "Charger",
    },
    {
      value: "battery",
      label: "Battery",
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between rounded-l-none rounded-r-none border-r-0"
        >
          {value
            ? itemCategories.find((category) => category.value === value)?.label
            : "Select item..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search item..." />
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {itemCategories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    handleSelectItem(currentValue);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
