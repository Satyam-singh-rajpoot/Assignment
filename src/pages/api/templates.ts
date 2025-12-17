import { NextApiRequest, NextApiResponse } from 'next'

const templates = [
  { id: 'email', name: 'Email', prompt: 'Write a professional email about {{topic}}.' },
  { id: 'blog', name: 'Blog Post', prompt: 'Create a blog post outline about {{topic}}.' },
  { id: 'qa', name: 'Q&A', prompt: 'Answer the following questions succinctly: {{questions}}' }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates)
}
