import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import DioxideVue from '../src/index'
import '../src/assets/scss/app.scss'

addDecorator(withKnobs)

Vue.use(BootstrapVue)
Vue.use(DioxideVue)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
