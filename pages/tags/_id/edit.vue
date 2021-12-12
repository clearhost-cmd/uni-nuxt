<template>
  <tag-edit>
    <form v-on:submit.prevent="updateTag">
      <div class="text-xs flex flex-col gap-5 justify-between">
        <div class="w-full">
          <label for="title">Edit Title</label>
        </div>
        <div class="w-full">
          <input v-model="title" class="bg-gray-100 rounded-md px-5 w-full h-8" type="text" id="title" name="title">
        </div>
        <div class="w-full">
          <label for="post">Edit Body</label>
        </div>
        <div class="w-full">
          <textarea v-model="body" class="bg-gray-100 rounded-md w-full h-28 p-5" id="body" name="body" />
        </div>
      </div>

      <button class="mt-5 px-2 py-1 text-[10px] bg-blue-600 rounded-full text-white">
        Confirm
      </button>
    </form>
  </tag-edit>
</template>

<script>
export default {
  methods: {
    updateTag() {

      this.$axios.patch(`/tags/${this.$route.params.id}`, {
        title: this.title,
        body: this.body,
      }).then((response) => {
        if (response.data.length === 0) { // Lets check if response contains any items

          return
        } else {
          this.$router.push("/tags");
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
}
</script>
