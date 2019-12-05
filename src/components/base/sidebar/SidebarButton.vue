<template functional>
  <b-btn
    class="sidebar-item--button"
    :class="[data.class, data.staticClass]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot name="icon">
      <span class="sidebar-item__icon btn-icon">
        <d-icon
          class=""
          :name="props.icon"
          :size="props.iconSize"
        />
      </span>
    </slot>
    <span class="sidebar-item__body">
      <slot />
    </span>
  </b-btn>
</template>

<script>
export default {
  props: {
    icon: {
      type    : String,
      required: true,
    },
    iconSize: { type: [String, Number] },
  },
}
</script>
