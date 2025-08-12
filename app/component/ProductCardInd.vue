<template>
  <section id="product" class="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
    <h2 class="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">
      Produk dan Layanan Kami
    </h2>
    <p class="text-xl md:text-2xl font-semibold text-center mb-3 text-gray-600">
      Dengan pipa presisi tinggi dan komponen logam unggulan, Pratika memadukan teknik produksi mutakhir — mulai dari pemotongan otomatis dan manual, pembentukan, pembengkokan, pemesinan, hingga perakitan khusus.
Komponen kami dipercaya oleh industri HVAC, otomotif, dan elektronik berkat keandalan dan performanya yang teruji.
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
          desc: "Proses produksi pipa kami mencakup pemotongan presisi (otomatis maupun manual), pembengkokan pipa (manual, otomatis, dan CNC), serta pembentukan ujung pipa (otomatis dan semi-otomatis). Kemampuan ini memastikan kami menghadirkan solusi pipa berkualitas tinggi yang disesuaikan untuk memenuhi beragam kebutuhan klien.",
          image: piping_tubing_ac,
          id: 4,
        },
        {
          name: "Metal Stamping",
          desc: "Layanan metal stamping kami mencakup operasi press presisi dengan kapasitas mulai dari 10 hingga 35 ton, khusus untuk memproduksi bracket, komponen pelat logam, pegas datar, klip, dan cincin pengunci. Kemampuan ini memastikan terciptanya komponen berkualitas tinggi dan tahan lama untuk berbagai kebutuhan aplikasi.",
          image: MetalStamping,
          id: 3,
        },
        {
          name: "Metal Machining",
          desc: "Kemampuan machining kami mencakup pengeboran presisi, milling, dan turning, dilengkapi dengan proses grinding, tapping, serta operasi turret. Kami juga menyediakan layanan CNC lathe dan automatic lathe, memastikan hasil machining dengan akurasi tinggi untuk berbagai kebutuhan aplikasi dan permintaan khusus.",
          image: Machining,
          id: 2,
        },
        {
          name: "Assembly",
          desc: "Lini perakitan khusus kami mencakup layanan perakitan sesuai kebutuhan seperti perakitan pelat motor putar, penyambungan holder coupling, dan pengkabelan kapasitor. Kemampuan ini memungkinkan kami menghadirkan komponen berkualitas tinggi yang sepenuhnya terakit, dirancang khusus untuk memenuhi kebutuhan spesifik setiap klien.",
          image: Assembly,
          id: 1,
        },
      ],
    };
  },
};
</script>
