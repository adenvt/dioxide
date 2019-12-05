<template>
  <d-input
    :type="show ? 'text' : 'password'"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template slot="btn">
      <div
        class="form-control-alt__btn"
        @click.prevent="show = !show"
      >
        <d-icon
          :name="show ? 'view--off' : 'view'"
          size="16"
        />
      </div>
    </template>
  </d-input>
</template>

<script>
import FormInput from './FormInput'

export default {
  components: { 'd-input': FormInput },
  data () {
    return { show: false }
  },
}
</script>
