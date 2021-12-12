<template>
  <reply-edit>
    <form v-on:submit.prevent="updateReply">
      <div class="text-xs flex flex-col gap-5 justify-between">
        <div class="w-full">
          <label for="title">Reply Title</label>
        </div>
        <div class="w-full">
          <input v-model="title" class="bg-gray-100 rounded-md px-5 w-full h-8" type="text" id="title" name="title">
        </div>
        <div class="w-full">
          <label for="post">Reply Body</label>
        </div>
        <div class="w-full">
          <textarea v-model="body" class="bg-gray-100 rounded-md w-full h-28 p-5" id="body" name="body" />
        </div>
      </div>

      <button class="mt-5 px-2 py-1 text-[10px] bg-blue-600 rounded-full text-white">
        Confirm
      </button>
    </form>
  </reply-edit>
</template>

<script>
export default {
  methods: {
    updateReply() {
      this.$axios.patch(`/replies/${this.$route.params.id}`, {
        title: this.title,
        body: this.body,
      })

      this.$router.push("/replies");
    }
  },
}
</script>
