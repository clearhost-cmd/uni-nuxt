<template>
  <div>
    <div class="grid grid-cols-1 gap-4">
      <div class="text-xs" v-for="tag in $store.state.tags" :key="tag.id">
        <lazy-tag-item v-bind:tag="tag" />
      </div>

      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async fetch({store}) {
    await store.dispatch('loadTags')
  },

  computed: {
    ...mapState({
      tags: 'tags'
    })
  }
}
</script>
