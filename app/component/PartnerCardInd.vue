<template>
  <section id="partner" class="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900 drop-shadow-lg">Mitra Kami</h2>
    <p class="text-center font-semibold text-slate-500 font-poppins">Dengan daftar mitra terpercaya yang terus bertambah, Pratika telah membangun aliansi berharga tidak hanya dengan merek internasional ternama, tetapi juga dengan perusahaan yang memiliki basis pelanggan luas — memperkuat reputasi kami sebagai simbol keunggulan dan keandalan.</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
      <div v-for="partner in partners" :key="partner.name" class="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4 hover:scale-105 transition-transform duration-300">
        <div class="w-full h-24 flex items-center justify-center bg-white rounded-lg">
          <img :src="partner.logo" :alt="partner.name" class="max-h-20 max-w-[120px] object-contain block mx-auto border border-gray-200" style="background:#f8fafc; border-radius:0.75rem; padding:0.5rem; box-sizing:border-box;" />
        </div>
        <span class="text-xs text-gray-600 mt-2 text-center">{{ partner.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import Ericsson from '../assets/images/ericsson.webp';
import Panasonic from '../assets/images/panasonic.webp';
import Haussend from '../assets/images/haussend.webp';
import Huawei from '../assets/images/huawei.webp';
import Indosat from '../assets/images/Indosat_Ooredoo_Hutchison.png';
import AceHardware from '../assets/images/ace_hardware.webp';
import Takagi from '../assets/images/takagi.webp';
import Prima from '../assets/images/prima_komponen.webp';
import Wen from '../assets/images/wen.webp';
import BraceBoon from '../assets/images/braceboon.webp';
const partners = [
  {
    name: 'Ericsson',
    logo: Ericsson,
  },
  {
    name: 'Panasonic',
    logo: Panasonic,
  },
  {
    name: 'Haussend',
    logo: Haussend,
  },
  {
    name: 'Huawei',
    logo: Huawei,
  },
  {
    name: 'Indosat Oreedoo Hutchinson',
    logo: Indosat,
  },
  {
    name: 'Ace Hardware',
    logo: AceHardware,
  },
  {
    name: 'Takagi Sari Multi Utama',
    logo: Takagi,
  },
  {
    name: 'Prima Komponen Indonesia',
    logo: Prima,
  },
  {
    name: 'WEN',
    logo: Wen,
  },
  {
    name: 'Brace Boon',
    logo: BraceBoon,
  },
  // Add more partner logos as needed
];
</script>

<style scoped>
</style>
