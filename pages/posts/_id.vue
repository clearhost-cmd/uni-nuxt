<template>
  <!--
    Pass posts and replies array to child
  -->
  <nuxt-child :post="$store.state.post" :replies="$store.state.reply" />
</template>

<script>
import { mapState } from 'vuex';

export default {
  /**
   * Run State Dispatches
   */
  async fetch({ store, params }) {
    await store.dispatch('loadPost', {
      id: params.id
    })
    await store.dispatch('loadPostReplies', {
      id: params.id
    })
  },

  /**
   * Create State Mapping
   */
  computed: {
    ...mapState({
      post: 'post',
      replies: 'post_replies'
    })
  }
}
</script>
