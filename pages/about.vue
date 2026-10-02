<template>
  <main class="space-y-17.5">
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div class="pb-10 sm:pb-42"></div>
    </section>

    <!--Who we are-->
    <div class="space-y-10 section mx-auto">
      <!--Heading-->
      <div class="space-y-5">
        <div class="flex gap-2.5 items-center text-accent">
          <div class="bg-current h-0.75 w-7.5"></div>
          <p class="text-lg font-semibold">About Atomix Systems</p>
        </div>

        <div
          class="flex items-start justify-between flex-col lg:flex-row gap-3"
        >
          <p class="text-[40px] font-bold text-main">
            Built in <span class="text-primary"> Kenya.</span> <br />
            Serving a <span class="text-primary"> Wider World.</span>
          </p>

          <div class="space-y-6 max-w-2xl text-lg font-light text-main">
            <div class="space-y-2.5">
              <p>
                Atomix Systems is a Kenyan security technology and inspection
                solutions company providing specialised solutions for ports,
                borders and other critical environments.
              </p>
              <p>
                For over five years, Atomix Systems has worked within the
                security technology and detection sector, providing solutions
                designed to help organisations detect threats, strengthen
                security and respond effectively.
              </p>
              <p>
                Our portfolio covers radiation detection, cargo and vehicle
                inspection, baggage and parcel inspection, and optical
                inspection technologies.
              </p>
              <p>
                We serve governments, regulators and organisations across Kenya,
                and are positioned to support security requirements in other
                markets across the region and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--Body-->
      <div class="flex gap-8 max-sm:flex-col">
        <div class="space-y-1.5 lg:w-[70%]">
          <div
            class="rounded-2xl py-10 px-6 bg-[#D6E8FA] space-y-5 sm:space-y-10 w-full"
          >
            <p class="text-primary text-2xl font-bold">Our Mission</p>

            <p class="leading-5.5 text-[#6B7C8A]">
              To strengthen national and regional capability to detect, deter
              and interdict illicit trafficking of nuclear and radioactive
              material.
            </p>
          </div>

          <div
            class="rounded-2xl py-10 px-6 bg-primary space-y-5 text-white sm:space-y-10 w-full"
          >
            <p class="text-2xl font-bold">Our Approach</p>

            <p class="leading-5.5">
              Independent, technology-agnostic advisory, paired with hands-on
              deployment support, from vendor evaluation to operator
              certification.
            </p>
          </div>
        </div>

        <img src="/mission.png" alt="security personnel on computer" class="hidden lg:block" />
      </div> 
    </div>

    <!--Where we operate-->
    <div class="space-y-7.5 section">
      <!--Heading-->
      <div class="space-y-1.5">
        <div class="flex gap-2.5 items-center text-accent">
          <div class="bg-current h-0.75 w-7.5"></div>
          <p class="text-lg font-semibold">Where we operate</p>
        </div>

        <div class="flex max-lg:flex-col gap-3 justify-between">
          <p class="text-[40px] font-bold text-main max-w-lg">
            Security Solutions for the
            <span class="text-primary">Real World</span>
          </p>

          <p class="text-lg font-light leading-7.5 text-main max-w-xl">
            From international ports and land borders to airports and critical
            infrastructure, Atomix Systems delivers technologies curated around
            the security requirements of demanding environments.
          </p>
        </div>
      </div>

      <!--Body-->
      <div class="space-y-4">
        <div class="grid grid-cols-12 gap-3">
          <div
            class="col-span-full md:col-span-6 lg:col-span-3 p-6 rounded-xl bg-[#5599DD] gap-2 flex flex-col h-full justify-end text-white"
          >
            <p class="text-lg font-semibold">
              GOVERNMENT & CRITICAL INFRASTRUCTURE
            </p>
            <p class="leading-5.5">
              Atomix Systems provides advanced security technologies to help
              government agencies and critical infrastructure operators detect
              threats, protect essential assets and maintain uninterrupted
              operations.
            </p>
          </div>

          <div class="col-span-full sm:col-span-6 space-y-3">
            <div class="rounded-xl p-6 bg-[#D7E8F9] space-y-2 pt-19">
              <p class="text-main text-lg font-semibold leading-6">
                LAND BORDERS
              </p>
              <p class="text-[#6B7C8A] leading-6">
                Our solutions are specially designed to help border agencies
                identify potential threats and strengthen visibility across
                points of entry by supporting effective inspection and the
                efficient movement of legitimate trade and travelers.
              </p>
            </div>

            <div class="rounded-xl p-6 bg-[#D7E8F9] space-y-2 pt-19">
              <p class="text-main text-lg font-semibold leading-6">AIRPORTS</p>
              <p class="text-[#6B7C8A] leading-6">
                We provide advanced inspection and detection solutions for
                aviation and airport environments to help strengthen security
                while supporting operational efficiency.
              </p>
            </div>
          </div>

          <div
            class="col-span-full lg:col-span-3 p-6 rounded-xl bg-[#5599DD] gap-2 flex flex-col h-full justify-end text-white"
          >
            <p class="text-lg font-semibold">PORTS & MARITIME</p>
            <p class="leading-5.5">
              We provide inspection and detection technologies that support
              security teams in monitoring cargo, vehicles and other movements
              within port environments.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-3">
          <div
            class="col-span-full sm:col-span-3 p-6 rounded-xl bg-[#B5D2F0] space-y-2 text-white"
          >
            <p class="text-lg font-semibold mt-4 text-main">
              DEFENCE & SECURITY
            </p>
            <p class="leading-5.5 text-[#6B7C8A]">
              We provide inspection, detection and monitoring technologies
              designed to support security operations.
            </p>
          </div>

          <div
            class="col-span-full sm:col-span-9 p-6 rounded-xl bg-[#034A8C] space-y-2 text-white"
          >
            <p class="text-lg font-semibold mt-10">CUSTOMS & TRADE</p>
            <p class="leading-5.5">
              Atomix Systems provides cargo, vehicle and radiation inspection
              technologies for customs and trade environments which help
              authorities identify concealed goods and potential security risks
              while supporting the efficient movement of legitimate goods.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--Our Approach-->
    <div class="w-full bg-[#10304C] space-y-10 py-16 text-white px-6">
      <!--Heading-->
      <div class="space-y-2 text-center">
        <p class="text-4xl font-semibold text-accent">
          Our <span class="text-accent-blue">Approach</span>
        </p>
        <p class="text-lg font-light leading-7.5 max-w-6xl mx-auto">
          We provide independent advice and hands-on support to help you choose
          the right technology, implement it successfully and train your team to
          use it with confidence.
        </p>
      </div>

      <!--Body-->
      <div class="max-w-2xl mx-auto space-y-5">
        <!--Assess-->
        <div class="flex gap-7.5 sm:items-center sm:w-[80%] max-sm:flex-col">
          <img src="/assess.svg" alt="Assessing img" class="w-fit" />
          <div class="space-y-2">
            <p class="text-accent-blue text-lg font-bold">1. Assess</p>
            <p class="leading-6">
              Threat and vulnerability assessment across sites, legal frameworks
              and existing capability.
            </p>
          </div>
        </div>

        <!--Design-->
        <div class="flex gap-7.5 ml-auto sm:sm:w-[80%]">
          <img src="/arrow-right.svg" alt="arrow" class="max-sm:hidden" />

          <div class="flex gap-7.5 sm:items-center mt-15 max-sm:flex-col">
            <img src="/design.svg" alt="Designing img" class="w-fit" />
            <div class="space-y-2">
              <p class="text-accent-blue text-lg font-bold">2. Design</p>
              <p class="leading-6">
                Tailored detection architecture, training curriculum and
                regulatory roadmap
              </p>
            </div>
          </div>
        </div>

        <!--Deploy-->
        <div class="flex gap-7.5 mr-auto sm:w-[80%]">
          <div class="flex gap-7.5 max-sm:flex-col sm:items-center mt-15">
            <img src="/deploy.svg" alt="Deploying img" class="w-fit" />
            <div class="space-y-2">
              <p class="text-accent-blue text-lg font-bold">3. Deploy</p>
              <p class="leading-6">
                Equipment procurement support, installation and certified
                operator training.
              </p>
            </div>
          </div>
          <img src="/arrow-left.svg" alt="arrow" class="max-sm:hidden" />
        </div>

        <!--Maintain-->
        <div class="flex gap-7.5 ml-auto sm:w-[80%]">
          <img src="/arrow-right.svg" alt="arrow" class="max-sm:hidden" />

          <div class="flex gap-7.5 sm:items-center max-sm:flex-col mt-15">
            <img src="/maintain.svg" alt="Maintainance img" class="w-fit" />
            <div class="space-y-2">
              <p class="text-accent-blue text-lg font-bold">4. Maintain</p>
              <p class="leading-6">
                Maintenance planning, refresher training and periodic capability
                reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Our Partners-->
    <div class="mt-7.5 section space-y-11">
      <!--Heading-->
      <div class="space-y-2 text-center">
        <p class="text-4xl font-semibold text-accent">
          Our <span class="text-accent-blue">Partners</span>
        </p>
        <p class="text-lg font-light leading-7.5 max-w-6xl mx-auto">
          Dealership and technology relationships underpinning our portfolio
        </p>
      </div>

      <div class="grid sm:grid-cols-3 gap-3">
        <!-- -->
        <div
          class="py-8 px-6 space-y-4.5 bg-white rounded-lg flex flex-col items-center"
        >
          <img src="/physical-sciences.svg" alt="Physical Sciences Logo" />
          <span
            class="block px-2.5 py-1.5 text-accent bg-[#FCEED9] w-fit rounded-full text-sm font-semibold"
            >Authorized Dealer</span
          >

          <div class="space-y-1.5 text-center">
            <p class="text-lg leading-6 text-main font-semibold">
              Physical Sciences Inc.
            </p>
            <p class="leading-6 text-[#6B7C8A]">
              Full sales, deployment, and after-sales support for PSI's
              radiation detection instrumentation across our client engagements.
            </p>
          </div>
        </div>

        <!-- -->
        <div
          class="py-8 px-6 space-y-4.5 bg-white rounded-lg flex flex-col items-center"
        >
          <img src="/symetrica.svg" alt="Symetrica  Logo" />
          <span
            class="block px-2.5 py-1.5 text-accent bg-[#FCEED9] w-fit rounded-full text-sm font-semibold"
            >Authorized Dealer</span
          >

          <div class="space-y-1.5 text-center">
            <p class="text-lg leading-6 text-main font-semibold">Symetrica</p>
            <p class="leading-6 text-[#6B7C8A]">
              Authorized to supply and support Symetrica's radionuclide
              identification and portal monitoring systems.
            </p>
          </div>
        </div>

        <!-- -->
        <div
          class="py-8 px-6 space-y-4.5 bg-white rounded-lg flex flex-col items-center"
        >
          <img src="/rapiscan.svg" alt="Rapiscan Logo" />
          <span
            class="block px-2.5 py-1.5 text-accent-blue bg-[#D7EDFE] w-fit rounded-full text-sm font-semibold"
            >Authorized Dealer</span
          >

          <div class="space-y-1.5 text-center">
            <p class="text-lg leading-6 text-main font-semibold">
              Rapiscan Systems
            </p>
            <p class="leading-6 text-[#6B7C8A]">
              Working relationship covering cargo and vehicle screening
              technology evaluation, integration, and vendor liaison.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--Strengthen your Security-->
    <div class="mt-7.5">
      <Banner />
    </div>

     <section>
      <Footer />
     </section>
  </main>
</template>

<script setup lang="ts">
useHead({ title: "About Us" });

const scroll = ref<HTMLElement | null>(null);

function scrollContainer() {
  scroll.value?.scrollBy({ left: 320, behavior: "smooth" });
}
</script>
