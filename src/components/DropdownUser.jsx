"use client";

import * as React from "react";

import { Button } from "@/components-ui/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components-ui/ui/dropdown-menu";

export default function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-0 hover:bg-transparent hover:text-white"
        >
          Products
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-26">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top" className="py-2 pt-5">
            ILLA Flow
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom" className="py-3">
            Integrations
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right" className="py-3">
            Components
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right2" className="py-3">
            Templates
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
