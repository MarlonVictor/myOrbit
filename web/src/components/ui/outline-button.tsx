import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function OutlineButton(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        'flex items-center px-3 py-2 gap-2 leading-none rounded-full border border-dashed border-zinc-700 text-sm text-zinc-300 hover:border-neutral-70 disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:border-primary-light ring-primary-light/10 focus-visible:ring-4',
        props.className
      )}
    />
  )
}
