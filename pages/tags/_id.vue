<template>
  <!--
    Pass posts and replies array to child
  -->
  <nuxt-child :post="$store.state.tag" />
</template>

<script>
import { mapState } from 'vuex';

export default {
  layout: 'index',

  /**
   * Run State Dispatches
   */
  async fetch({ store, params }) {
    await store.dispatch('loadTag', {
      id: params.id
    })
  },

  /**
   * Create State Mapping
   */
  computed: {
    ...mapState({
      tag: 'tag'
    })
  }
}
</script>
