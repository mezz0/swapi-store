import 'react-app-polyfill/ie11'
import { hydrate, render } from 'react-dom'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

// IE classList polyfill
if ('classList' in HTMLElement.prototype && !('classList' in Element.prototype)) {
  let desc = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'classList')
  Object.defineProperty(Element.prototype, 'classList', desc)
}

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<Router basename={process.env.PUBLIC_URL}><App /></Router>, rootElement)
} else {
  render(<Router basename={process.env.PUBLIC_URL}><App /></Router>, rootElement)
}
