<template functional>
  <b-btn
    :class="[{ 'icon-only': props.iconOnly }, data.staticClass, data.class]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <span class="btn-icon">
      <slot name="icon">
        <template v-if="props.icon">
          <d-icon
            :name="props.icon"
            :size="props.iconSize"
          />
        </template>
      </slot>
    </span>

    <slot />
  </b-btn>
</template>

<script>
export default {
  props: {
    icon    : { type: String },
    iconOnly: { type: Boolean },
    iconSize: { type: [String, Number] },
  },
}
</script>
