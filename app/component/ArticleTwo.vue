<template>
  <section id="who" class="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
    <div class="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <fade-in-cardx>
        <div>
          <div class="order-2 md:order-1">
            <h2 class="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
              Stringent Quality Control: The Key to Trust and Loyalty
            </h2>
            <p class="text-gray-600 text-base md:text-lg mb-4">
              The trust of our industrial partners is earned through consistent performance and unwavering commitment to quality. Our partners understand that when they choose Pratika, they are selecting a company that is not only capable of meeting their immediate production needs but one that will continue to deliver exceptional products over the long term. This trust is built on a foundation of expertise, precision, and perseverance, and is reinforced by our rigorous quality control.
              <br/>
              As part of our ongoing commitment to excellence, Pratika recognizes that maintaining this trust requires more than just fulfilling orders. We work closely with our partners to monitor the performance of our products, collect feedback, and make improvements as necessary. Our goal is not just to meet expectations but to exceed them, ensuring the continued success of our partners and the loyalty of their customers.
            </p>
            <a
              href="https://wa.me/6281510297629"
              class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
              >Contact Us</a
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
