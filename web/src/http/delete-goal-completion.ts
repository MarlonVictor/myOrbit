export async function deleteGoalCompletion(goalId: string) {
    await fetch(`http://localhost:3333/completions/${goalId}`, {
        method: 'DELETE'
    })
}