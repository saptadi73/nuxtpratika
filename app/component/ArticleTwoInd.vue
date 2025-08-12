<template>
  <section id="who" class="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
    <div class="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <fade-in-cardx>
        <div>
          <div class="order-2 md:order-1">
            <h2 class="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
              Kualitas Tanpa Kompromi: Fondasi Kepercayaan Pelanggan
            </h2>
            <p class="text-gray-600 text-base md:text-lg mb-4">
              Kepercayaan mitra industri kami diraih melalui kinerja konsisten dan komitmen tanpa kompromi terhadap kualitas.<br/>
Mereka tahu, saat memilih Pratika, mereka tidak hanya mendapatkan perusahaan yang mampu memenuhi kebutuhan produksi saat ini, tetapi juga mitra yang akan terus menghadirkan produk-produk unggulan dalam jangka panjang.<br/>
Kepercayaan ini dibangun di atas fondasi keahlian, ketelitian, dan ketekunan — diperkuat oleh kontrol kualitas yang ketat dan menyeluruh.
              <br/>
              Sebagai bagian dari komitmen berkelanjutan kami terhadap keunggulan, Pratika menyadari bahwa menjaga kepercayaan tidak cukup hanya dengan memenuhi pesanan.<br/>
Kami bekerja erat dengan para mitra untuk memantau kinerja produk, mengumpulkan masukan, dan melakukan penyempurnaan yang diperlukan.<br/>

Tujuan kami bukan sekadar memenuhi harapan, tetapi melampauinya — demi memastikan keberhasilan berkelanjutan para mitra dan loyalitas pelanggan mereka.
            </p>
            <a
              href="https://wa.me/6281510297629"
              class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
              >Hubungi Kami</a
            >
          </div>
        </div>
      </fade-in-cardx>
      <fade-in-card-n-x>
        <div>
          <div class="order-1 md:order-2">
            <img
              src="../assets/images/trust_loyalty.png"
              alt="Community Empowerment"
              class="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </fade-in-card-n-x>
    </div>
  </section>
</template>

<script>
import FadeInCardNX from './FadeInCardNX.vue'
import FadeInCardx from './FadeInCard.vue'
export default {
  name: 'ArticleSectionRightImage',
  components: {
    FadeInCardNX,
    FadeInCardx,
  },
}
</script>
<style scoped>
h2 {
  border-bottom: 4px solid #16181a; /* Warna biru yang elegan */
  padding-bottom: 8px;
}</style>
