<template>
  <card-base>
    <h1>Are you sure?</h1>
    <p class="text-xs">This action is not reversable.</p>
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
