import React, { useEffect, useState } from 'react'

export default function PromptEditor() {
  const [templates, setTemplates] = useState<any[]>([])
  const [prompt, setPrompt] = useState('')

  useEffect(() => {
    fetch('/api/templates')
      .then((r) => r.json())
      .then((data) => setTemplates(data))
  }, [])

  return (
    <div className="p-4 bg-ui-surface rounded-xl">
      <h2 className="text-lg font-medium mb-2">Prompt</h2>
      <div className="flex gap-2 mb-2">
        <select
          className="p-2 border rounded"
          onChange={(e) => setPrompt(e.target.value)}
          aria-label="Template selector"
        >
          <option value="">-- Choose template --</option>
          {templates.map((t) => (
            <option key={t.id} value={t.prompt}>
              {t.name}
            </option>
          ))}
        </select>
        <button
          className="px-3 py-2 bg-primary-500 text-white rounded"
          onClick={() => setPrompt('')}
        >
          Clear
        </button>
      </div>

      <textarea
        className="w-full h-36 p-3 border rounded resize-none"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your prompt here..."
        aria-label="Prompt editor"
      />
    </div>
  )
}
