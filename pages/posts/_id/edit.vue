<template>
  <card-base>
    <form v-on:submit.prevent="onSubmit">
      <!--
        Create Form Input for Title
      -->
      <form-input
        v-model="title"
        type="text"
        id="title"
        name="title"
        label="Update Post Title"
      />
      <!--
        Create Form Textarea for Body
      -->
      <form-textarea
        v-model="body"
        id="body"
        label="Update Post Body"
      />
      <!--
        Create Form Button for Submit
      -->
      <button-base
        action="Confirm"
      />
    </form>
  </card-base>
</template>

<script>
export default {
  data() {
    /**
     * Return Data Back to Render
     */
    return {
      title: null,
      body: null,
    };
  },

  methods: {
    /**
     * OnSubmit Patch w/Params & Router Push
     */
    onSubmit() {
      this.$axios.patch(`/posts/${this.$route.params.id}`, {
        title: this.title,
        body: this.body,
      })

      // this.$router.push("/posts");
    }
  },
}
</script>
