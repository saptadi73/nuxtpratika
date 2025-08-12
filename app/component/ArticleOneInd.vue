<template>
  <section id="about" class="w-full max-w-7xl mx-auto px-4 py-12 md:py-10">
    <div class="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <fade-in-card-n-x>
        <div>
          <img
            src="../assets/images/mur_baut.png"
            alt="ERP Poultry Management"
            class="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </fade-in-card-n-x>
      <fade-in-cardx>
        <div>
          <h2
            class="text-2xl md:text-4xl font-bold mb-4 text-gray-800 border-b-4 border-blue-600 pb-2"
          >
            Masa Depan Butuh Kemitraan yang Kuat. Mulailah Bersama Kami.
          </h2>
          <p class="text-gray-600 text-base md:text-lg mb-4 font-montserrat">
            Kami tidak sekadar bekerja dengan para pemenang di dunia industri — kami
            tumbuh bersama mereka. Dari Panasonic dan Mitsubishi hingga Ericsson
            dan Huawei, kami berdiri berdampingan dengan merek-merek yang
            membentuk perekonomian bangsa. Kemitraan kami dengan raksasa seperti
            Indosat Ooredoo Hutchison dan Ace Hardware adalah bukti kemampuan
            kami menghadirkan dampak berskala besar.<br />
            Cita-cita Anda pantas mendapatkan lebih dari sekadar mitra pelanggan dan supplier. Anda layak mendapat mitra dengan semangat, integritas, dan tekad untuk membangun sesuatu yang luar biasa. Jika Anda siap membawa bisnis Anda ke level berikutnya, kami juga siap melangkah bersama.
          </p>
          <div class="flex gap-6 items-center">
            <a
              href="https://wa.me/6281510297629"
              class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
              >Contact Us</a
            >
          </div>
        </div>
      </fade-in-cardx>
    </div>
  </section>
</template>

<script>
import FadeInCardNX from "./FadeInCardNX.vue";
import FadeInCardx from "./FadeInCard.vue";
export default {
  name: "ArticleSection",
  components: {
    FadeInCardNX,
    FadeInCardx,
  },
};
</script>

<style scoped>
/* Menambahkan garis bawah dengan efek elegan pada judul */
h2 {
  border-bottom: 4px solid #3182ce; /* Warna biru yang elegan */
  padding-bottom: 8px;
}
</style>
