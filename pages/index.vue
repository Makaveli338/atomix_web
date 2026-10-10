<template>
  <main class="space-y-17.5">
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div
        data-aos="fade-right"
        class="py-15 lg:pt-42.5 lg:pb-62.25 px-4 lg:px-0"
      >
        <div class="max-w-5xl mx-auto">
          <i class="text-3xl sm:text-6xl font-semibold ml-auto">
            <span class="text-accent"> Detect</span> threats.
            <span class="text-accent"> Deter</span> Risks.
            <span class="text-accent-blue"> Respond with confidence.</span>
          </i>

          <p class="text-lg sm:text-2xl font-medium mt-6">
            Advanced security and inspection solutions for safer borders, ports
            and critical infrastructure across Kenya and beyond.
          </p>
        </div>
      </div>
    </section>

    <!--About Atomix systems-->
    <section class="space-y-2 section mx-auto">
      <!--Heading-->
      <div data-aos="fade-right" class="flex gap-2.5 items-center text-accent">
        <div class="bg-current h-0.75 w-7.5"></div>
        <p class="text-lg font-semibold">About Atomix Systems</p>
      </div>

      <div class="flex items-start justify-between flex-col lg:flex-row gap-3">
        <p data-aos="fade-right" class="text-[40px] font-bold text-main">
          Safer <span class="text-primary"> today,</span> <br />
          Secure <span class="text-primary">tomorrow</span>
        </p>

        <div
          data-aos="fade-left"
          class="space-y-6 max-w-2xl text-lg font-light text-main"
        >
          <div class="space-y-2.5">
            <p>
              Atomix Systems provides specialized security and inspection
              solutions designed to help organizations identify threats,
              strengthen security and respond effectively to emerging risks.
            </p>
            <p>
              From ports and border crossings to airports and other critical
              infrastructure, we deploy advanced technologies that support the
              detection of radioactive materials, concealed threats, contraband
              and other security risks.
            </p>
            <p>
              As a Kenyan company serving clients in Kenya and beyond, we
              combine global technology partnerships with local expertise to
              deliver solutions designed around the realities of modern security
              operations.
            </p>
          </div>

          <NuxtLink to="/about" class="primary-btn !py-2">
            More About Us
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
    </section>

    <!--Core Solutions-->
    <div class="space-y-7.5 section">
      <!--Heading-->
      <div data-aos="fade-right" class="space-y-1.5">
        <div class="flex gap-2.5 items-center text-accent">
          <div class="bg-current h-0.75 w-7.5"></div>
          <p class="text-lg font-semibold">Core Solutions</p>
        </div>

        <p class="text-[40px] font-bold text-main">
          Three Pillars, <span class="text-primary">Endless Capabilities</span>
        </p>
      </div>

      <!--Body-->
      <div class="grid sm:grid-cols-12 gap-3">
        <!--Detect-->
        <div
          data-aos="fade-right"
          class="sm:col-span-5 bg-[#D3E6F8] h-full rounded-xl gap-12 flex justify-end flex-col relative overflow-hidden"
        >
        <img src="/mask.svg" alt="" class="absolute right-0 h-full">
        <div class="max-w-81.25 p-6">
          <p class="text-3xl font-bold text-primary">Detect</p>

          <div class="space-y-2 text-main">
            <p class="text-lg font-semibold">
              Identify threats before they become incidents.
            </p>
            <p class="leading-6">
              Our detection technologies help security teams identify
              radioactive materials, concealed threats and other security risks
              moving through ports, borders and critical facilities.
            </p>
          </div>
        </div>
        </div>

        <div data-aos="fade-left" class="sm:col-span-7 space-y-3">
          <!--Deter-->
          <div
            class="bg-[#D6E8FA] p-6 rounded-xl gap-12 flex justify-end flex-col h-fit"
          >
            <p class="text-3xl font-bold text-primary">Deter</p>

            <div class="space-y-2 text-main">
              <p class="text-lg font-semibold">
                Strengthen security before threats escalate.
              </p>
              <p class="leading-6">
                Strategically deployed inspection and monitoring technologies
                help create stronger security environments and discourage the
                movement of prohibited or dangerous materials
              </p>
            </div>
          </div>

          <!--Respond-->
          <div
            class="bg-[#B6D7F6] p-6 rounded-xl gap-12 flex justify-end flex-col h-fit"
          >
            <p class="text-3xl font-bold text-primary">Respond</p>

            <div class="space-y-2 text-main">
              <p class="text-lg font-semibold">
                Turn detection into informed action.
              </p>
              <p class="leading-6">
                When a potential threat is identified, the right information and
                technology can make all the difference. Our solutions support
                security teams in assessing threats and taking appropriate
                action
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Product Portfolio-->
    <div class="space-y-7.5 section">
      <!--Heading-->
      <div data-aos="fade-up" class="space-y-1.5">
        <div class="space-y-2 text-center">
          <p class="text-[40px] font-bold text-accent">
            Product <span class="text-primary">Portfolio</span>
          </p>

          <p class="text-lg text-main leading-7.5 max-w-2xl mx-auto">
            We provide a portfolio of specialised inspection and detection
            technologies designed for demanding security environments
          </p>
        </div>
      </div>

      <!--Body-->
      <div class="flex sm:gap-6 max-sm:flex-col">
        <div data-aos="fade-right" class="flex flex-col justify-between">
          <div class="p-10 sm:text-right space-y-2">
            <p class="text-lg font-bold text-primary">Radiation Detection</p>
            <p class="leading-6 text-[#6B7C8A] max-w-xs">
              Identify and assess radioactive sources across vehicles, cargo,
              pedestrian checkpoints and other controlled environments.
            </p>
          </div>
          <div class="p-10 sm:text-right space-y-2">
            <p class="text-lg font-bold text-primary">
              Cargo & Vehicle Inspection
            </p>
            <p class="leading-6 text-[#6B7C8A] max-w-xs">
              Advanced inspection technologies designed to help identify
              concealed threats and anomalies in vehicles, cargo and
              containers. 
            </p>
          </div>
        </div>
        <div data-aos="fade-up" class="hidden sm:block md:self-stretch">
          <img
            src="/portfolio.png"
            alt="Seedling being held"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div data-aos="fade-left" class="flex flex-col justify-between">
          <div class="p-10 text-left space-y-2 sm:pt-26.5">
            <p class="text-lg font-bold text-primary">
              CBRN Detection & Response
            </p>
            <p class="leading-6 text-[#5C5C5C] max-w-xs">
              Identify potential chemical, biological, radiological and nuclear
              threats, strengthen situational awareness and support informed
              response.  
            </p>
          </div>
          <div class="p-10 text-left space-y-2">
            <p class="text-lg font-bold text-primary">Optical Inspection</p>
            <p class="leading-6 text-[#5C5C5C] max-w-xs">
              Technology that uses imaging and vehicle intelligence to
              strengthen identification, classification and monitoring
              capabilities. 
            </p>
          </div>
        </div>
      </div>

      <NuxtLink
        data-aos="fade-up"
        to="/about"
        class="primary-btn !py-2 mx-auto mt-2.5!"
      >
        More About Us
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

    <!--Securing critical points-->
    <div class="space-y-10 section">
      <!--Heading-->
      <div class="space-y-1.5">
        <div
          data-aos="fade-right"
          class="flex gap-2.5 items-center text-accent"
        >
          <div class="bg-current h-0.75 w-7.5"></div>
          <p class="text-lg font-semibold">Where Atomix Systems operates</p>
        </div>

        <div class="flex max-lg:flex-col gap-3 justify-between">
          <p data-aos="fade-right" class="text-[40px] font-bold text-main">
            Securing <span class="text-primary">critical points</span>
          </p>

          <div data-aos="fade-left">
            <p class="text-lg font-light leading-7.5 text-main max-w-xl">
              Security challenges differ across environments. Our solutions are
              deployed in locations where effective inspection, detection and
              situational awareness are essential.
            </p>
          </div>
        </div>
      </div>

      <!--Body-->
      <div class="xl:-mr-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] max-w-360 relative rounded-2xl overflow-hidden mr-4">
        <div
          ref="scroll"
          data-aos="fade-up"
          class="flex gap-4 overflow-x-auto scrollbar-hide text-white"
        >
          <!--Ports & Maritime-->
          <div
            class="bg-[url('/1.png')] bg-cover bg-center h-87.5 px-4 pt-48 pb-6 flex flex-col justify-start gap-2.5 rounded-2xl sm:w-80 w-60 shrink-0"
          >
            <p class="text-lg font-bold">Ports & Maritime</p>
            <p class="leading-5.5">
              Supporting the secure movement of cargo, vehicles and people
              through ports and maritime facilities.
            </p>
          </div>

          <!--Government & Critical Infrastructure-->
          <div
            class="bg-[url('/2.png')] bg-cover bg-center h-87.5 px-4 pt-48 pb-6 flex flex-col justify-start gap-2.5 rounded-2xl sm:w-80 w-60 shrink-0"
          >
            <p class="text-lg font-bold">
              Government & Critical Infrastructure
            </p>
            <p class="leading-5.5">
              Providing specialized technologies for environments where security
              and operational continuity are essential.
            </p>
          </div>

          <!--Customs & Trade-->
          <div
            class="bg-[url('/3.png')] bg-cover bg-center h-87.5 px-4 pt-48 pb-6 flex flex-col justify-start gap-2.5 rounded-2xl sm:w-80 w-60 shrink-0"
          >
            <p class="text-lg font-bold">Customs & Trade</p>
            <p class="leading-5.5">
              Trees, landscaping and environmental initiatives for greener
              environments.
            </p>
          </div>

          <!--Airports-->
          <div
            class="bg-[url('/4.png')] bg-cover bg-center h-87.5 px-4 pt-48 pb-6 flex flex-col justify-start gap-2.5 rounded-2xl sm:w-80 w-60 shrink-0"
          >
            <p class="text-lg font-bold">Airports</p>
            <p class="leading-5.5">
              Supporting aviation security through advanced inspection and
              screening technologies.
            </p>
          </div>

          <!--Customs & Trade-->
          <div
            class="bg-[url('/5.png')] bg-cover bg-center h-87.5 px-4 pt-48 pb-6 flex flex-col justify-start gap-2.5 rounded-2xl sm:w-80 w-60 shrink-0"
          >
            <p class="text-lg font-bold">Customs & Trade</p>
            <p class="leading-5.5">
              Helping border agencies strengthen inspection and threat detection
              while supporting the movement of legitimate trade and travelers.
            </p>
          </div>

          <!--Defence & Security -->
          <div
            class="bg-[url('/6.png')] bg-cover bg-center h-87.5 px-4 pt-48 pb-6 flex flex-col justify-start gap-2.5 rounded-2xl sm:w-80 w-60 shrink-0"
          >
            <p class="text-lg font-bold">Defence & Security </p>
            <p class="leading-5.5">
              Supporting organisations with specialised detection, inspection
              and monitoring capabilities.
            </p>
          </div>
        </div>

         <!--Scroll hint-->
        <div
          class="rounded-r-2xl overflow-hidden pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black/40 to-transparent"
        ></div>
        <button
          type="button"
          aria-label="Scroll right"
          @click="scrollContainer"
          class="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 size-9 rounded-full bg-primary text-white items-center justify-center animate-bounce-x cursor-pointer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <!--Why choose Atomix Systems-->
    <section class="bg-[url('/map.png')] bg-cover bg-center text-white py-23.5">
      <div data-aos="fade-up" class="space-y-10 section">
        <!--Heading-->
        <div class="gap-2 text-center flex flex-col items-center">
          <div class="flex gap-2.5 items-center text-accent">
            <div class="bg-current h-0.75 w-7.5"></div>
            <p class="text-lg font-semibold">Why choose Atomix Systems</p>
            <div class="bg-current h-0.75 w-7.5"></div>
          </div>

          <p class="text-[40px] font-semibold">
            <span class="text-accent-blue">Precision</span> technology.
            <span class="text-accent-blue">Practical</span> security
          </p>
        </div>

        <!--Body-->
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="rounded-xl p-6 space-y-2 bg-[#FFFFFF17] text-center">
              <p class="text-lg font-semibold leading-6">
                Local Expertise. Global Technology.
              </p>
              <p class="leading-6">
                Atomix Systems combines local expertise, specialized technology
                and global partnerships to address evolving security challenges.
              </p>
            </div>

            <div class="rounded-xl p-6 space-y-2 bg-[#FFFFFF17] text-center">
              <p class="text-lg font-semibold leading-6">End-to-End Security</p>
              <p class="leading-6">
                We go beyond detection by integrating detection, deterrence and
                response for a more complete security solution.
              </p>
            </div>

            <div class="rounded-xl p-6 space-y-2 bg-[#FFFFFF17] text-center">
              <p class="text-lg font-semibold leading-6">
                Strategic Technology Partnerships
              </p>
              <p class="leading-6">
                We work with established technology providers to bring
                specialised inspection and detection capabilities to Kenya and
                other markets.
              </p>
            </div>

            <div class="rounded-xl p-6 space-y-2 bg-[#FFFFFF17] text-center">
              <p class="text-lg font-semibold leading-6">
                Solutions for Critical Environments
              </p>
              <p class="leading-6">
                Our technologies are designed for environments where security,
                accuracy and operational continuity matter.
              </p>
            </div>

            <div class="rounded-xl p-6 space-y-2 bg-[#FFFFFF17] text-center">
              <p class="text-lg font-semibold leading-6">Local Understanding</p>
              <p class="leading-6">
                Our local expertise gives us a deep understanding of the markets
                and environments we serve.
              </p>
            </div>

            <div class="rounded-xl p-6 space-y-2 bg-[#FFFFFF17] text-center">
              <p class="text-lg font-semibold leading-6">
                Technology That Supports Action
              </p>
              <p class="leading-6">
                We go beyond threat detection, providing actionable insights for
                faster, informed security decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Trusted by...-->
    <div data-aos="fade-up" class="space-y-11 section">
      <!--Heading-->
      <div class="space-y-2 text-center">
        <p class="text-3xl font-semibold text-primary">
          <span class="text-accent">Trusted By</span> Organizations Responsible
          for Security and Safety
        </p>
        <p class="text-lg font-light leading-7.5 text-main max-w-5xl mx-auto">
          Our solutions have been deployed for organisations operating across
          security, transport, maritime, aviation, mining and government.
        </p>
      </div>

      <div
        class="flex justify-between items-center overflow-x-auto gap-10 scrollbar-hide"
      >
        <img src="/kpa.svg" alt="Kenya Ports Authority" />
        <img src="/kma.svg" alt="Kenya Maritime Authority" />
        <img src="/knra.svg" alt="Kenya Nuclear Regulatory Authority" />
        <img src="/kaa.svg" alt="Kenya Airports Authority" />
        <img
          src="/gok.svg"
          alt="Government of Kenya, Ministry of Mining, Blue Economy & Maritime Affairs"
        />
      </div>
    </div>

    <!--Strengthen your Security-->
    <div data-aos="fade-up">
      <Banner />
    </div>

    <section data-aos="fade-up">
      <Footer />
    </section>
  </main>
</template>

<script setup lang="ts">
const scroll = ref<HTMLElement | null>(null);

function scrollContainer() {
  scroll.value?.scrollBy({ left: 320, behavior: "smooth" });
}
</script>
