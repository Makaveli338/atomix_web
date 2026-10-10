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
    </section>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 max-w-6xl mx-auto px-4"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="group relative bg-white rounded-2xl px-3 pt-3 space-y-7.5 pb-7.5 text-center overflow-hidden cursor-pointer"
      >
        <div
          class="absolute inset-0 bg-[#00000021] opacity-0 h-full group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex-center"
        >
          <button
            @click="openProduct(product)"
            class="pointer-events-auto cursor-pointer bg-white flex items-center gap-1.5 px-4 py-2.5 rounded-full"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0004 5C6.8954 5 3.54553 9.50484 2.42012 11.2868C2.28394 11.5025 2.21584 11.6103 2.17772 11.7766C2.14909 11.9015 2.14909 12.0985 2.17772 12.2234C2.21584 12.3897 2.28394 12.4975 2.42012 12.7132C3.54553 14.4952 6.8954 19 12.0004 19C17.1054 19 20.4553 14.4952 21.5807 12.7132C21.7169 12.4975 21.785 12.3897 21.8231 12.2234C21.8517 12.0985 21.8517 11.9015 21.8231 11.7766C21.785 11.6103 21.7169 11.5025 21.5807 11.2868C20.4553 9.50484 17.1054 5 12.0004 5ZM15.0004 12C15.0004 13.6569 13.6573 15 12.0004 15C10.3435 15 9.0004 13.6569 9.0004 12C9.0004 10.3431 10.3435 9 12.0004 9C13.6573 9 15.0004 10.3431 15.0004 12Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#F2A93B"
              />
            </svg>
            <p class="text-sm font-semibold text-accent">
              View Product Features
            </p>
          </button>
        </div>

        <div class="flex-center bg-[#F3F8FB] rounded-[10px] h-60 p-4">
          <img
            :src="product.cardImage"
            :alt="product.name"
            class="h-full w-full object-contain"
          />
        </div>
        <p class="text-primary text-lg font-semibold">{{ product.name }}</p>
      </div>
    </div>

    <!--Strengthen your Security-->
    <div data-aos="fade-up" class="hidden">
      <Banner />
    </div>

    <section data-aos="fade-up" class="hidden">
      <Footer />
    </section>

    <!-- Product modal -->
    <TransitionRoot appear :show="productOpen" as="template">
      <Dialog as="div" @close="closeProduct" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-800/25 backdrop-blur-sm" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-7xl transform overflow-hidden rounded-lg bg-white p-8 space-y-8 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h4"
                  class="text-lg font-semibold leading-none text-slate-600"
                >
                  <div class="flex gap-4 sm:items-center justify-between max-sm:flex-col">
                    <p class="text-2xl font-semibold text-primary w-full">
                      {{ selected?.name }}
                    </p>

                    <button
                      @click="closeProduct"
                      class="w-fit flex items-center px-4 py-2.5 gap-1.5 bg-[#F3F8FB] hover:bg-[#c5e2f3] rounded-full cursor-pointer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1654 5.83337L9.9987 10M9.9987 10L5.83203 14.1667M9.9987 10L5.83203 5.83337M9.9987 10L14.1654 14.1667"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="#263746"
                        />
                      </svg>
                      <p class="text-sm font-semibold text-[#10304C]">Close</p>
                    </button>
                  </div>
                </DialogTitle>

                <div v-if="selected" class="flex gap-6 sm:gap-10 max-sm:flex-col">
                  <div
                    class="rounded-[10px] flex-center bg-[#F3F8FB] px-10 py-7.5 w-full h-80 sm:size-115 shrink-0"
                  >
                    <div class="relative flex-center w-full h-full">
                      <img
                        v-for="(src, i) in selected.slides"
                        :key="src"
                        :src="src"
                        :alt="selected.name"
                        class="absolute inset-0 m-auto max-h-full max-w-full object-contain transition-opacity duration-500"
                        :class="i === productSlide ? 'opacity-100' : 'opacity-0'"
                      />

                      <div
                        v-if="selected.slides.length > 1"
                        class="absolute top-full mt-3 flex gap-1.5"
                      >
                        <button
                          v-for="(src, i) in selected.slides"
                          :key="src"
                          @click="goToProductSlide(i)"
                          :aria-label="`Show image ${i + 1}`"
                          class="cursor-pointer rounded-full size-2.5 transition-colors"
                          :class="i === productSlide ? 'bg-primary' : 'bg-[#AACEFD]'"
                        ></button>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <p v-if="selected.intro" class="text-lg text-[#6B7C8A]">
                      {{ selected.intro }}
                    </p>

                    <p class="text-main text-xl font-semibold">Key Features</p>

                    <div class="space-y-2.5">
                      <div
                        v-for="(feature, i) in selected.features"
                        :key="feature.title"
                        class="space-y-1"
                      >
                        <p class="font-semibold text-main">
                          {{ i + 1 }}. {{ feature.title }}
                        </p>
                        <p class="text-[#6B7C8A]">{{ feature.text }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </main>
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { ref, onBeforeUnmount } from "vue";

// Products shown in the shared modal.
interface Product {
  id: string;
  name: string;
  cardImage: string;
  slides: string[];
  intro?: string;
  features: { title: string; text: string }[];
}

const products: Product[] = [
  {
    id: "guardian-501",
    name: "Guardian 501 series",
    cardImage: "/guardian.png",
    slides: [
      "/guardian2.png",
      "/guardian3.png",
      "/guardian4.png",
      "/guardian5.png",
    ],
    intro:
      "The Guardian series provides mobile and handheld radiation detection solutions to identify radioactive materials and strengthen security at borders, checkpoints and cargo inspection points.",
    features: [
      {
        title: "Multi-type radiation detection",
        text: "Detects gamma, beta and neutron radiation from natural and man-made sources, depending on model configuration.",
      },
      {
        title: "Radionuclide identification",
        text: "Identifies more than 70 radionuclides to help assess potentially hazardous radioactive materials",
      },
      {
        title: "Radiation measurement and source locating",
        text: "Measures radiation levels and helps operators pinpoint suspicious radiation sources.",
      },
      {
        title: "Portable, rugged design",
        text: "Compact and lightweight for field inspections, land border checkpoints and mobile security operations.",
      },
      {
        title: "Remote Access & Data Management",
        text: "Provides a web interface for device configuration, data access and remote support.",
      },
    ],
  },
  {
    id: "riideye-xm",
    name: "RIIDEye™ X/M Series",
    cardImage: "/riideye.png",
    slides: ["/riideye.png"],
    features: [
      {
        title: "Fast Isotope Identification",
        text: "Identifies radioactive isotopes in real time, with identification possible in 30 seconds or less under suitable conditions.",
      },
      {
        title: "Advanced Spectral Analysis",
        text: "Uses patented Quadratic Compression Conversion (QCC) technology and live spectrum analysis for rapid, accurate isotope identification.",
      },
      {
        title: "Colour-Coded Threat Classification",
        text: "Displays colour-coded spectral peaks to help operators distinguish potential threats from benign or unknown radioactive materials.",
      },
      {
        title: "Gamma and Optional Neutron Detection",
        text: "Offers multiple detector configurations, including gamma detectors and optional neutron detection, depending on the model.",
      },
      {
        title: "Rugged, Portable Design",
        text: "Designed for field operations, with ergonomic handling, continuous automatic stabilisation and up to 8 hours of nominal battery life. The X model is IP65-rated and drop-resistant.",
      },
    ],
  },
  {
    id: "radeye-g20",
    name: "Thermo Scientific™ RadEye™ G20-10 and G20-ER10",
    cardImage: "/thermo-scientific-radeye.png",
    slides: ["/thermo-scientific-radeye.png"],
    features: [
      {
        title: "Sensitive Radiation Detection",
        text: "Measures X-ray and gamma radiation levels, with a fast response even at low dose rates below 1 µSv/h.",
      },
      {
        title: "Wide Measurement Range",
        text: "The G20-10 measures up to 2 mSv/h, while the G20-ER10 extends to 100 mSv/h for higher radiation environments.",
      },
      {
        title: "Compact, Rugged Design",
        text: "Lightweight at approximately 300 g, with a thick rubber protective cover for practical field use.",
      },
      {
        title: "Long Battery Life",
        text: "Operates for more than 500 hours using two AAA batteries, supporting extended field deployments.",
      },
      {
        title: "Clear Displays and Audible Alerts",
        text: "Features a backlit LCD with multilingual text, adjustable audible indication and an earphone output for noisy environments.",
      },
    ],
  },
  {
    id: "verifinder-sn20",
    name: "Symetrica VeriFinder SN20",
    cardImage: "/symetrica-verifinder.png",
    slides: ["/symetrica-verifinder.png"],
    features: [
      {
        title: "Rapid Radionuclide Identification",
        text: "Identifies radioactive isotopes to help security personnel assess potential nuclear and radiological threats.",
      },
      {
        title: "High-Sensitivity Gamma Detection",
        text: "Uses a sodium iodide (NaI) detector to detect gamma radiation from radioactive materials.",
      },
      {
        title: "Advanced Isotope Analysis",
        text: "Employs Symetrica's Discovery Technology to support reliable isotope identification and threat assessment.",
      },
      {
        title: "Portable Handheld Design",
        text: "Enables field inspections at land borders, ports, checkpoints and other security-sensitive locations.",
      },
      {
        title: "Field-Based Radiation Assessment",
        text: "Supports on-site investigation of suspicious radioactive materials, helping operators distinguish potential threats from benign sources.",
      },
    ],
  },
  {
    id: "radeye-prd",
    name: "Thermo Scientific™ RadEye™ PRD / PRD-ER",
    cardImage: "/thermo-scientific-radeye-prd1.png",
    slides: ["/thermo-scientific-radeye-prd1.png", "/thermo-scientific-radeye-prd2.png"],
    features: [
      {
        title: "Highly Sensitive Radiation Detection",
        text: "Detects low levels of gamma radiation, helping identify hidden or unexpected radioactive sources.",
      },
      {
        title: "Natural Background Rejection (NBR)",
        text: "Distinguishes artificial radiation from fluctuations in natural background radiation, reducing unnecessary alarms.",
      },
      {
        title: "Radiation Source Localisation",
        text: "Helps security personnel locate radioactive sources and contaminated materials during inspections.",
      },
      {
        title: "Extended Measurement Range (PRD-ER)",
        text: "The PRD measures up to 250 µSv/h, while the PRD-ER extends measurement up to 100 mSv/h for higher-radiation environments.",
      },
      {
        title: "Compact Design with Audible and Visual Alarms",
        text: "A lightweight, portable device with clear displays and audible alerts, suitable for field inspections and personal radiation screening.",
      },
    ],
  },
  {
    id: "srpm",
    name: "Spectroscopic radiation portal monitors (SRPM)",
    cardImage: "/spectostropic-radiation-monitor1.png",
    slides: ["/spectostropic-radiation-monitor1.png", "/spectostropic-radiation-monitor2.png", "/spectostropic-radiation-monitor3.png"],
    features: [
      {
        title: "Automated Radiation Detection",
        text: "Screens passing vehicles, cargo and containers for radioactive materials without requiring manual inspection of every item.",
      },
      {
        title: "Spectroscopic Isotope Identification",
        text: "Analyses gamma-ray energy spectra to help identify specific radionuclides and distinguish potential threats from naturally occurring radioactive materials.",
      },
      {
        title: "Gamma and Neutron Detection",
        text: "Detects gamma radiation and, where equipped, neutron emissions associated with radioactive and special nuclear materials.",
      },
      {
        title: "Automatic Alarm and Threat Assessment",
        text: "Alerts operators when radiation levels or isotope signatures meet configured alarm criteria, supporting timely investigation.",
      },
      {
        title: "High-Throughput Vehicle Screening",
        text: "Enables continuous screening of vehicles and cargo at land borders, ports and other checkpoints while helping maintain the flow of legitimate trade.",
      },
    ],
  },
  {
    id: "brd",
    name: "Backpack Radiation Detector (BRD)",
    cardImage: "/backpack-radiation-monitor1.png",
    slides: ["/backpack-radiation-monitor1.png", "/backpack-radiation-monitor2.png", "/backpack-radiation-monitor3.png"],
    features: [
      {
        title: "Combined Gamma Spectroscopy and Neutron Detection",
        text: "Detects gamma radiation and neutrons to support the identification of radioactive materials and potential nuclear threats.",
      },
      {
        title: "On-the-Go Radionuclide Identification",
        text: "Uses spectroscopic analysis to help identify radioactive isotopes during mobile security operations.",
      },
      {
        title: "Portable, Hands-Free Operation",
        text: "Backpack-mounted design allows personnel to move freely while monitoring radiation in the field.",
      },
      {
        title: "Real-Time Radiation Monitoring and Alerts",
        text: "Provides radiation readings and alerts to help operators investigate suspicious sources promptly.",
      },
      {
        title: "Mobile Threat Detection",
        text: "Supports searches across land borders, ports, large facilities and other security-sensitive areas where fixed monitors may not provide sufficient coverage.",
      },
    ],
  },
  {
    id: "mobile-monitor",
    name: "Mobile Radiation Monitor",
    cardImage: "/mobile-radiation-monitor.png",
    slides: ["/mobile-radiation-monitor.png"],
    features: [
      {
        title: "Gamma and Neutron Detection",
        text: "Detects gamma radiation and neutrons associated with radioactive materials and potential nuclear threats.",
      },
      {
        title: "Mobile Screening Capabilities",
        text: "Enables radiation screening across multiple locations, including land borders, ports and cargo inspection areas.",
      },
      {
        title: "Vehicle and Cargo Monitoring",
        text: "Supports the detection of radioactive materials concealed in vehicles, containers and transported goods.",
      },
      {
        title: "Real-Time Radiation Alerts",
        text: "Notifies operators when radiation levels exceed configured thresholds, allowing suspicious cases to be investigated.",
      },
      {
        title: "Flexible Deployment",
        text: "Supports mobile patrols and temporary checkpoints, extending radiation screening beyond fixed monitoring installations.",
      },
    ],
  },
];

const selected = ref<Product | null>(null);
const productOpen = ref(false);
const productSlide = ref(0);
let productTimer: ReturnType<typeof setInterval> | undefined;

const stopProductAutoplay = () => {
  if (productTimer) clearInterval(productTimer);
  productTimer = undefined;
};
const startProductAutoplay = () => {
  stopProductAutoplay();
  const count = selected.value?.slides.length ?? 0;
  if (count < 2) return;
  productTimer = setInterval(() => {
    productSlide.value = (productSlide.value + 1) % count;
  }, 3500);
};
const goToProductSlide = (i: number) => {
  productSlide.value = i;
  startProductAutoplay();
};
const openProduct = (product: Product) => {
  selected.value = product;
  productSlide.value = 0;
  productOpen.value = true;
  startProductAutoplay();
};
const closeProduct = () => {
  productOpen.value = false;
  stopProductAutoplay();
};
onBeforeUnmount(stopProductAutoplay);

useHead({ title: "Products" });
</script>
