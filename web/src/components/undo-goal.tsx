import { useQueryClient } from '@tanstack/react-query'
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
} from './ui/alert-dialog'
import { Button } from './ui/button'
import { deleteGoalCompletion } from '../http/delete-goal-completion'

export function UndoGoal() {
  const queryClient = useQueryClient()

  async function handleDeleteGoalCompletion() {
    const url = new URL(window.location.href)
    const goalId = url.searchParams.get('goal')

    if (goalId) {
      await deleteGoalCompletion(goalId)
    }

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    clearGoalIdParam()
  }

  function clearGoalIdParam() {
    const url = new URL(window.location.href)
    url.searchParams.delete('goal')

    window.history.replaceState(null, '', url)
  }

  return (
    <AlertDialogContent>
      <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>

      <p className="text-zinc-400 text-sm mt-4">
        Esta ação não pode ser desfeita. Isso irá desfazer permanentemente sua
        meta de hoje.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
        <AlertDialogCancel asChild>
          <Button
            type="button"
            className="flex-1 w-full"
            variant="secondary"
            onClick={clearGoalIdParam}>
            Cancelar
          </Button>
        </AlertDialogCancel>

        <AlertDialogCancel asChild>
          <Button
            className="flex-1 w-full"
            onClick={handleDeleteGoalCompletion}>
            Sim, desfazer meta
          </Button>
        </AlertDialogCancel>
      </div>
    </AlertDialogContent>
  )
}
