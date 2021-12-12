<template>
  <nuxt-child
    :user="$store.state.user" :posts="$store.state.user_posts"
    :tags="$store.state.user_tags" :replies="$store.state.user_replies"
  />
</template>

<script>
import { mapState } from 'vuex';

export default {
  async fetch({ store, params }) {
    await store.dispatch('loadUser', {
      id: params.id
    })
    await store.dispatch('loadUserPosts', {
      id: params.id
    })
    await store.dispatch('loadUserTags', {
      id: params.id
    })
    await store.dispatch('loadUserReplies', {
      id: params.id
    })
  },

  computed: {
    ...mapState({
      user: 'user',
      posts: 'user_posts',
      tags: 'user_tags',
      replies: 'user_replies',
    })
  }
}
</script>
