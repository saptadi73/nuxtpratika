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
          <h2 class="text-2xl md:text-4xl font-bold mb-4 text-gray-800 border-b-4 border-blue-600 pb-2">
            The Future Needs Strong Partnerships. Start with Us.
          </h2>
          <p class="text-gray-600 text-base md:text-lg mb-4 font-montserrat">
            We don’t just work with industry leaders—we grow with them. From Panasonic and Mitsubishi to Ericsson and Huawei, we’ve stood alongside brands that shape the nation’s economy. Our partnerships with powerhouses like Indosat Ooredoo Hutchinson and Ace Hardware reflect our ability to deliver impact at scale.<br/>
            Your ambition deserves more than just a supplier. It deserves a partner with the passion, integrity, and drive to build something exceptional. If you’re ready to take your business to the next level, so are we.
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
import FadeInCardNX from './FadeInCardNX.vue'
import FadeInCardx from './FadeInCard.vue'
export default {
  name: 'ArticleSection',
  components: {
    FadeInCardNX,
    FadeInCardx,
  },
}
</script>

<style scoped>
/* Menambahkan garis bawah dengan efek elegan pada judul */
h2 {
  border-bottom: 4px solid #3182ce; /* Warna biru yang elegan */
  padding-bottom: 8px;
}
</style>
