<template>
  <card-base>
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
      this.$axios.delete(`/tags/${this.$route.params.id}`)
      this.$router.push("/tags");
    }
  }
}
</script>
