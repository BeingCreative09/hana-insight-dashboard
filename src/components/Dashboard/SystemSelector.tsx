
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { systems } from "@/data/mockData";

interface SystemSelectorProps {
  selectedSystem: string;
  onSystemChange: (systemId: string) => void;
}

const SystemSelector = ({ selectedSystem, onSystemChange }: SystemSelectorProps) => {
  const [open, setOpen] = useState(false);
  const selectedSystemName = systems.find(system => system.id === selectedSystem)?.name || '';

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full md:w-[250px] justify-between"
        >
          {selectedSystemName || "Select System"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search system..." />
          <CommandEmpty>No system found.</CommandEmpty>
          <CommandGroup>
            {systems.map((system) => (
              <CommandItem
                key={system.id}
                value={system.id}
                onSelect={(currentValue) => {
                  onSystemChange(currentValue);
                  setOpen(false);
                }}
              >
                <div className="flex items-center">
                  <span 
                    className={cn(
                      "mr-2 h-2 w-2 rounded-full",
                      system.status === "healthy" ? "bg-success" : 
                      system.status === "warning" ? "bg-warning" : 
                      "bg-destructive"
                    )}
                  />
                  {system.name}
                </div>
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedSystem === system.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SystemSelector;
