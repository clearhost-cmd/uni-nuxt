<template>
  <div class="bg-gray-50 dark:bg-gray-900 flex items-center justify-center pb-5">
    <div class="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg w-full">
      <div class="flex mb-4">
        <div class="ml-2 mt-0.5">
          <span class="break-words block font-medium text-base leading-snug text-black dark:text-gray-100">
            {{ title }}
          </span>
          <span class="break-words block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
            <div>{{ created }}</div>
          </span>
        </div>
      </div>
      <p class="break-words text-gray-800 dark:text-gray-100 leading-snug md:leading-normal pl-1">
        {{ body }}
      </p>
      <div class="flex gap-3 items-right mt-5">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Create Required Title String w/Default
     */
    title: {
      type: String,
      required: true,
      default: 'title',
    },
    /**
     * Create Required Body String w/Default
     */
    body: {
      type: String,
      required: true,
      default: 'body',
    },
    /**
     * Create Required Created String w/Default
     */
    created: {
      type: String,
      required: true,
    }
  },
}
</script>
