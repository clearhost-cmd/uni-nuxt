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
          label="username"
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
import {mapState} from "vuex";

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
     * OnSubmit Post w/Params & Router Push
     */
    onSubmit() {
      this.$axios.post('/users', {
        name: this.name,
        password: this.password
      })
      .then(() => {
        this.$router.push("/users");
      })
      .catch(error => {
        this.events = error.response.data.error.details;
      })
    }
  },

  /**
   * Run Async State Dispatches
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
