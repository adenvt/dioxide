<template functional>
  <div
    class="submenu"
    :class="[data.class, data.staticClass]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <div class="submenu__label">
      <slot name="label">
        {{ props.label }}
      </slot>
    </div>
    <div class="submenu__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default { props: { label: { type: String } } }
</script>
