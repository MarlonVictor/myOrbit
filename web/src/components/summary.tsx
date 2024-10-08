import { CheckCircle2, Plus } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Separator } from './ui/separator'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import PendingGoals from './pending-goals'
import { MyOrbitIcon } from './my-orbit-icon'
import { getSummary } from '../http/get-summary'

import letsStart from '../assets/illustration-lets-start.svg'
import { AlertDialog, AlertDialogTrigger } from './ui/alert-dialog'
import { UndoGoal } from './undo-goal'

dayjs.locale('pt-br')

export function Summary() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  if (!data) return

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPercentage = Math.round((data?.completed * 100) / data.total)

  function handleSetGoalIdOnParams(goalId: string) {
    const url = new URL(window.location.href)
    url.searchParams.set('goal', goalId)

    window.history.pushState({}, '', url)
  }

  return (
    <AlertDialog>
      <main className="py-10 px-5 mx-auto flex flex-col gap-6 max-w-[480px]">
        <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-3">
            <MyOrbitIcon />
            <span className="text-lg font-semibold capitalize">
              {firstDayOfWeek} - {lastDayOfWeek}
            </span>
          </div>

          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="size-4" />
              Cadastrar meta
            </Button>
          </DialogTrigger>
        </div>

        <div className="flex flex-col gap-3">
          <Progress value={8} max={15}>
            <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
          </Progress>

          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>
              Você completou{' '}
              <span className="text-zinc-100">{data?.completed}</span> de{' '}
              <span className="text-zinc-100">{data?.total}</span> metas nessa
              semana.
            </span>
            <span>{completedPercentage}%</span>
          </div>
        </div>

        <Separator />

        <PendingGoals />

        <div className="flex flex-col gap-6">
          {data.goalsPerDay ? (
            <>
              <h2 className="text-xl font-medium">Sua semana</h2>

              {Object.entries(data.goalsPerDay).map(([date, goals]) => {
                const weekDay = dayjs(date).format('dddd')
                const formatedDate = dayjs(date).format('D [de] MMMM')

                return (
                  <div key={date} className="flex flex-col gap-4">
                    <h3 className="font-medium">
                      <span className="capitalize">{weekDay}</span>{' '}
                      <span className="text-zinc-400 text-xs">
                        ({formatedDate})
                      </span>
                    </h3>

                    <ul className="flex flex-col gap-3">
                      {goals.map((goal) => {
                        const time = dayjs(goal.createdAt).format('HH:mm')

                        return (
                          <li key={goal.id} className="flex flex-row gap-2">
                            <CheckCircle2 className="size-4 text-secondary-light shrink-0 translate-y-0.5" />
                            <span className="text-sm text-zinc-400">
                              Você completou "
                              <span className="text-zinc-100">
                                {goal.title}
                              </span>
                              " às{' '}
                              <span className="text-zinc-100">{time}h</span>
                            </span>
                            <AlertDialogTrigger asChild>
                              <button
                                type="button"
                                className="h-max text-zinc-500 hover:text-zinc-400 transition-colors text-xs underline underline-offset-2 ml-2 translate-y-0.5"
                                onClick={() =>
                                  handleSetGoalIdOnParams(goal.id)
                                }>
                                Desfazer
                              </button>
                            </AlertDialogTrigger>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </>
          ) : (
            <>
              <img
                src={letsStart}
                alt="Lets start"
                className="w-3/4 sm:w-full mx-auto"
              />

              <p className="text-zinc-300 leading-relaxed max-w text-center text-sm sm:text-md">
                Você ainda não cumpriu nenhuma meta!!
              </p>
            </>
          )}
        </div>
      </main>

      <UndoGoal />
    </AlertDialog>
  )
}
