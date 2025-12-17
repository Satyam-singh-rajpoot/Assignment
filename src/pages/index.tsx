import Head from 'next/head'
import ModelSelector from '../components/ModelSelector'
import PromptEditor from '../components/PromptEditor'
import ParametersPanel from '../components/ParametersPanel'
import ChatOutput from '../components/ChatOutput'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-ui-bg text-slate-900 p-6">
      <Head>
        <title>AI UI Assessment</title>
      </Head>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">AI Playground</h1>
        <ThemeToggle />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-1 space-y-4">
          <ModelSelector />
          <ParametersPanel />
        </section>

        <section className="md:col-span-2 space-y-4">
          <PromptEditor />
          <ChatOutput />
        </section>
      </main>
    </div>
  )
}
