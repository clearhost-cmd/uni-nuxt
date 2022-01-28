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
          label="post title"
        />
        <!--
          Create Form Textarea for Body
        -->
        <form-textarea
          v-model="body"
          id="body"
          label="post body"
        />
        <!--
          Create Form Select for User_Id
        -->
        <form-select
          v-model.number="user_id"
          id="user"
          label="user"
          v-bind:options="$store.state.users"
          index="name"
        />
        <!--
          Create Form Select for Tag_Id
        -->
        <form-select
          v-model.number="tag_id"
          id="tag"
          label="tag"
          v-bind:options="$store.state.tags"
          index="title"
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
      title: null,
      body: null,
      user_id: null,
      tag_id: null,
      events: []
    };
  },

  methods: {
    /**
     * OnSubmit Post w/Params & Router Push
     */
    onSubmit() {
      this.$axios.post('/posts', {
        title: this.title,
        body: this.body,
        user_id: this.user_id,
        tag_id: this.tag_id,
      })
      .then(() => {
        this.$router.push("/posts");
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
    await store.dispatch('loadTags')
  },

  /**
   * Create State Mapping
   */
  computed: {
    ...mapState({
      users: 'users',
      tags: 'tags'
    })
  }
}
</script>
