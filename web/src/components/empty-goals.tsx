import { Plus } from 'lucide-react'

import logo from '../assets/logo-my-orbit.svg'
import letsStart from '../assets/illustration-lets-start.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'

export function EmptyGoals() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="my.orbit" />

      <img src={letsStart} alt="Lets start" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal{' '}
        <span className="underline underline-offset-2">cadastrar um</span> agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </main>
  )
}
