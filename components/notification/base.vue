<template>
  <div class="text-xs dark:bg-gray-900 flex items-center justify-center pb-5">
    <div class="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg w-full">
      <div class="flex flex-row gap-1">
        <div class="font-semibold">Validator:</div>
        <div>{{ message }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * Create Required Tyoe String w/Default
     */
    type: {
      type: String,
      required: true,
      default: 'type',
    },
    /**
     * Create Required Message String w/Default
     */
    message: {
      type: String,
      required: true,
      default: 'message',
    }
  }
}
</script>
