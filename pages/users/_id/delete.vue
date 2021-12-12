<template>

</template>

<script>
export default {
  created: function() {
    this.$axios.delete(`/users/${this.$route.params.id}`)
    this.$router.push("/users");
  }
}
</script>
