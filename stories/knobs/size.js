import { select } from '@storybook/addon-knobs'

export default function () {
  return select('Size', [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ], 'md')
}
