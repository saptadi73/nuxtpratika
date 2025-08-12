<template>
  <div>
    <section id="certificate">
      <!-- Header -->
      <header class="text-center py-10">
        <h1
          class="text-4xl md:text-5xl font-extrabold mb-2 text-blue-900 drop-shadow-lg"
        >
          Sertifikat dan Penghargaan
        </h1>
        <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Bukti komitmen Pratika terhadap keunggulan tercermin dari berbagai penghargaan
yang kami terima, baik dari para mitra maupun pemerintah, sebagai pengakuan atas layanan unggul dan produk berkualitas istimewa yang kami hadirkan.
        </p>
      </header>

      <!-- Gallery -->
      <main
        class="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          @click="openModal(image)"
        >
          <img
            :src="image"
            alt="Gallery Photo"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
          >
            <span
              class="text-white text-base font-semibold p-4 w-full text-center bg-black/30 backdrop-blur-sm rounded-b-2xl"
              >Click to enlarge</span
            >
          </div>
        </div>
      </main>

      <!-- Modal -->
      <transition name="fade">
        <div
          v-if="modalImage"
          class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          @click.self="closeModal"
        >
          <div class="relative max-w-4xl w-full px-4 animate-fadeIn">
            <button
              @click="closeModal"
              class="absolute top-2 right-2 text-white text-2xl cursor-pointer font-bold bg-gray-700 bg-opacity-70 h-10 w-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
            >
              &times;
            </button>
            <img
              :src="modalImage"
              class="w-full h-auto rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import aspindo from "../assets/images/aspindo.webp";
import mitsubishi1 from "../assets/images/mitsubisi-motors.webp";
import mitsubishi2 from "../assets/images/mitsubisi-motors2.webp";
import Dinas from "../assets/images/dinas-perindustrian-perdagangan11.webp";
import Panasonic1 from "../assets/images/panasonic (1).webp";
import Panasonic2 from "../assets/images/panasonic1.webp";
import Panasonic3 from "../assets/images/panasonic2.webp";
import Panasonic4 from "../assets/images/panasonic3.webp";
import Panasonic5 from "../assets/images/panasonic4.webp";
import Panasonic6 from "../assets/images/panasonic5.webp";
import VisiGlobal from "../assets/images/visi-global-indonesia.webp";
import Yayasan from "../assets/images/yayasan.webp";

const images = [
  aspindo,
  Dinas,
  mitsubishi1,
  mitsubishi2,
  Panasonic1,
  Panasonic2,
  Panasonic3,
  Panasonic4,
  Panasonic5,
  Panasonic6,
  VisiGlobal,
  Yayasan,
  // Add more images here if needed
];

const modalImage = ref(null);

function openModal(image) {
  modalImage.value = image;
}

function closeModal() {
  modalImage.value = null;
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.animate-fadeIn {
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
