<template>
  <div class="table-pagination">
    <template v-if="!mini">
      <template v-if="!hidePerPage && !noRouter">
        <div class="table-pagination__info">
          Items per page:
        </div>
        <b-select
          v-model="rowPerPage"
          class="table-pagination__select"
          :options="perPageOption"
        />
      </template>

      <div class="table-pagination__info table-pagination__info--main">
        <slot>
          {{ countPerPage }} of {{ totalRows }} items
        </slot>
      </div>
    </template>

    <b-select
      v-model="page"
      class="table-pagination__select"
      :options="pages"
    />
    <div class="table-pagination__info">
      of {{ totalPage }} page(s)
    </div>
    <d-button
      variant="light"
      icon="caret--left"
      icon-only
      :disabled="page < 2"
      @click="prevPage"
    />
    <d-button
      variant="light"
      icon="caret--right"
      icon-only
      :disabled="page >= totalPage"
      @click="nextPage"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import Button from '../button/Button'

export default {
  components: { 'd-button': Button },
  props     : {
    value: { type: [String, Number] },
    meta : {
      type   : Object,
      default: () => ({
        page    : 1,
        per_page: 50,
        total   : 0,
      }),
    },
    perPageOption: {
      type   : Array,
      default: () => [
        5,
        10,
        25,
      ],
    },
    perPage    : { type: [String, Boolean] },
    hidePerPage: { type: Boolean },
    noRouter   : { type: Boolean },
    mini       : { type: Boolean },
  },
  computed: {
    page: {
      get () {
        const value = this.noRouter
          ? parseInt(this.value)
          : parseInt(this.$route.query.page)

        return value || parseInt(this.meta.page) || 1
      },
      set (value) {
        const old = this.page

        if (value !== old) {
          if (!this.noRouter)
            this.$router.replace({ query: _.assign({}, this.$route.query, { page: value }) })
          else if (value !== this.page)
            this.$emit('input', value)
        }
      },
    },
    rowPerPage: {
      get () {
        const value = this.noRouter
          ? parseInt(this.perPage)
          : parseInt(this.$route.query.per_page)

        return parseInt(this.meta.per_page) || value || 25
      },
      set (value) {
        const old = this.rowPerPage

        if (value !== old) {
          if (!this.noRouter) {
            const query = _.assign({}, this.$route.query, { page: 1, per_page: value })

            this.$router.replace({ query })
          } else if (value !== this.perPage)
            this.$emit('update:perPage', value)
        }
      },
    },
    pages () {
      return _.range(1, this.totalPage + 1)
    },
    countPerPage () {
      return (this.meta.page * this.meta.per_page) || 0
    },
    showing () {
      return (
        this.meta.total < this.countPerPage
          ? this.meta.total
          : this.countPerPage
      ) || 0
    },
    totalRows () {
      return parseInt(this.meta.total) || 0
    },
    totalPage () {
      return Math.ceil(this.totalRows / this.rowPerPage) || 1
    },
  },
  methods: {
    prevPage () {
      this.page = Math.max(this.page - 1, 1)
    },
    nextPage () {
      this.page = Math.min(this.page + 1, this.totalPage)
    },
  },
}
</script>
