import React, { useState, useRef } from 'react'
import { TextField } from '@/components/Fields'
import { Button } from '@/components/Button'

const Modal = ({ onSubmit, onClose }) => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const modalContentRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(email, setMessage)
  }

  const handleClickOutside = (event) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div
        className="relative w-1/2 rounded-lg bg-white p-6"
        ref={modalContentRef}
      >
        <button
          className="absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xl font-bold text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="mb-4 text-2xl">Be first in line for Wonder!</h2>
        <form
          className="flex w-full justify-center md:w-auto"
          onSubmit={handleSubmit}
        >
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            placeholder="Email address"
            autoComplete="email"
            required
            className="w-80 min-w-0 shrink"
          />
          <Button type="submit" className="ml-4 flex-none">
            <span className="hidden lg:inline">Join our waitlist</span>
            <span className="lg:hidden">Join our waitlist</span>
          </Button>
        </form>
        <p className="mt-2">{message}</p>
      </div>
    </div>
  )
}

export default Modal
