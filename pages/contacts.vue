<template>
  <main class="space-y-15">
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div class="pb-10 sm:pb-42"></div>
    </section>

    <!--Get in touch-->
    <section class="section flex max-sm:flex-col gap-11">
      <div class="space-y-1.5 w-full sm:w-1/2">
        <!--Heading-->
        <div class="flex gap-2.5 items-center text-accent">
          <div class="bg-current h-0.75 w-7.5"></div>
          <p class="text-lg font-semibold">Get in touch</p>
        </div>

        <!-- -->
        <div class="space-y-8 max-w-lg">
          <p class="text-4xl font-medium text-main">
            We are <span class="text-primary">always ready</span> to help you
            and answer your questions
          </p>

          <div class="space-y-2">
            <!--Visit us-->
            <div class="flex gap-5 pb-4">
              <div class="rounded-full flex-center size-12.5 bg-[#D7EBFE]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 15.625C17.0711 15.625 18.75 13.9461 18.75 11.875C18.75 9.80393 17.0711 8.125 15 8.125C12.9289 8.125 11.25 9.80393 11.25 11.875C11.25 13.9461 12.9289 15.625 15 15.625Z"
                    stroke="#0568C4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 27.5C17.5 22.5 25 19.2728 25 12.5C25 6.97715 20.5228 2.5 15 2.5C9.47715 2.5 5 6.97715 5 12.5C5 19.2728 12.5 22.5 15 27.5Z"
                    stroke="#0568C4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div class="space-y-1">
                <p class="text-main text-2xl font-semibold leading-7.5">
                  Visit us at:
                </p>
                <p class="text-lg leading-7 text-[#6B7C8A]">
                  Kilindini, Mombasa, Kenya
                </p>
              </div>
            </div>

            <!--Call at:-->
            <div class="flex gap-5 pb-4">
              <div class="rounded-full flex-center size-12.5 bg-[#D7EBFE]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4773 11.0666C11.3473 12.8786 12.5333 14.5769 14.0353 16.0789C15.5372 17.5808 17.2355 18.7668 19.0476 19.6368C19.2034 19.7117 19.2813 19.7491 19.38 19.7778C19.7304 19.88 20.1607 19.8066 20.4575 19.5941C20.541 19.5343 20.6125 19.4628 20.7554 19.3199C21.1924 18.8829 21.4109 18.6644 21.6306 18.5216C22.4592 17.9828 23.5274 17.9828 24.3561 18.5216C24.5758 18.6644 24.7943 18.8829 25.2313 19.3199L25.4749 19.5635C26.1392 20.2278 26.4713 20.56 26.6518 20.9167C27.0106 21.6262 27.0106 22.464 26.6518 23.1734C26.4713 23.5302 26.1392 23.8623 25.4749 24.5266L25.2778 24.7237C24.6158 25.3857 24.2848 25.7167 23.8347 25.9695C23.3354 26.2501 22.5597 26.4518 21.987 26.45C21.4708 26.4485 21.118 26.3484 20.4125 26.1481C16.6207 25.0719 13.0428 23.0413 10.0578 20.0563C7.0728 17.0714 5.04221 13.4934 3.966 9.70167C3.76574 8.99611 3.66561 8.64333 3.66407 8.12715C3.66237 7.55437 3.86407 6.77876 4.1446 6.27938C4.39741 5.82934 4.72842 5.49832 5.39045 4.83629L5.58749 4.63925C6.2518 3.97495 6.58395 3.6428 6.94067 3.46237C7.65013 3.10353 8.48796 3.10353 9.19741 3.46237C9.55413 3.6428 9.88628 3.97495 10.5506 4.63925L10.7942 4.88284C11.2312 5.31985 11.4497 5.53835 11.5925 5.75807C12.1313 6.58668 12.1313 7.65491 11.5925 8.48352C11.4497 8.70325 11.2312 8.92175 10.7942 9.35876C10.6513 9.50165 10.5798 9.57309 10.52 9.65661C10.3075 9.9534 10.2341 10.3837 10.3363 10.7342C10.365 10.8328 10.4025 10.9107 10.4773 11.0666Z"
                    stroke="#0568C4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div class="space-y-1">
                <p class="text-main text-2xl font-semibold leading-7.5">
                  Call at:
                </p>
                <div class="text-lg leading-7 text-[#6B7C8A]">
                  <a
                    class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
                    href="tel:+254 784 000 000"
                    >+254 784 000 000</a
                  >
                </div>
              </div>
            </div>

            <!--Email at:-->
            <div class="flex gap-5 pb-4">
              <div class="rounded-full flex-center size-12.5 bg-[#D7EBFE]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.82 3.29195L3.78991 9.16153C3.36001 9.44097 3.14506 9.58069 3.07061 9.75787C3.00555 9.91272 3.00555 10.0872 3.07061 10.2421C3.14506 10.4193 3.36001 10.559 3.78991 10.8384L12.82 16.708C13.6091 17.2209 14.0036 17.4773 14.4287 17.5771C14.8045 17.6653 15.1955 17.6653 15.5713 17.5771C15.9964 17.4773 16.3909 17.2209 17.18 16.708L26.2101 10.8384C26.64 10.559 26.8549 10.4193 26.9294 10.2421C26.9945 10.0872 26.9945 9.91272 26.9294 9.75787C26.8549 9.58069 26.64 9.44097 26.2101 9.16153L17.18 3.29194C16.3909 2.77906 15.9964 2.52262 15.5713 2.42284C15.1955 2.33464 14.8045 2.33464 14.4287 2.42284C14.0036 2.52262 13.6091 2.77906 12.82 3.29195L3.41002 9.40846C3.07752 9.62459 2.91126 9.73265 2.79081 9.8768C2.68418 10.0044 2.60409 10.152 2.55521 10.3109C2.5 10.4905 2.5 10.6888 2.5 11.0853V20.25C2.5 22.3502 2.5 23.4003 2.90873 24.2024C3.26825 24.908 3.84193 25.4817 4.54754 25.8412C5.3497 26.25 6.3998 26.25 8.5 26.25H21.5C23.6002 26.25 24.6503 26.25 25.4525 25.8412C26.1581 25.4817 26.7317 24.908 27.0913 24.2024C27.5 23.4003 27.5 22.3502 27.5 20.25V11.0853C27.5 10.6888 27.5 10.4905 27.4448 10.3109C27.3959 10.152 27.3158 10.0044 27.2092 9.8768C27.0887 9.73265 26.9225 9.62459 26.59 9.40846L17.18 3.29194"
                    stroke="#0568C4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div class="space-y-1">
                <p class="text-main text-2xl font-semibold leading-7.5">
                  Email at:
                </p>
                <div class="text-lg leading-7 text-[#6B7C8A]">
                  <a
                    class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
                    href="mailto:info@atomix.co.ke"
                    >info@atomix.co.ke</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Input form-->
      <div
        class="w-full sm:w-1/2 bg-white rounded-2xl p-8 space-y-6 shadow-[0px_2px_7px_-14.73px_#0000000A]"
      >
        <div class="space-y-2 border-b pb-4 border-[#E6E6E6]">
          <p class="text-primary text-2xl font-bold">Get in Touch</p>
          <p class="leading-5.5 text-[#6B7C8A]">
            Define your goals and identify areas where our solutions and
            products can add value to your business.
          </p>
        </div>

        <div class="space-y-1.5">
          <div class="flex max-sm:flex-col gap-4">
            <div class="space-y-1">
              <label for="name" class="text-main text-sm leading-5">Name</label>
              <input
                type="text"
                value="John Paul"
                class="w-full border-0 text-sm p-3 leading-6 text-[#6B7C8A] outline-none focus:ring-0 border-b border-[#EBEBEB]"
              />
            </div>

            <div class="space-y-1">
              <label for="name" class="text-main text-sm leading-5"
                >Phone Number</label
              >
              <input
                type="tell"
                value="+254 70000000"
                class="w-full border-0 text-sm p-3 leading-6 text-[#6B7C8A] outline-none focus:ring-0 border-b border-[#EBEBEB]"
              />
            </div>
          </div>

          <div class="space-y-1">
            <label for="name" class="text-main text-sm leading-5"
              >Email <span class="text-[#D90011]">*</span></label
            >
            <input
              type="tell"
              value="papapaul@mail.com"
              class="w-full border-0 text-sm p-3 leading-6 text-[#6B7C8A] outline-none focus:ring-0 border-b border-[#EBEBEB]"
            />
          </div>

          <div class="space-y-1">
            <label for="interest" class="text-main text-sm leading-5"
              >Area of interest</label
            >
            <select
              id="interest"
              v-model="interest"
              class="w-full border-0 text-sm p-3 leading-6 text-[#6B7C8A] outline-none focus:ring-0 border-b border-[#EBEBEB]"
            >
              <option value="" disabled>Select an option</option>
              <option v-for="option in interests" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>

          <div class="space-y-1">
            <label for="name" class="text-main text-sm leading-5"
              >Write your message <span class="text-[#D90011]">*</span></label
            >
            <textarea
              name="message"
              id="message"
              class="w-full border-0 text-sm p-3 leading-6 text-[#6B7C8A] outline-none focus:ring-0 border-b border-[#EBEBEB]"
            ></textarea>
          </div>
        </div>

        <div class="flex justify-end w-full">
          <button class="primary-btn">Send Message</button>
        </div>
      </div>
    </section>

    <!--Map-->
    <div class="section">
      <div class="rounded-2xl border border-[#E2E6E9] overflow-hidden">
        <iframe
          :src="mapSrc"
          title="Atomix Systems location"
          class="w-full h-80 sm:h-110 block"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <section class="mt-2.5">
      <Footer />
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({ title: "Contacts" });

const mapQuery = "Kilindini, Mombasa, Kenya";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`;

const interest = ref("");

const interests = [
  "Radiation detection",
  "Cargo and vehicle inspection",
  "CBRN detection and response",
  "Optical inspection technologies",
  "Other",
];
</script>
