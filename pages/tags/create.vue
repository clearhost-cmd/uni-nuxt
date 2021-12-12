<template>
  <tag-create>
    <form v-on:submit.prevent="createTag">
      <div class="text-xs flex flex-col gap-5 justify-between">
        <div class="w-full">
          <label for="title">Tag Title</label>
        </div>
        <div class="w-full">
          <input v-model="title" class="bg-gray-100 rounded-md px-5 w-full h-8" type="text" id="title" name="title">
        </div>
        <div class="w-full">
          <label for="post">Tag Body</label>
        </div>
        <div class="w-full">
          <textarea v-model="body" class="bg-gray-100 rounded-md w-full h-28 p-5" id="body" name="body" />
        </div>
        <div class="w-full">
          <label for="post">Select User</label>
        </div>
        <div class="w-full">
          <select v-model.number="user_id" name="user_id" id="user_id" class="px-5 bg-gray-100 rounded-md w-full h-8">
            <option v-for="user in $store.state.users" :key="user.id" v-bind:value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
      </div>

      <button class="mt-5 px-2 py-1 text-[10px] bg-blue-600 rounded-full text-white">
        Confirms
      </button>
    </form>
  </tag-create>
</template>

<script>
import {mapState} from "vuex";

export default {
  methods: {
    createTag() {
      this.$axios.post('/tags', {
        title: this.title,
        body: this.body,
        user_id: this.user_id,
      })

      this.$router.push("/tags");
    }
  },

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
