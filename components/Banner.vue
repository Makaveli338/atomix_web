<template>
  <div class="px-4">
    <div
      class="section bg-[url('/security.png')] bg-cover bg-center text-white py-15 sm:py-29.25 pl-12 rounded-2xl space-y-7.5"
    >
      <div class="space-y-2.5">
        <p class="font-bold text-3xl sm:text-5xl">
          Ready to <span class="text-accent">Strengthen</span> Your Security?
        </p>
        <p class="text-lg sm:text-2xl">
          Whether you are looking to enhance border security, improve cargo
          inspection or deploy advanced threat detection technologies, our team
          can help you explore the right solution.
        </p>
      </div>

      <NuxtLink to="/contacts" class="primary-btn !py-2">
        Contact Us
        <div class="text-accent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="white" />
            <path
              d="M8 16L16 8M16 13.3333V8H10.6667"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>