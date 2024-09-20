import * as ProgressPrimitive from '@radix-ui/react-progress'

export function Progress(props: ProgressPrimitive.ProgressProps) {
  return (
    <ProgressPrimitive.Progress
      {...props}
      className="bg-zinc-800 rounded-full h-2"
    />
  )
}

export function ProgressIndicator(
  props: ProgressPrimitive.ProgressIndicatorProps
) {
  return (
    <ProgressPrimitive.Indicator
      {...props}
      className="bg-[linear-gradient(90deg,rgba(253,184,138,1)0%,rgba(245,130,130,1)50%,rgba(244,114,182,1)100%)] w-1/2 h-2 rounded-full"
    />
  )
}
