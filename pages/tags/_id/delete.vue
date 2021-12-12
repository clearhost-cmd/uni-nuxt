<template>

</template>

<script>
export default {
  created: function() {
    this.$axios.delete(`/tags/${this.$route.params.id}`)
    this.$router.push("/tags");
  }
}
</script>
