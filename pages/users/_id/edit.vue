<template>
  <user-edit>
    <form v-on:submit.prevent="updateUser">
      <div class="text-xs flex flex-col gap-5 justify-between">
        <div class="w-full">
          <label for="title">User</label>
        </div>
        <div class="w-full">
          <input v-model="name" class="bg-gray-100 rounded-md px-5 w-full h-8" type="text" id="name" name="name">
        </div>
        <div>
          <label for="title">Password</label>
        </div>
        <div class="w-full">
          <input v-model="password" class="bg-gray-100 rounded-md px-5 w-full h-8" type="password" id="password" name="password">
        </div>
      </div>

      <button class="mt-5 px-2 py-1 text-[10px] bg-blue-600 rounded-full text-white">
        Confirm
      </button>
    </form>
  </user-edit>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      password: null,
    };
  },

  methods: {
    updateUser() {
      this.$axios.patch(`/users/${this.$route.params.id}`, {
        name: this.name,
        password: this.password,
      })

      this.$router.push("/users");
    }
  },
}
</script>
