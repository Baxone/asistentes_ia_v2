import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App', () => {
  it('renderiza el título del boilerplate', () => {
    render(<App />)
    expect(screen.getByText(/Boilerplate React \+ Vite/i)).toBeInTheDocument()
  })

  it('incrementa y decrementa el contador con Zustand', async () => {
    const user = userEvent.setup()
    render(<App />)

    const incrementBtn = screen.getByRole('button', { name: '+' })
    const decrementBtn = screen.getByRole('button', { name: '-' })

    await user.click(incrementBtn)
    await user.click(incrementBtn)
    expect(screen.getByText('2')).toBeInTheDocument()

    await user.click(decrementBtn)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('reinicia el contador al hacer clic en Reiniciar', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: '+' }))
    await user.click(screen.getByRole('button', { name: 'Reiniciar' }))

    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
