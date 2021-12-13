<template>
  <button type="submit" class="font-semibold mt-5 px-3 py-1.5 text-[10px] bg-gray-800 rounded-full text-white">
    {{ action }}
  </button>
</template>

<script>
export default {
  props: ['action']
}
</script>
