<template>

</template>

<script>
export default {
  created: function() {
    this.$axios.delete(`/replies/${this.$route.params.id}`)
    this.$router.push("/replies");
  }
}
</script>
