import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CheckCircle2, Circle } from 'lucide-react'

export function RadioGroup(props: RadioGroupPrimitive.RadioGroupProps) {
  return (
    <RadioGroupPrimitive.RadioGroup
      {...props}
      className="flex flex-col gap-2"
    />
  )
}

export function RadioGroupItem(props: RadioGroupPrimitive.RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.RadioGroupItem
      {...props}
      className="group bg-zinc-900 border border-neutral-70 rounded-lg px-4 py-2.5 flex items-center justify-between outline-none hover:border-neutral-50 focus-visible:border-primary-pure focus-visible:ring-4 ring-primary-pure/10 data-[state=checked]:bg-primary-pure/5 data-[state=checked]:border-primary-pure"
    />
  )
}

export function RadioGroupIndicator() {
  return (
    <>
      <Circle className="size-4 text-zinc-600 group-data-[state=checked]:hidden" />
      <CheckCircle2 className="size-4 text-primary-pure hidden group-data-[state=checked]:inline" />
    </>
  )
}
