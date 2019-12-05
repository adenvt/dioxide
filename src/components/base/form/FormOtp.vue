<template>
  <div class="form-otp">
    <template v-for="(_, n) in code">
      <div
        :key="n"
        class="form-otp__col"
      >
        <b-input
          v-bind="$attrs"
          class="form-otp__input"
          maxlength="1"
          autocomplete="off"
          :value="code[n]"
          @input="onChange(n, $event)"
          @focus.native.prevent="focus($event)"
          @keyup.native.left.prevent="prev(n)"
          @keyup.native.right.prevent="next(n)"
          @keyup.native.delete.prevent="onDelete(n, $event)"
          @paste.native.prevent="paste($event)"
        />
      </div>
    </template>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name        : 'PinInput',
  inheritAttrs: false,
  props       : {
    value : String,
    length: {
      type   : Number,
      default: 6,
    },
  },
  computed: {
    code () {
      const length = Math.min(this.value.length, this.length)
      const code   = this.value.slice(0, length)
      const dump   = (new Array(this.length)).fill('')

      return Object.assign(dump, code.split(''))
    },
  },
  methods: {
    focus (event) {
      $(event.target).select()
    },
    onChange (n, value) {
      if (this.code[n] !== value)
        this.setValue(n, value)

      if (value)
        this.next(n)
      else
        this.prev(n)
    },
    onDelete (n, event) {
      if (!event.target.value)
        this.prev(n)
    },
    next (n) {
      this.$nextTick(() => {
        const next = Math.min(n + 1, this.length)

        $(this.$el).find('.form-otp__col').eq(next).find('.form-otp__input').focus().select()
      })
    },
    prev (n) {
      this.$nextTick(() => {
        const previous = Math.max(n - 1, 0)

        $(this.$el).find('.form-otp__col').eq(previous).find('.form-otp__input').focus().select()
      })
    },
    setValue (n, value) {
      this.$nextTick(() => {
        const code = this.code
          .map((old, i) => {
            if (i !== n)
              return old

            return value || ' '
          })
          .join('')
          .trimEnd()

        this.$emit('input', code)
      })
    },
    paste (event) {
      const text   = event.clipboardData.getData('Text')
      const length = Math.min(text.length, this.length)
      const code   = text.slice(0, length)

      this.$emit('input', code)
    },
  },
}
</script>
