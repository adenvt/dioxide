<template functional>
  <div
    class="sidebar-item--brand"
    :class="[data.class, data.staticClass]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot name="icon">
      <d-button
        variant="dark"
        class="sidebar-item__icon sidebar-item--button"
        icon="menu"
        icon-only
        @click="listeners.toggle ? listeners.toggle() : () => {}"
      />
    </slot>
    <span class="sidebar-item__body">
      <slot />
    </span>
  </div>
</template>
