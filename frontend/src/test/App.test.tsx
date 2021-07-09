import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

// TODO: Add some simple test cases, e.g. checking components are rendered successfully
test('should show the title', () => {
    render(<App />)
    const todoTitle = screen.getByText("My Todos")
    expect(todoTitle).toBeInTheDocument()
  })