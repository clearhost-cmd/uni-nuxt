<template>
  <div>
    <div class="grid grid-cols-1 gap-4">
      <div class="text-xs" v-for="user in $store.state.users" :key="user.id">
        <lazy-user-item v-bind:user="user"/>
      </div>

      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async fetch({store}) {
    await store.dispatch('loadUsers')
  },

  computed: {
    ...mapState({
      users: 'users'
    })
  }
}
</script>
