import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import React from 'react'
import '@testing-library/jest-dom'

test('interact with ui', function hooFoo () {
  render(<App />)

  expect(screen.getByRole('button')).toBeInTheDocument()

  userEvent.click(screen.getByRole('button'))
  userEvent.click(screen.getByRole('button'))
  userEvent.click(screen.getByRole('button'))

  userEvent.type(screen.getByRole('textbox'), 'some text')

  expect(screen.getByText('Title')).toBeInTheDocument()
})
