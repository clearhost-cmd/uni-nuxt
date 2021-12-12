<template>
  <div>
    <div class="grid grid-cols-1 gap-4">
      <div class="text-xs" v-for="reply in $store.state.replies" :key="reply.id">
        <lazy-reply-item v-bind:reply="reply" />
      </div>

      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async fetch({store}) {
    await store.dispatch('loadReplies')
  },

  computed: {
    ...mapState({
      replies: 'replies'
    })
  }
}
</script>
