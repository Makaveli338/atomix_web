<template>
  <section
    class="bg-[#10304C] section sm:px-22.5 py-10 sm:pt-17.5 sm:pb-23.5 relative lg:mb-7.5 rounded-2xl max-lg:rounded-b-none"
  >
    <div
      class="sm:pb-6 border-b border-white w-full flex justify-between max-lg:flex-col gap-4"
    >
      <div class="space-y-4">
        <img src="/logo.svg" alt="Logo" class="w-89.75 h-25" />

        <i class="text-[40px] font-bold text-white">
          <span class="text-accent"> Safer</span> today <br />
          <span class="text-primary"> Secure</span> tomorrow
        </i>
      </div>

      <div class="space-y-15 text-white ">
        <!--Contacts-->
        <div class="space-y-1.5">
          <p class="text-lg font-semibold">Contacts</p>

          <div class="flex gap-4">
            <p class="text-lg font-medium">Email:</p>
            <button type="button"
              class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
              >info@atomix.co.ke</button>
          </div>
          <div class="flex gap-4">
            <p class="text-lg font-medium">Phone:</p>
            <button type="button"
              class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
              >+254 784 000 000</button>
          </div>
        </div>

        <!--Quick Links-->
        <div class="max-sm:hidden space-y-2.5">
          <p class="text-xl font-semibold">Quick Links</p>

          <div class="flex gap-4 text-xl font-light">
            <button type="button" class="nav-link">Home</button>
            <button type="button"
              class="nav-link">About Us</button>
            <button type="button"
              class="nav-link">Products</button>
            <button type="button"
              class="nav-link">Contact Us</button>
          </div>
        </div>
      </div>
    </div>

    <p class="text-white mt-3 sm:hidden">
      © {{ new Date().getFullYear() }} Atomix Systems. All rights reserved.
    </p>

    <!--Copyright notch-->
    <div
      class="max-sm:hidden absolute bottom-0 inset-x-12 max-sm:inset-x-4 bg-white rounded-t-2xl py-3 text-center text-main before:content-[''] before:absolute before:bottom-0 before:-left-4 before:size-4 before:bg-[radial-gradient(circle_at_0_0,transparent_calc(1rem_-_1px),white_1rem)] after:content-[''] after:absolute after:bottom-0 after:-right-4 after:size-4 after:bg-[radial-gradient(circle_at_100%_0,transparent_calc(1rem_-_1px),white_1rem)]"
    >
      © {{ new Date().getFullYear() }} Atomix Systems. All rights reserved.
    </div>
  </section>
</template>
