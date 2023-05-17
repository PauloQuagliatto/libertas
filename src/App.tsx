import { warn } from 'console'
import { AppRouter } from './router'
import { globalCss } from './styles'

const css = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
  },
  body: {
    'h1, h2, h3, h4, h5, h6, p, span, input, label, textarea': {
      fontFamily: 'Inter'
    },
    button: {
      cursor: 'pointer'
    }
  }
})

export function App() {
  css()

  return (
    <div>
      <AppRouter />
    </div>
  )
}
