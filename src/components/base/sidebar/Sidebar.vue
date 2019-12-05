<template functional>
  <div
    class="sidebar"
    :class="[`sidebar-${props.variant}`, { open: props.value }, data.class, data.staticClass]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type   : String,
      default: 'dark',
    },
    value: {
      type   : Boolean,
      default: false,
    },
  },
}
</script>
