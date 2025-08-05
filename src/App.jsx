import './App.css'
import AppRoutes from './router/Routes.jsx';

function App() {

  return (
    <div className="min-h-screen flex-col w-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center p-4">
      <AppRoutes />
    </div>
  )
}

export default App