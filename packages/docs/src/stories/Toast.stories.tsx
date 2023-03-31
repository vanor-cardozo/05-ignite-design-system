import type { StoryObj, Meta } from '@storybook/react'

import { Button, Toast, ToastProps } from '@vanor-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    isOpen: true,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
