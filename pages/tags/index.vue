<template>
  <div>
    <!--
      Create for each post in posts state
    -->
    <div v-for="tag in $store.state.tags" :key="tag.id">
      <item-base :title="tag.title" :body="tag.body" :created="tag.created">
        <item-crud uri="tags" operation="edit" :id="tag.id" action="Edit Tag" />
        <item-crud uri="tags" operation="delete" :id="tag.id" action="Delete Tag" />
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
    await store.dispatch('loadTags')
  },

  /**
   * Create State Mapping
   */
  computed: {
    ...mapState({
      tags: 'tags'
    })
  }
}
</script>
