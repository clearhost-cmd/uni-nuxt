<template>
  <card-base>
    <h1>are you sure?</h1>
    <form v-on:submit.prevent="onSubmit">
      <!--
        Create Form Button for Submit
      -->
      <button-base
        action="confirm"
      />
    </form>
  </card-base>
</template>

<script>
export default {
  layout: 'index',

  methods: {
    /**
     * OnSubmit Delete w/Params & Router Push
     */
    onSubmit() {
      this.$axios.delete(`/users/${this.$route.params.id}`)
      this.$router.push("/users");
    }
  }
}
</script>
