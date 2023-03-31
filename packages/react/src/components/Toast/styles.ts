import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
  marginTop: '$1',
})

export const ToastCloseButton = styled(Toast.Close, {
  all: 'unset',
  color: '$gray200',
  background: 'transparent',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  background: '$gray800',
  width: '320px',
  maxWidth: '100vw',
  //   padding: '$3 $5',

  border: 'solid 1px $gray600',
  borderRadius: '$sm',

  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: 1,
  listStyle: 'none',
})
