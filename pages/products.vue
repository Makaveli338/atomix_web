<template>
  <main class="space-y-17.5">
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div class="pb-10 sm:pb-42"></div>
    </section>

    <!--Our products-->
    <section class="space-y-6 max-w-6xl mx-auto px-4">
      <div class="space-y-1.5">
        <div class="text-center">
          <div class="flex gap-2.5 items-center text-accent w-fit mx-auto">
            <div class="bg-current h-0.75 w-7.5"></div>
            <p class="text-lg font-semibold">Our Products</p>
          </div>

          <p class="text-[40px] font-medium">
            Technology Designed for
            <span class="text-primary">Critical Security Environments</span>
          </p>
        </div>

        <p class="text-lg font-light text-main text-center">
          From radiation detection to cargo inspection and optical surveillance,
          Atomix Systems provides specialized technologies designed to support
          modern security operations.
        </p>
      </div>

      <div
        class="bg-white rounded-2xl py-6 gap-4 flex flex-col items-center text-center"
      >
        <p class="text-lg font-medium text-main">Find Your Perfect Product</p>

        <div class="flex gap-8 max-sm:flex-col">
          <div class="flex gap-4 sm:gap-2.5 whitespace-nowrap max-sm:flex-col">
            <!--Industry-->
            <div
              class="flex gap-2.5 sm:items-center max-sm:flex-col max-sm:text-start"
            >
              <label for="industry" class="text-main leading-5"
                >I work in</label
              >
              <select
                id="industry"
                v-model="industry"
                class="w-full border-0 p-3 leading-6 text-[#6B7C8A] outline-none focus:ring-0 border-b border-[#EBEBEB]"
              >
                <option value="" disabled>Industry</option>
                <option
                  v-for="option in industries"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>

            <!--Product-->
            <div
              class="flex gap-2.5 sm:items-center max-sm:flex-col max-sm:text-start"
            >
              <label for="product" class="text-main leading-5"
                >and I am looking for</label
              >
              <select
                id="product"
                v-model="product"
                class="w-75 border-0 p-3 leading-6 text-[#6B7C8A] outline-none focus:ring-0 border-b border-[#EBEBEB]"
              >
                <option value="" disabled>Product</option>
                <option
                  v-for="option in products"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>
          </div>

          <button
            class="primary-btn disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!industry && !product"
            @click="findProduct"
          >
            Find Product
          </button>
        </div>
      </div>
    </section>

    <!--Radiation detection-->
    <section
      data-aos="fade-right"
      id="radiation-detection"
      :class="{ 'ring-2 ring-accent': highlighted === 'radiation-detection' }"
      class="scroll-mt-6 section flex sm:!px-0 rounded-2xl bg-white overflow-hidden max-sm:py-4 max-sm:mx-2"
    >
      <div class="w-250 max-sm:hidden">
        <img
          src="/radiation-detection.png"
          alt="Radiation Detection img"
          class="h-full"
        />
      </div>

      <div class="sm:p-8 space-y-4 text-[#6B7C8A]">
        <p class="text-primary text-2xl font-semibold">Radiation Detection</p>

        <div class="space-y-2.5">
          <p>
            Radioactive materials can present serious security and safety risks
            when moved through controlled environments without detection.
          </p>
          <p>
            Atomix Systems provides radiation detection technologies designed to
            identify and monitor radioactive sources across vehicles, cargo,
            pedestrian checkpoints and other operational environments.
          </p>
        </div>

        <div class="space-y-2.5">
          <div class="space-y-1.5">
            <p class="pl-2 font-semibold text-main">
              1. Vehicle Portal Monitors
            </p>
            <p>
              Designed to monitor vehicles as they pass through designated
              inspection points and identify potential radioactive sources.
            </p>
          </div>

          <div class="space-y-1.5">
            <p class="pl-2 font-semibold text-main">2. Backpack & Field Kits</p>
            <p>
              Portable detection technologies designed to support field
              operations and mobile inspection requirements.
            </p>
          </div>

          <div class="space-y-1.5">
            <p class="pl-2 font-semibold text-main">3. Handheld Monitors</p>
            <p>
              Portable devices designed to support targeted radiation detection
              and field inspection activities.
            </p>
          </div>

          <div class="space-y-1.5">
            <p class="pl-2 font-semibold text-main">4. Mobile Monitors</p>
            <p>
              Flexible radiation detection solutions designed for environments
              where mobility and adaptable deployment are required
            </p>
          </div>
        </div>

        <button class="primary-btn !py-2">
          View Radiation Detection Products
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
        </button>
      </div>
    </section>

    <!--Cargo & vehicle inspection-->
    <section
      data-aos="fade-left"
      id="cargo-vehicle-inspection"
      :class="{
        'ring-2 ring-accent': highlighted === 'cargo-vehicle-inspection',
      }"
      class="scroll-mt-6 section flex flex-row-reverse sm:!px-0 rounded-2xl bg-white overflow-hidden max-sm:py-4 max-sm:mx-2"
    >
      <div class="w-250 max-sm:hidden">
        <img
          src="/vehicle-inspection.png"
          alt="Cargo and vehicle inspection img"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="sm:p-8 space-y-4 text-[#6B7C8A]">
        <p class="text-primary text-2xl font-semibold">
          Cargo & Vehicle Inspection
        </p>

        <div class="space-y-2.5">
          <p>
            Concealed threats can be difficult to identify through conventional
            visual inspection. Advanced inspection technologies provide security
            teams with greater visibility into vehicles, cargo and containers.
          </p>
          <p>
            We provide a range of cargo and vehicle inspection solutions for
            different operational environments.
          </p>
        </div>

        <div class="space-y-2.5">
          <div
            v-for="(item, index) in cargoSystems"
            :key="item.title"
            class="space-y-1.5"
          >
            <p class="pl-2 font-semibold text-main">
              {{ index + 1 }}. {{ item.title }}
            </p>
            <p>{{ item.description }}</p>
          </div>
        </div>

        <button class="primary-btn !py-2">
          View Cargo & Vehicle Inspection Products
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
        </button>
      </div>
    </section>

    <!--CBRN detection & response-->
    <section
      data-aos="fade-right"
      id="cbrn-detection"
      :class="{ 'ring-2 ring-accent': highlighted === 'cbrn-detection' }"
      class="scroll-mt-6 section flex sm:!px-0 rounded-2xl bg-white overflow-hidden max-sm:py-4 max-sm:mx-2"
    >
      <div class="w-250 max-sm:hidden">
        <img
          src="/cbrn-detection.png"
          alt="CBRN Detection and Response img"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="sm:p-8 space-y-4 text-[#6B7C8A]">
        <p class="text-primary text-2xl font-semibold">
          CBRN Detection & Response
        </p>

        <div class="space-y-2.5">
          <p>
            Chemical, Biological, Radiological and Nuclear threats require
            advanced detection capabilities and a coordinated approach to
            security.
          </p>
          <p>
            Atomix Systems provides CBRN detection and sensing solutions
            designed to help organisations identify potential threats,
            strengthen situational awareness and support effective response
            across critical environments.
          </p>
          <p>
            Our portfolio includes solutions for chemical, biological and
            radiological/nuclear threat detection, with capabilities available
            across mobile, fixed and integrated systems.
          </p>
        </div>

        <div class="space-y-2.5">
          <div class="space-y-1.5">
            <p class="pl-2 font-semibold text-main">1. Chemical Detection</p>
            <p>
              Advanced sensing technologies designed to support the detection
              and identification of potential chemical threats, helping security
              teams improve awareness in high-risk environments.
            </p>
          </div>

          <div class="space-y-1.5">
            <p class="pl-2 font-semibold text-main">2. Biological Detection</p>
            <p>
              Detection and monitoring solutions designed to support the
              identification of potential biological threats and strengthen CBRN
              situational awareness.
            </p>
          </div>

          <div class="space-y-1.5">
            <p class="pl-2 font-semibold text-main">
              3. Radiological & Nuclear Detection
            </p>
            <p>
              Advanced radiation detection technologies designed to identify
              potential radiological and nuclear threats across ports, borders,
              critical infrastructure and other strategic locations.
            </p>
          </div>

          <div class="space-y-1.5">
            <p class="pl-2 font-semibold text-main">
              4. Integrated CBRN Systems
            </p>
            <p>
              Connected detection and sensing technologies designed to bring
              multiple capabilities together, enabling a more comprehensive
              approach to threat monitoring and situational awareness.
            </p>
          </div>
        </div>

        <button class="primary-btn !py-2 w-fit">
          View CBRN Detection & Response Products
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
        </button>
      </div>
    </section>

    <!--Optical inspection-->
    <section
      data-aos="fade-left"
      id="optical-inspection"
      :class="{ 'ring-2 ring-accent': highlighted === 'optical-inspection' }"
      class="scroll-mt-6 section flex flex-row-reverse sm:!px-0 rounded-2xl bg-white overflow-hidden max-sm:py-4 max-sm:mx-2"
    >
      <div class="w-250 max-sm:hidden">
        <img
          src="/optical-inspection.png"
          alt="Optical inspection img"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="sm:p-8 space-y-4 text-[#6B7C8A]">
        <p class="text-primary text-2xl font-semibold">Optical Inspection</p>

        <p>
          Modern security operations require more than simply seeing what is
          happening. Optical inspection technologies can help organizations
          identify vehicles, classify traffic and strengthen situational
          awareness
        </p>

        <div class="space-y-2.5">
          <div
            v-for="(item, index) in opticalSystems"
            :key="item.title"
            class="space-y-1.5"
          >
            <p class="pl-2 font-semibold text-main">
              {{ index + 1 }}. {{ item.title }}
            </p>
            <p>{{ item.description }}</p>
          </div>
        </div>

        <button class="primary-btn !py-2">
          View Optical Inspection Products
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
        </button>
      </div>
    </section>

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
useHead({ title: "Products" });

