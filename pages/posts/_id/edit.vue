<template>
  <div>
    <div v-for="event in events" :key="event.message">
      <notification-base :message="event.message" />
    </div>
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
          label="update post title"
        />
        <!--
          Create Form Textarea for Body
        -->
        <form-textarea
          v-model="body"
          id="body"
          label="update post body"
        />
        <!--
          Create Form Button for Submit
        -->
        <button-base
          action="Confirm"
        />
      </form>
    </card-base>
  </div>
</template>

<script>
export default {
  layout: 'index',
      
  data() {
    /**
     * Return Data Back to Render
     */
    return {
      title: null,
      body: null,
      events: []
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
      .then(() => {
        this.$router.push("/posts");
      })
      .catch(error => {
        this.events = error.response.data.error.details;
      })
    }
  },
}
</script>
