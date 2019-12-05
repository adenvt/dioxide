import { storiesOf } from '@storybook/vue'
import { boolean } from '@storybook/addon-knobs'
import variants from './knobs/variants'
import size from './knobs/size'

storiesOf('Components', module)
  .add(
    'dButton',
    () => ({
      props: {
        variants: { default: variants() },
        size    : { default: size() },
        icon    : { default: boolean('Icon', false) },
        iconOnly: { default: boolean('Icon Only', false) },
      },
      render (h) {
        return (
          <d-btn
            variant={this.variants}
            size={this.size}
            icon={this.icon ? 'add' : ''}
            icon-only={this.iconOnly}
          >
            Button
          </d-btn>
        )
      },
    }),
    { notes: 'A very simple example of addon notes' },
  )
