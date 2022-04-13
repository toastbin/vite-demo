import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'virtual:windi.css'

const impotrModule = (m: string) => import(/* @vite-ignore */ `./${m}`)
impotrModule('constant')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
