<template functional>
  <div class="form-control-alt">
    <b-input
      v-bind="data.attrs"
      v-on="listeners"
    />

    <template v-if="props.clearBtn && data.attrs && data.attrs.value">
      <slot name="btn">
        <div
          class="form-control-alt__btn"
          @click.prevent="($event) => {
            if (listeners.input)
              listeners.input('')
            else if (listeners.change)
              listeners.change('')

            if (listeners.clear)
              listeners.clear($event)
          }"
        >
          <d-icon
            name="close--filled"
            size="16"
          />
        </div>
      </slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    clearBtn: {
      type   : Boolean,
      default: true,
    },
  },
}
</script>
