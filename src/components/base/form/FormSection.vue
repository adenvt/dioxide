<template functional>
  <b-row
    class="form-section"
    v-bind="data.attrs"
    :class="[data.staticClass, data.class]"
    v-on="listeners"
  >
    <b-col
      :md="props.full ? 4 : 3"
    >
      <slot name="title">
        <div class="form-section__title">
          {{ props.title }}
        </div>
      </slot>
      <slot name="description">
        <div class="form-section__description text-muted small form-text">
          {{ props.description }}
        </div>
      </slot>
    </b-col>
    <b-col
      :md="props.full ? 8 : 4"
      class="form-section__body"
    >
      <slot />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title      : String,
    description: String,
    full       : Boolean,
  },
}
</script>
