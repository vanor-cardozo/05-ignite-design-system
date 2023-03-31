import { ReactElement } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps {
  name: string
  component: ReactElement
}

export function Tooltip({ name, component }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipTrigger asChild>{component}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {name}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}