const cargoSystems = [
  {
    title: "Portal Systems",
    description:
      "Inspection systems designed for controlled vehicle and cargo screening environments.",
  },
  {
    title: "Trailer Systems",
    description:
      "Solutions designed to inspect trailers and larger transport units.",
  },
  {
    title: "Gantry Systems",
    description:
      "Large-scale inspection configurations designed for high-throughput cargo and vehicle environments.",
  },
  {
    title: "Mobile Systems",
    description:
      "Flexible inspection solutions that can be deployed where and when they are needed.",
  },
  {
    title: "Rail Inspection",
    description:
      "Inspection technologies designed for cargo and vehicles transported through rail networks.",
  },
  {
    title: "Pallet Inspection",
    description:
      "Solutions designed to support the inspection of palletized cargo.",
  },
];

const opticalSystems = [
  {
    title: "License Plate Recognition",
    description:
      "Technology designed to capture and identify vehicle registration plates for security and monitoring applications.",
  },
  {
    title: "Vehicle Classification",
    description:
      "Solutions designed to identify and classify vehicles based on relevant characteristics.",
  },
  {
    title: "Vehicle Monitoring",
    description:
      "Technologies designed to support improved visibility of vehicle movements within controlled environments.",
  },
];

const industry = ref("");
const product = ref("");
const highlighted = ref("");

