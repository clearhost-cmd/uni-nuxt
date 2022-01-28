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
          v-model="name"
          type="text"
          id="name"
          name="name"
          label="update username"
        />
        <!--
          Create Form Textarea for Body
        -->
        <form-input
          v-model="password"
          type="password"
          id="password"
          name="password"
          label="update password"
        />
        <!--
          Create Form Button for Submit
        -->
        <button-base
          action="confirm"
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
      name: null,
      password: null,
      events: []
    };
  },

  methods: {
    /**
     * OnSubmit Patch w/Params & Router Push
     */
    onSubmit() {
      this.$axios.patch(`/users/${this.$route.params.id}`, {
        name: this.name,
        password: this.password,
      })
      .then(() => {
        this.$router.push("/users");
      })
      .catch(error => {
        this.events = error.response.data.error.details;
      })
    }
  },
}
</script>
