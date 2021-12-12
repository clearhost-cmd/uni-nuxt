<template>
  <user-create>
    <partials-form-base>
      <template v-slot:inputs>
        <partials-form-input model="name" />
        <partials-form-input  model="password" />
      </template>

      <template v-slot:button>
        <partials-button-base action="Create User"/>
      </template>
    </partials-form-base>
  </user-create>
</template>

<script>
export default {
  data() {
    return {
      events: []
    }
  },

  methods: {
    createUser() {
      this.$axios.post('/users', {
        name: this.name,
        password: this.password,
      }).catch(error => {
        this.events.push(error.response.data.error.details)
      })
    }
  },
}
</script>
