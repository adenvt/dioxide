<script>
import _ from 'lodash'

export default {
  functional: true,
  props     : {
    name: {
      type    : String,
      required: true,
    },
    size: {
      type   : [String, Number],
      default: 20,
    },
  },
  render (h, context) {
    const { props: properties } = context
    const name                  = _.toLower(properties.name)
    const size                  = properties.size
    const icon                  = require(`@carbon/icons-vue/es/${name}/${size}.js`).default

    return h('span', { class: ['icon'], ...context.data }, [h(icon)])
  },
}
</script>
