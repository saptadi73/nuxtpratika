<template>
  <div>
    <!-- Navbar -->
    <nav class="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-gray-900 via-[#2E1323] to-gray-900 p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="text-white font-bold text-xl font-poppins">
            <div class="flex items-center gap-2">
                <img src="../assets/images/pratika-logo.webp" class="w-8 h-8"/>
                <a href="#" class="font-bold">Pratika Manufacturing</a>
            </div>
          
        </div>

        <!-- Hamburger Icon for Mobile -->
        <div class="ipad-mini:hidden">
          <button @click="toggleMobileMenu" class="text-white focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Nav Links -->
        <div class="hidden ipad-mini:flex space-x-6 text-white font-medium">
          <a href="/ind/" class="hover:text-indigo-200">Home</a>
          <a href="/ind/#about" class="hover:text-indigo-200">Tentang Kami</a>
          <a href="/ind/#product" class="hover:text-indigo-200">Layanan</a>
          <a href="/ind/#partner" class="hover:text-indigo-200">Mitra</a>
          <a href="/ind/#certificate" class="hover:text-indigo-200">Penghargaan</a>
          <a href=""> </a>
          <a href="/" class="font-bold text-gray-600">Eng</a>
          <a href="">|</a>
          <a href="/ind/" class="font-bold text-green-400">Ind</a>

        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuVisible"
        class="ipad-mini:hidden mt-4 space-y-4 px-4 text-center"
      >
        <a href="/ind/" class="block py-2 text-white hover:bg-indigo-700 rounded">Home</a>
        <a href="/ind/#about" class="block py-2 text-white hover:bg-indigo-700 rounded">Tentang kami</a>
        <a href="/ind/#services" class="block py-2 text-white hover:bg-indigo-700 rounded">Layanan</a>
        <a href="/ind/#partner" class="block py-2 text-white hover:bg-indigo-700 rounded">Mitra</a>
        <a href="/ind/#certificate" class="block py-2 text-white hover:bg-indigo-700 rounded">Penghargaan</a>
        <a href="" class="block py-2 text-white hover:bg-indigo-700 rounded"> </a>
        <a href="/" class="block py-2 text-gray-600 hover:bg-indigo-700 rounded">Eng</a>
        <a href="/ind/" class="block py-2 text-white hover:bg-indigo-700 rounded">Ind</a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define a reactive variable for toggling the mobile menu
const isMobileMenuVisible = ref(false);

// Function to toggle the visibility of the mobile menu
const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
};
</script>

<style lang="scss" scoped></style>
