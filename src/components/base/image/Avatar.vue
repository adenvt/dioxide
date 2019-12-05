<template>
  <span class="avatar">
    <b-img
      v-img-fallback="avatar"
      class="avatar__img"
      :class="`avatar-${size}`"
      :src="src || avatar"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </span>
</template>

<script>
import Avatar from '@/utils/fake-avatar'

export default {
  props: {
    src : { type: String },
    name: {
      type   : String,
      default: '',
    },
    size: {
      type   : String,
      default: 'md',
    },
  },
  computed: {
    avatar () {
      return Avatar(this.name || '50x50')
    },
  },
}
</script>
