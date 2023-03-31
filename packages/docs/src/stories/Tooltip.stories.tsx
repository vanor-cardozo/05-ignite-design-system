import type { StoryObj, Meta } from '@storybook/react'

import { Button, Tooltip, TooltipProps } from '@vanor-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    name: '26 de Outubro - Disponível',
    component: <Button>Hello!</Button>,
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
