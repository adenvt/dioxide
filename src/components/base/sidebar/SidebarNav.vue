<template functional>
  <b-link
    router-tag="div"
    class="sidebar-item--nav"
    :class="[data.class, data.staticClass]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot name="icon">
      <d-icon
        class="sidebar-item__icon"
        :name="props.icon"
        :size="props.iconSize"
      />
    </slot>
    <span class="sidebar-item__body">
      <slot />
    </span>
  </b-link>
</template>

<script>
export default {
  props: {
    icon: {
      type    : String,
      required: true,
    },
    iconSize: {
      type   : [String, Number],
      default: 20,
    },
  },
}
</script>
