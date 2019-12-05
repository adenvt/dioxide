import { select } from '@storybook/addon-knobs'

export default function () {
  return select('Variant', [
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'info',
    'dark',
    'light',
    'white',
  ], 'primary')
}
