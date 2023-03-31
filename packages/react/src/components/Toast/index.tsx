import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import {
  ToastCloseButton,
  ToastRoot,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
  isOpen: boolean
}

export function Toast({ title, description, isOpen, ...props }: ToastProps) {
  const [open, setOpen] = useState(isOpen)

  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot open={open}>
        <ToastTitle>
          {title}
          <ToastCloseButton>
            <X onClick={() => setOpen(false)} />
          </ToastCloseButton>
        </ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}
