<template>
  <section id="product" class="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
    <h2 class="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">
      What We Provide and Serve
    </h2>
    <p class="text-xl md:text-2xl font-semibold text-center mb-3 text-gray-600">
      With high-precision tubing and metal components, Pratika combines
      cutting-edge production techniques—from automated and manual cutting to
      forming, bending, machining, and custom assembly. Our parts are trusted by
      the HVAC, automotive, and electronics industries for their reliability and
      performance
    </p>
    <div class="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="product in products"
        :key="product.name"
        class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
      >
        <fade-in-card>
          <div>
            <a :href="`/product/${product.id}`">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-56 object-cover"
              />
              <div class="flex-1 flex flex-col p-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">
                  {{ product.name }}
                </h3>
                <p class="text-gray-500 text-sm mb-4 flex-1">
                  {{ product.desc }}
                </p>
              </div>
            </a>
          </div>
        </fade-in-card>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import FadeInCard from "./FadeInCard.vue";
import Assembly from "../assets/images/assembly.png";
import Machining from "../assets/images/machining_metal.png";
import piping_tubing_ac from "../assets/images/piping_tubing_AC.png";
import MetalStamping from "../assets/images/metal_stamping.png";
export default {
  name: "ProductCardSection",
  components: {
    FadeInCard,
  },
  data() {
    return {
      products: [
        {
          name: "Tubing and Piping",
          desc: "Our tubing production process includes precise pipe cutting (both automated and manual), pipe bending (manual, automated, and CNC), and pipe end forming (automated and semi-automated). These capabilities ensure that we deliver high-quality, customized tubing solutions to meet the diverse needs of our clients.",
          image: piping_tubing_ac,
          id: 4,
        },
        {
          name: "Metal Stamping",
          desc: "Our metal stamping services include precision press operations ranging from 10 to 35 tons, specializing in the production of brackets, sheet metal components, flat springs, clips, and retaining rings. These capabilities ensure the creation of high-quality, durable parts for a wide range of applications.",
          image: MetalStamping,
          id: 3,
        },
        {
          name: "Metal Machining",
          desc: "Our machining capabilities include precision drilling, milling, and turning, along with grinding, tapping, and turret operations. We also offer CNC lathe and automatic lathe services, ensuring high-accuracy machining for a wide range of applications and custom requirements.",
          image: Machining,
          id: 2,
        },
        {
          name: "Assembly",
          desc: "Our specialized assembly line includes custom assembly services such as spin motor plate assembly, holder coupling, and capacitor wiring. These capabilities allow us to deliver high-quality, fully assembled components tailored to meet the specific needs of our clients.",
          image: Assembly,
          id: 1,
        },
      ],
    };
  },
};
</script>
