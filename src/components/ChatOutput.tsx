import React from 'react'

export default function ChatOutput() {
  return (
    <div className="p-4 bg-ui-surface rounded-xl h-96 overflow-auto">
      <h2 className="text-lg font-medium mb-2">Chat</h2>
      <div className="space-y-3">
        <div className="p-3 bg-white rounded shadow-sm">Hello — this is a sample assistant message.</div>
        <div className="p-3 bg-slate-100 rounded text-right">User: Hi, can you help?</div>
      </div>
    </div>
  )
}
