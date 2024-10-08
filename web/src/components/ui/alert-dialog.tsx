import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

export function AlertDialog(props: AlertDialogPrimitive.AlertDialogProps) {
  return <AlertDialogPrimitive.AlertDialog {...props} />
}

export function AlertDialogTrigger(
  props: AlertDialogPrimitive.AlertDialogTriggerProps
) {
  return <AlertDialogPrimitive.AlertDialogTrigger {...props} />
}

export function AlertDialogCancel(
  props: AlertDialogPrimitive.AlertDialogCancelProps
) {
  return <AlertDialogPrimitive.AlertDialogCancel {...props} />
}

export function AlertDialogPortal(
  props: AlertDialogPrimitive.AlertDialogPortalProps
) {
  return <AlertDialogPrimitive.AlertDialogPortal {...props} />
}

export function AlertDialogOverlay(
  props: AlertDialogPrimitive.AlertDialogOverlayProps
) {
  return (
    <AlertDialogPrimitive.AlertDialogOverlay
      {...props}
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
    />
  )
}

export function AlertDialogContent(
  props: AlertDialogPrimitive.AlertDialogContentProps
) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />

      <AlertDialogPrimitive.AlertDialogContent
        {...props}
        className="fixed z-50 inset-0 m-auto w-4/5 sm:w-[500px] !h-max border rounded-lg border-zinc-700 bg-neutral-90 p-8"
      />
    </AlertDialogPortal>
  )
}

export function AlertDialogTitle(
  props: AlertDialogPrimitive.AlertDialogTitleProps
) {
  return (
    <AlertDialogPrimitive.AlertDialogTitle
      {...props}
      className="text-lg font-semibold"
    />
  )
}

export function AlertDialogDescription(
  props: AlertDialogPrimitive.AlertDialogDescriptionProps
) {
  return (
    <AlertDialogPrimitive.AlertDialogDescription
      {...props}
      className="text-zinc-400 text-sm leading-relaxed"
    />
  )
}
