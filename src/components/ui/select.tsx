"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import {
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react"

import { cn } from "@/lib/utils"

function Select(
  props: React.ComponentProps<typeof SelectPrimitive.Root>
) {
  return <SelectPrimitive.Root {...props} />
}

function SelectGroup(
  props: React.ComponentProps<typeof SelectPrimitive.Group>
) {
  return <SelectPrimitive.Group {...props} />
}

function SelectValue(
  props: React.ComponentProps<typeof SelectPrimitive.Value>
) {
  return <SelectPrimitive.Value {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "relative flex h-12 w-full items-center justify-center",
        "rounded-2xl",
        "border border-[#BFDBFE]",
        "bg-white",
        "px-5",
        "text-[15px] font-medium text-[#6B7280]",
        "shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
        "outline-none",
        "transition-all",
        "focus:ring-2 focus:ring-[#BFDBFE]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <div className="flex w-full items-center justify-center pr-6">
        {children}
      </div>

      <SelectPrimitive.Icon asChild>
        <ChevronDown
          className="absolute right-5 h-5 w-5 text-[#0057A8]"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        sideOffset={6}
        className={cn(
          "relative z-50",
          "overflow-hidden",
          "rounded-2xl",
          "border border-[#E5E7EB]",
          "bg-white",
          "shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
          "animate-in fade-in-0 zoom-in-95",
          "data-[side=bottom]:slide-in-from-bottom-2",
          "data-[side=top]:slide-in-from-top-2",
          position === "popper" &&
          "w-[var(--radix-select-trigger-width)]",
          className
        )}
        {...props}
      >


        <SelectPrimitive.Viewport
          className={cn(
            "max-h-60 overflow-y-auto p-2",
            position === "popper" &&
            "w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>


      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "px-2 pt-1 pb-2",
        "text-sm",
        "font-semibold",
        "text-[#6B7280]",
        className
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex h-10 w-full cursor-pointer items-center",
        "rounded-lg",
        "px-3 pr-8",
        "text-[14px]",
        "text-[#1F2937]",
        "outline-none",
        "transition-colors",
        "select-none",

        "focus:bg-[#DCEEFF]",
        "data-[state=checked]:bg-[#DCEEFF]",
        "data-[state=checked]:font-medium",

        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-40",

        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>
        {children}
      </SelectPrimitive.ItemText>

      <span className="absolute right-3 flex h-4 w-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4 text-[#0057A8]" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
}
function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cn(
        "my-1 h-px bg-[#E5E7EB]",
        className
      )}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        "flex h-8 cursor-default items-center justify-center bg-white",
        className
      )}
      {...props}
    >
      <ChevronUp className="h-4 w-4 text-[#0057A8]" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        "flex h-8 cursor-default items-center justify-center bg-white",
        className
      )}
      {...props}
    >
      <ChevronDown className="h-4 w-4 text-[#0057A8]" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}