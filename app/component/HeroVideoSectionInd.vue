<template>
  <div class="relative w-full h-screen min-h-[480px] overflow-hidden">
    <video
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
      poster="../assets/images/sibuk_pekerja.png"
    >
      <source src="../assets/videos/pratika_video_canva.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="absolute inset-0 bg-black/60 md:bg-black/40"></div>
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 py-12 md:py-0"
    >
      <h1
        class="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 drop-shadow-lg leading-tight md:leading-tight font-lexend"
      >
        Unggul dalam Kualitas, Layanan, dan Ketepatan Waktu
      </h1>
      <p
        class="text-base xs:text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 drop-shadow max-w-xl mx-auto font-lexend"
      >
        Pratika Manufacturing berada di garis terdepan industri manufaktur, menghadirkan produk berkualitas tinggi yang memenuhi kebutuhan industri terkemuka di Indonesia serta merek-merek internasional yang diakui secara global.
      </p>
      <p
        class="text-base xs:text-lg sm:text-lg md:text-xl mb-6 md:mb-8 drop-shadow max-w-xl mx-auto font-sans text-gray-300"
      >
        Kami bangga dengan warisan keunggulan manufaktur yang terus kami jaga, menghadirkan produk berkualitas tinggi secara konsisten untuk mendukung industri ternama di seluruh dunia.
      </p>
      <!-- Optional: Add a button or call to action here -->
    </div>
  </div>
</template>
<style scoped>
@media (max-width: 480px) {
  .xs\:text-3xl {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
  .xs\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}
</style>

<script>
export default {
  name: 'HeroVideoSection',
}
</script>
