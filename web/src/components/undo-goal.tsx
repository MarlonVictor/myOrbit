import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
} from './ui/alert-dialog'
import { Button } from './ui/button'

export function UndoGoal() {
  return (
    <AlertDialogContent>
      <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>

      <p className="text-zinc-400 text-sm mt-4">
        Esta ação não pode ser desfeita. Isso irá desfazer permanentemente sua
        meta de hoje.
      </p>

      <div className="flex items-center gap-3 mt-4">
        <AlertDialogCancel asChild>
          <Button type="button" className="flex-1" variant="secondary">
            Cancelar
          </Button>
        </AlertDialogCancel>

        <Button
          className="flex-1"
          onClick={() => {
            const url = new URL(window.location.href) // Use window.location.href
            return url.searchParams.get('goal') // Retorna o valor do parâmetro, ou null se não existir
          }}>
          Sim, desfazer meta
        </Button>
      </div>
    </AlertDialogContent>
  )
}
