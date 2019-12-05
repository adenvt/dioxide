<template>
  <div
    v-if="loading"
    class="overlay overlay-dark"
  >
    <div class="overlay__container">
      <img
        class="overlay__item"
        src="@/assets/image/Icon-white.svg"
        alt="Icon Privy"
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { counter: 0 }
  },
  computed: {
    loading: {
      get () {
        return this.counter > 0
      },
      set (value) {
        if (value)
          this.counter += 1
        else
          this.counter = Math.max(this.counter - 1, 0)
      },
    },
  },
  mounted () {
    this.$root.$on('overlay', this.setOverlay)
  },
  beforeDestroy () {
    this.$root.$off('overlay', this.setOverlay)
  },
  methods: {
    setOverlay (value) {
      this.loading = value
    },
    start () {
      // this.loading = true
    },
    finish () {
      // this.loading = false
    },
  },
}
</script>
