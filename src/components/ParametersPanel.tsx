import React from 'react'

export default function ParametersPanel() {
  return (
    <div className="p-4 bg-ui-surface rounded-xl">
      <h2 className="text-lg font-medium mb-2">Parameters</h2>
      <label className="block mb-2">
        <span className="text-sm">Temperature</span>
        <input type="range" min="0" max="1" step="0.01" defaultValue="0.5" className="w-full" aria-label="Temperature" />
      </label>
      <label className="block mb-2">
        <span className="text-sm">Max tokens</span>
        <input type="number" defaultValue={512} className="w-full p-2 border rounded" aria-label="Max tokens" />
      </label>
      <label className="block">
        <span className="text-sm">Top-p</span>
        <input type="range" min="0" max="1" step="0.01" defaultValue="0.9" className="w-full" aria-label="Top-p" />
      </label>
    </div>
  )
}
