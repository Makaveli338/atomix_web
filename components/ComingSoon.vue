<template>
  <main class="min-h-screen flex flex-col">
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />
    </section>

    <section
      class="section flex-1 flex flex-col items-center justify-center text-center gap-4 py-24 px-4"
    >
      <div class="flex gap-2.5 items-center text-accent">
        <div class="bg-current h-0.75 w-7.5"></div>
        <p class="text-lg font-semibold">{{ title }}</p>
        <div class="bg-current h-0.75 w-7.5"></div>
      </div>

      <p class="text-4xl sm:text-6xl font-bold text-main">
        Coming <span class="text-primary">Soon</span>
      </p>
      <p class="text-lg sm:text-xl font-light text-main max-w-xl">
        We're working on this page. Please check back shortly.
      </p>

      <NuxtLink to="/" class="primary-btn mt-2">Back to Home</NuxtLink>
    </section>

  </main>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
