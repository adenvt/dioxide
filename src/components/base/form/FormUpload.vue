<template>
  <label
    class="form-upload"
    :class="{ dragover: dragover }"
    @drop.prevent="onDrop"
    @dragover.prevent
    @dragenter.prevent="dragover = true"
    @dragleave.prevent="dragover = false"
  >
    <input
      ref="input"
      type="file"
      v-bind="$attrs"
      @change="onChange"
    >

    <slot>
      Browser or Drag Here
    </slot>
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props       : { value: { type: process.server ? String : [File, String] } },
  data () {
    return { dragover: false }
  },
  methods: {
    onChange (event) {
      this.$emit('input', event.target.files[0])
    },
    onDrop (event) {
      this.dragover = false
      this.$emit('input', event.dataTransfer.files[0])
    },
    browse () {
      this.$refs.input.click()
    },
  },
}
</script>
