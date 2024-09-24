import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

interface DeleteGoalCompletionRequest {
  id: string
}

export async function deleteGoalCompletion({
  id,
}: DeleteGoalCompletionRequest) {
  try {
    const result = await db
      .delete(goalCompletions)
      .where(eq(goalCompletions.id, id))
      .returning()

    if (result.length === 0) {
      return { success: false, message: 'Conclusão de meta não encontrada.' }
    }

    return { success: true, message: 'Conclusão de meta excluída com sucesso.' }
  } catch (error) {
    console.error('Erro ao excluir conclusão de meta:', error)
    return {
      success: false,
      message: 'Ocorreu um erro ao excluir a conclusão da meta.',
    }
  }
}