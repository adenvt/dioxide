import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'

storiesOf('Welcome', module).add('to Storybook', () => ({
  methods: { action: linkTo('Button') },
  render (h) {
    return <h1>Welcome</h1>
  },
}))
