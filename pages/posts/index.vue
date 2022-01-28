<template>
  <div>
    <!--
      Create for each post in posts state
    -->
    <div v-for="post in $store.state.posts" :key="post.id">
      <item-base :title="post.title" :body="post.body" :created="post.created">
        <item-crud uri="posts" operation="" :id="post.id" action="view replies" />
        <item-crud uri="posts" operation="edit" :id="post.id" action="edit post" />
        <item-crud uri="posts" operation="delete" :id="post.id" action="delete post" />
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
  layout: 'default',
    
  /**
   * Run State Dispatches
   */
  async fetch({store}) {
    await store.dispatch('loadPosts')
  },

  /**
   * Create State Mapping
   */
  computed: {
    ...mapState({
      posts: 'posts'
    })
  }
}
</script>
