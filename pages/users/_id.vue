<template>
  <!--
    Pass posts and replies array to child
  -->
  <nuxt-child :post="$store.state.user" />
</template>

<script>
import { mapState } from 'vuex';

export default {
  layout: 'index',

  /**
   * Run State Dispatches
   */
  async fetch({ store, params }) {
    await store.dispatch('loadUser', {
      id: params.id
    })
  },

  /**
   * Create State Mapping
   */
  computed: {
    ...mapState({
      user: 'user'
    })
  }
}
</script>
