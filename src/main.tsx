import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/route.tsx'
import { ColorTheme } from './ColorTheme/ColorTheme.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <ColorTheme defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* <App/> */}
        <Toaster position="top-right" />
      </Provider>
    </ColorTheme>
  </StrictMode>,
)
