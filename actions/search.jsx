'use server'

import { Solution } from '@chatbotkit/cli/solution'

export async function search({ query }) {
  if (!query) {
    return []
  }

  const solution = await Solution.load('search')

  const { records } = await solution.dataset.default.client.search(
    solution.dataset.default.id,
    query
  )

  return records
}
