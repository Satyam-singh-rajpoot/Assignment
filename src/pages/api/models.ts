import { NextApiRequest, NextApiResponse } from 'next'

const models = [
  { id: 'gpt-4o', name: 'GPT-4o', description: 'High-capacity general model', maxTokens: 8192 },
  { id: 'gpt-4o-mini', name: 'GPT-4o-mini', description: 'Fast and cheaper', maxTokens: 2048 },
  { id: 'gpt-3.5', name: 'GPT-3.5', description: 'Cost-efficient chat', maxTokens: 4096 }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(models)
}
