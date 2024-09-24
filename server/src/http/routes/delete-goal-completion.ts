
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { deleteGoalCompletion } from '../../services/delete-goal-completion'

export const deleteGoalCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/completions/:id',
    {
      schema: {
        params: z.object({
          id: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { id }: any = request.params

      try {
        const deletedGoalId = await deleteGoalCompletion({ id })

        if (!deletedGoalId) {
          return reply
            .status(404)
            .send({ success: false, message: 'Conclusão de meta não encontrada.' })
        }

        return reply.status(200).send({
          success: true,
          message: 'Conclusão de meta excluída com sucesso.',
        })
      } catch (error) {
        return reply
          .status(500)
          .send({ success: false, message: 'Erro ao excluir conclusão de meta.' })
      }
    }
  )
}