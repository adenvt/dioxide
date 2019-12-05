<template>
  <div class="table-crud">
    <template v-if="!noSearchbar">
      <b-row class="mb-3">
        <b-col
          cols="8"
          md="4"
        >
          <b-form @submit.prevent="searching">
            <b-input-group>
              <b-form-select
                v-model="search.key"
                :options="optionsSearch"
                class="input-group-select w-35"
              />

              <d-form-input
                v-model="search.value"
                :name="search.key"
                @clear="searching"
              />

              <b-input-group-append>
                <d-button
                  type="submit"
                  class="border border-left-0"
                  variant="light"
                  icon="search"
                  icon-only
                />
              </b-input-group-append>
            </b-input-group>
          </b-form>
        </b-col>

        <b-col
          md="4"
          offset-md="4"
          class="text-right"
        >
          <slot name="table-actions">
            <d-button
              variant="white"
              icon="settings"
              icon-only
            />
          </slot>
        </b-col>
      </b-row>
    </template>

    <b-row>
      <b-col cols="12">
        <b-table
          ref="table"
          head-variant="light"
          :fields="tableFields"
          :items="items"
          v-bind="$attrs"
          show-empty
        >
          <template slot="HEAD[selected]">
            <b-checkbox
              v-model="selectedAll"
              :indeterminate="selectedIndeterminate"
            />
          </template>

          <template #selected="row">
            <b-checkbox
              v-model="selected"
              :value="row.item"
            />
          </template>

          <slot
            v-for="(_, name) in $slots"
            :slot="name"
            :name="name"
          />
          <template
            v-for="(_, name) in $scopedSlots"
            :slot="name"
            slot-scope="slotData"
          >
            <slot
              :name="name"
              v-bind="slotData"
            />
          </template>
        </b-table>

        <slot name="table-pagination">
          <d-table-pagination
            :searchable="false"
            :meta="meta"
            @pagination="$emit('pagination')"
          />
        </slot>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  inheritAttrs: false,
  props       : {
    fields       : { type: Array, required: true },
    items        : { type: Array, required: true },
    optionsSearch: { type: Array },
    meta         : { type: Object },
    noSearchbar  : { type: Boolean },
    selectable   : { type: Boolean },
  },
  data () {
    return {
      search: {
        key  : '',
        value: '',
      },
      selected: [],
    }
  },
  computed: {
    tableFields () {
      if (!this.selectable)
        return this.fields

      return [
        {
          key  : 'selected',
          label: '',
        },
        ...this.fields,
      ]
    },
    searchKey () {
      return _.get(this.$route.query, '_sk', _.get(this.optionsSearch, '0.value'))
    },
    searchValue () {
      return _.get(this.$route.query, this.searchKey, '')
    },
    selectedAll: {
      get () {
        return this.selected.length === this.items.length
      },
      set (value) {
        const old = this.selectedAll

        if (value !== old) {
          if (value)
            this.selected = this.items
          else
            this.selected = []
        }
      },
    },
    selectedIndeterminate () {
      return this.selected.length < this.items.length
        && this.selected.length > 0
    },
  },
  watch: {
    searchKey: {
      immediate: true,
      handler (value) {
        this.search.key = value
      },
    },
    searchValue: {
      immediate: true,
      handler (value) {
        this.search.value = value
      },
    },
    items () {
      this.selected = []
    },
  },
  methods: {
    searching () {
      const key   = { _sk: this.search.key }
      const value = this.search.value ? { [this.search.key]: this.search.value } : {}
      const old   = _.omit(this.$route.query, this.searchKey)
      const query = _.assign({}, old, key, value, { page: 1 })

      this.$router.replace({ query })
    },
  },
}
</script>
