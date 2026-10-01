<template>
  <section class="bg-[#FFFFFF1A] py-4 px-2 sm:px-8">
    <div class="section flex items-center justify-between w-full">
      <!--Logo-->
      <img src="/logo.svg" alt="Logo" />

      <!--Nav links-->
      <div class="hidden lg:flex gap-6 items-center text-lg">
        <button type="button"
          class="nav-link font-semibold">Home</button>
        <button type="button"
          class="nav-link font-medium">Products</button>
        <button type="button"
          class="nav-link font-medium">About Us</button>
        <button type="button"
          class="nav-link font-medium">Contacts</button>
      </div>

      <!--Contact us btn-->
      <button type="button" class="primary-btn max-lg:hidden">Talk to Us</button>
      <button
        @click="isOpen = !isOpen"
        class="block lg:hidden rounded-md p-2 text-white"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-30 bg-slate-950/30 md:hidden"
      @click.self="isOpen = false"
    >
      <div
        class="ml-auto flex h-full w-72 flex-col gap-4 border-l border-white/20 bg-black/60 p-6 text-white shadow-2xl backdrop-blur-lg"
      >
        <div class="flex items-center justify-between">
          <!--Logo-->
          <img src="/logo.svg" alt="Logo" />
          <button
            @click="isOpen = false"
            class="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav class="flex flex-col gap-1 pt-3 text-lg">
          <button type="button"
            class="nav-link w-fit py-2 font-semibold" @click="isOpen = false">Home</button>
          <button type="button"
            class="nav-link w-fit py-2 font-medium" @click="isOpen = false">About Us</button>
          <button type="button"
            class="nav-link w-fit py-2 font-medium" @click="isOpen = false">Products</button>
          <button type="button"
            class="nav-link w-fit py-2 font-medium" @click="isOpen = false">Gallery</button>
        </nav>

        <div class="mt-auto">
          <button type="button"
            class="primary-btn w-full justify-center" @click="isOpen = false">Contact Us</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const isOpen = ref(false);
watch(isOpen, (value) => {
  document.body.style.overflow = value ? "hidden" : "";
});
</script>