const sectionIds: Record<string, string> = {
  "Radiation detection": "radiation-detection",
  "Cargo and vehicle inspection": "cargo-vehicle-inspection",
  "CBRN detection and response": "cbrn-detection",
  "Optical inspection technologies": "optical-inspection",
};

// Products relevant to each industry; the first is the default landing section
const industryProducts: Record<string, string[]> = {
  "Border security & customs": [
    "Cargo and vehicle inspection",
    "Radiation detection",
    "CBRN detection and response",
    "Optical inspection technologies",
  ],
  "Airports & aviation": [
    "CBRN detection and response",
    "Radiation detection",
    "Optical inspection technologies",
  ],
  "Seaports & logistics": [
    "Cargo and vehicle inspection",
    "Radiation detection",
    "Optical inspection technologies",
  ],
  "Government & public security": [
    "CBRN detection and response",
    "Radiation detection",
    "Optical inspection technologies",
  ],
  "Law enforcement": [
    "Radiation detection",
    "Optical inspection technologies",
    "CBRN detection and response",
  ],
  "Military & defense": [
    "Radiation detection",
    "Cargo and vehicle inspection",
    "Optical inspection technologies",
  ],
  "Nuclear & energy": ["Radiation detection", "Cargo and vehicle inspection"],
  "Critical infrastructure": [
    "Optical inspection technologies",
    "Cargo and vehicle inspection",
    "Radiation detection",
  ],
};

const products = computed(() => [
  ...(industryProducts[industry.value] ?? Object.keys(sectionIds)),
  "Other",
]);

// Drop a product selection that no longer applies to the chosen industry
watch(industry, () => {
  if (product.value && !products.value.includes(product.value)) {
    product.value = "";
  }
});

function findProduct() {
  const target = product.value || industryProducts[industry.value]?.[0];

  if (!target || target === "Other" || industry.value === "Other") {
    navigateTo("/contacts");
    return;
  }

  const id = sectionIds[target];
  if (!id) return;

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  highlighted.value = id;
  setTimeout(() => (highlighted.value = ""), 2000);
}

const industries = [
  "Border security & customs",
  "Airports & aviation",
  "Seaports & logistics",
  "Government & public security",
  "Law enforcement",
  "Military & defense",
  "Nuclear & energy",
  "Critical infrastructure",
  "Other",
];
</script>
