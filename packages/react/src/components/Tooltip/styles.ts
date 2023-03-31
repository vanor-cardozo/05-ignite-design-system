import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  color: '$gray100',
  fontFamily: '$inter',
  fontSize: '$sm',
  padding: '$4 $3',
  borderRadius: '$xs',
  zIndex: 1,
})

export const TooltipArrow = styled(Tooltip.Arrow, {})
