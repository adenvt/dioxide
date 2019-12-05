<template functional>
  <b-link
    class="submenu-item"
    router-tag="div"
    :class="[data.class, data.staticClass]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <span class="submenu-item__icon">
      <slot name="icon">
        <d-icon
          :name="props.icon"
          :size="props.iconSize"
        />
      </slot>
    </span>

    <div class="submenu-item__body">
      <slot />
    </div>

    <slot name="badge">
      <template v-if="props.badge">
        <b-badge
          pill
          class="submenu-item__badge px-3"
        >
          {{ props.badge }}
        </b-badge>
      </template>
    </slot>
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
    badge: { type: String },
  },
}
</script>
