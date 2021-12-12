<template>
  <button type="submit" class="mt-5 px-3 py-1.5 text-[10px] bg-blue-600 rounded-full text-white">
    {{ action }}
  </button>
</template>

<script>
export default {
  props: ['action']
}
</script>
