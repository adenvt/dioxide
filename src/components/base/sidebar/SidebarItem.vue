<template functional>
  <div
    class="sidebar-item"
    :class="[data.class, data.staticClass]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <div class="sidebar-item__mini">
      <slot name="mini" />
    </div>

    <div class="sidebar-item__body">
      <slot>
        <slot name="full" />
      </slot>
    </div>
  </div>
</template>
