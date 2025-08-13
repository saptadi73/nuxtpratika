<template>
  <section id="partner" class="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900 drop-shadow-lg">Our Partners</h2>
    <p class="text-center font-semibold text-slate-500 font-poppins">With a growing list of trusted partners, Pratika has formed valuable alliances with not only well-established international brands but also companies with expansive customer bases, reinforcing our reputation for excellence and dependability</p>
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
import DayaCiptaAnugrah from '../assets/images/daya_cipta_anugrah.webp';
import IndoMecoPratama from '../assets/images/indo_meco_pratama.webp';
import kht from '../assets/images/kht.webp';
import persada from '../assets/images/persada.webp';
import SaptaWibawa from '../assets/images/sapta_wibawa.webp';
import SumberDipaKencana from '../assets/images/sumber_dipa_kencana.webp';
import TeralindoLestary from '../assets/images/teralindo_lestary.webp';
import VegaMandiri from '../assets/images/vega_mandiri.webp';

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
  {
    name: 'Persada',
    logo: persada,
  },
  {
    name: 'Sapta Wibawa',
    logo: SaptaWibawa,
  },
  {
    name: 'SumberDipa Kencana',
    logo: SumberDipaKencana,
  },
  {
    name: 'Teralindo Lestary',
    logo: TeralindoLestary,
  },
  {
    name: 'Vega Mandiri',
    logo: VegaMandiri,
  },
  {
    name: 'KHT',
    logo: kht,
  },
  {
    name: 'Indo Meco Pratama',
    logo: IndoMecoPratama,
  },
  {
    name: 'Daya Cipta Anygrah',
    logo: DayaCiptaAnugrah,
  },
  // Add more partner logos as needed
];
</script>

<style scoped>
</style>
