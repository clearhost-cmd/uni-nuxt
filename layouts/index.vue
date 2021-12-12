<template>
  <div class="bg-gray-50 h-screen">
    <div class="bg-white shadow-sm">
      <div class="container mx-auto px-20 py-5">
        <div class="w-full flex">
          <div class="flex gap-5">
            <div class="bg-gray-800 rounded-full text-white pb-1">
              <a class="px-5 font-semibold text-xs" href="/posts">Back</a>
            </div>

            <partials-navigation-links />
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-20 py-5">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
.container{
  font-size: 15px;
  width: 500px;
}
</style>
