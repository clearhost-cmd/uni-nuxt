<template>
  <div>
    <!--
      Create for each post in posts state
    -->
    <div v-for="reply in $store.state.replies" :key="reply.id">
      <item-base :title="reply.title" :body="reply.body" :created="reply.created">
        <item-crud uri="replies" operation="edit" :id="reply.id" action="edit reply" />
        <item-crud uri="replies" operation="delete" :id="reply.id" action="delete reply" />
      </item-base>
    </div>

    <!--
      Pass posts and replies array to child
    -->
    <nuxt-child />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  /**
   * Run State Dispatches
   */
  async fetch({store}) {
    await store.dispatch('loadReplies')
  },

  /**
   * Create State Mapping
   */
  computed: {
    ...mapState({
      replies: 'replies'
    })
  }
}
</script>
