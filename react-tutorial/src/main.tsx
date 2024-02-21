import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//Renderizar o componente App.tsx como  tag <App />
//O padrão do React é um padrão da primeira letro do nome do compenente ser maiscula
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
