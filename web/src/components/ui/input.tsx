import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        'px-4 h-12 bg-zinc-900 border border-neutral-70 rounded-lg placeholder-zinc-400 outline-none text-sm hover:border-neutral-50 focus-visible:border-primary-pure focus-visible:ring-4 ring-primary-pure/10',
        props.className
      )}
    />
  )
})

Input.displayName = 'Input'
