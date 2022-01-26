<template>
  <div class="ml-1 text-gray-500 dark:text-gray-400 font-light">
    <nuxt-link :to="`${uri}/${id}/${operation}`">{{ action }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Create Required URI String w/Default
     */
    uri: {
      type: String,
      required: true,
      default: 'uri'
    },
    /**
     * Create Required ID Number w/Default
     */
    id: {
      type: Number,
      required: true,
      default: 'id'
    },
    /**
     * Create Required Action String w/Default
     */
    action: {
      type: String,
      required: true,
      default: 'action'
    },
    /**
     * Create Required Operation String w/Default
     */
    operation: {
      type: String,
      required: false,
      default: 'operation'
    }
  },
}
</script>
