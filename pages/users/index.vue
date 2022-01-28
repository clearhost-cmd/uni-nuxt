<template>
  <div>
    <!--
      Create for each post in posts state
    -->
    <div v-for="user in $store.state.users" :key="user.id">
      <item-base :title="user.name" :body="user.password" :created="user.created">
        <item-crud uri="users" operation="edit" :id="user.id" action="edit user" />
        <item-crud uri="users" operation="delete" :id="user.id" action="delete user" />
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
    await store.dispatch('loadUsers')
  },

  /**
   * Create State Mapping
   */
  computed: {
    ...mapState({
      users: 'users'
    })
  }
}
</script>
