import React, { useEffect, useState } from 'react'

type Model = { id: string; name: string; description?: string }

export default function ModelSelector() {
  const [models, setModels] = useState<Model[]>([])
  const [selected, setSelected] = useState<string>('')

  useEffect(() => {
    fetch('/api/models')
      .then((r) => r.json())
      .then((data) => {
        setModels(data)
        if (data.length) setSelected(data[0].id)
      })
  }, [])

  return (
    <div className="p-4 bg-ui-surface rounded-xl">
      <h2 className="text-lg font-medium mb-2">Model</h2>
      <select
        aria-label="Model selector"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full p-2 border rounded"
      >
        {models.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
      <p className="text-sm text-muted mt-2">Selected: {selected}</p>
    </div>
  )
}
