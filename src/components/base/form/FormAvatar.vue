<template>
  <label class="form-avatar">
    <b-form-file
      v-model="file"
      class="form-avatar__input"
      accept="image/*"
      v-bind="$attrs"
    />
    <d-avatar
      :src="icon"
      :name="name"
      :size="size"
    />
  </label>
</template>

<script>
import Avatar from '../image/Avatar'

export default {
  name        : 'AvatarForm',
  components  : { 'd-avatar': Avatar },
  extends     : Avatar,
  inheritAttrs: false,
  props       : { value: { type: process.server ? String : [File, String] } },
  data () {
    return { icon: null }
  },
  computed: {
    file: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
  },
  watch: {
    file (file) {
      // Revoke last Object URL icon to avoid memory leak
      if (String(this.icon).startsWith('blob:'))
        URL.revokeObjectURL(this.icon)

      // Create preview image
      this.icon = file && file instanceof File
        ? URL.createObjectURL(file)
        : this.src
    },
    src: {
      immediate: true,
      handler (value) {
        this.icon = value
      },
    },
  },
  beforeDestroy () {
    if (String(this.icon).startsWith('blob:'))
      URL.revokeObjectURL(this.icon)
  },
}
</script>
