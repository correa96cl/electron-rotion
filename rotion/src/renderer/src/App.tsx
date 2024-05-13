import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './styles/global.css'

export function App() {
  return (
    <div className="h-screen w-screen text-rotion-100 flex">
      <Sidebar />
      <div className="flex-1 flex-col max-h-screen"></div>
      <Header />
      <main className="flex-1 flex items-center justify-center text-rotation-400">
        Seleccione ou crie um documento
      </main>
    </div>
  )
}
