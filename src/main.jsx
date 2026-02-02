import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './contexts/AppProvider.jsx'
import Loader from './Loader.jsx'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <Loader>
      <App />
    </Loader>
  </AppProvider>
)
