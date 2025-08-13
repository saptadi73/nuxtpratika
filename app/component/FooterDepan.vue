<template>
  <div id="hubungi" class="mt-20">
    <footer class="bg-[#273746] text-white">
      <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Logo + Deskripsi -->
        <div>
          <img
            src="../assets/images/pratika-logo.webp"
            alt="Logo PT Pratika"
            class="h-18 w-18 rounded-full bg-blue-50 mb-4"
          />
          <p class="text-sm opacity-80">PT Pratika Nugraha Jaya</p>
        </div>

        <!-- Navigasi (Gantikan dengan Peta Leaflet) -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Visit Us:</h4>
          <div class="space-y-2 text-sm">
            <div id="map" style="height: 300px;"></div>
            <p class="mt-2">Alamat: Jl. Beringin, No. 71, Kel. Leuwinanggung, Kec. Tapos, Depok, Jawa Barat, Indonesia 16456</p>
          </div>
        </div>

        <!-- Kontak -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <ul class="text-sm space-y-2">
            <li class="flex items-start">
              <span class="material-symbols-outlined"> location_on </span>
              Jl. Beringin, No. 71, Kel. Leuwinanggung, Kec. Tapos, Depok, Jawa Barat, Indonesia 16456
            </li>
            <li class="flex items-center">
              <span class="material-symbols-outlined"> email </span>
              info@pratika.biz
            </li>
            <li class="flex items-center">
              <span class="material-symbols-outlined"> perm_phone_msg </span>
              +62 815 1029 7629
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Newsletter</h4>
          <p class="text-sm mb-3">Get the latest updates from us:</p>
          <form class="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email"
              class="w-full px-3 py-2 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              class="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm font-semibold transition"
            >
              Subscribe
            </button>
          </form>

          <!-- Ikon Sosial Media -->
          <div class="flex space-x-4 mt-5">
            <a href="#" class="hover:text-blue-400" aria-label="Facebook">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12.07C22 6.487 17.513 2 12 2S2 6.487 2 12.07c0 4.993 3.657 9.13 8.438 9.878v-6.99H7.898v-2.888h2.54v-2.195c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.867h2.773l-.443 2.888h-2.33v6.99C18.343 21.2 22 17.063 22 12.07z"
                />
              </svg>
            </a>
            <a href="#" class="hover:text-pink-400" aria-label="Instagram">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7.75 2C4.522 2 2 4.522 2 7.75v8.5C2 19.478 4.522 22 7.75 22h8.5C19.478 22 22 19.478 22 16.25v-8.5C22 4.522 19.478 2 16.25 2h-8.5zM12 8a4 4 0 100 8 4 4 0 000-8zm6.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
                />
              </svg>
            </a>
            <a href="#" class="hover:text-blue-300" aria-label="LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6.94 6.5a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88zM4.5 8.75h4.89v10.75H4.5V8.75zm7.34 0h4.69v1.61h.07c.65-1.23 2.24-2.53 4.6-2.53 4.92 0 5.83 3.24 5.83 7.45v4.22H21v-3.76c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.73-2.57 3.53v3.89h-4.89V8.75z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-blue-700">
        <div class="max-w-7xl mx-auto px-6 py-4 text-sm text-center text-blue-300">
          &copy; {{ new Date().getFullYear() }} PT Pratika Nugraha Jaya. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
const { $leaflet } = useNuxtApp();

onMounted(() => {
  const map = $leaflet.map('map').setView([-6.41430, 106.90083], 16);

  $leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  $leaflet
    .marker([-6.41430, 106.90083])
    .addTo(map)
    .bindPopup('<b>PT Pratika Nugraha</b><br>Jl. Beringin, No. 71, Kel. Leuwinanggung, Kec. Tapos, Depok, Jawa Barat, Indonesia 16456')
    .openPopup();
});
</script>

<style scoped>
#map {
  height: 300px;
}
</style>
