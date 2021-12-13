<template>
  <!--
    Pass posts and replies array to child
  -->
  <nuxt-child :post="$store.state.reply" />
</template>

<script>
import { mapState } from 'vuex';

export default {
  /**
   * Run State Dispatches
   */
  async fetch({ store, params }) {
    await store.dispatch('loadReply', {
      id: params.id
    })
  },

  /**
   * Create State Mapping
   */
  computed: {
    ...mapState({
      reply: 'reply'
    })
  }
}
</script>
