<template>
  <div class="bg-gray-50 h-screen">
    <div class="bg-white shadow-sm">
      <div class="container mx-auto px-20 py-5">
        <div class="w-full flex">
          <div class="flex gap-5">
            <div class="bg-gray-800 rounded-full text-white pb-1">
              <a class="px-5 font-semibold text-xs" :href="`/${ $nuxt.$route.name}/create`">new</a>
            </div>

            <navigation-links />
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-20 py-5">
		<div class="pb-5 text-2xl">
			{{ $nuxt.$route.name }}
		</div>
      <Nuxt />
    </div>
  </div>
</template>

