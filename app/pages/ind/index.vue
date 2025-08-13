<template>
    <div>
        <nav-bar-menu/>
        <hero-video-section/>
        <article-one/>
        <product-card/>
        <article-two/>
        <partner-card/>
        <gallery-certificate/>
        <quote-article/>
        <footer-depan/>
    </div>
</template>

<script setup>
import NavBarMenu from '~/component/NavBarMenuInd.vue';
import HeroVideoSection from '~/component/HeroVideoSectionInd.vue';
import ArticleOne from '~/component/ArticleOneInd.vue';
import ProductCard from '~/component/ProductCardInd.vue';
import ArticleTwo from '~/component/ArticleTwoInd.vue';
import PartnerCard from '~/component/PartnerCardInd.vue';
import GalleryCertificate from '~/component/GalleryCertificateInd.vue';
import FooterDepan from '~/component/FooterDepan.vue';
import QuoteArticle from '~/component/QuoteArticleInd.vue';

useSeoMeta({
  title: 'Pratika Manufacturing',
  ogTitle: 'Pratika Manufacturing',
  description: 'Unggul dalam Kualitas, Layanan, dan Ketepatan Waktu. Pratika Manufacturing berada di garis terdepan industri manufaktur, menghadirkan produk berkualitas tinggi yang memenuhi kebutuhan industri terkemuka di Indonesia serta merek-merek internasional yang diakui secara global.',
  ogDescription: 'Unggul dalam Kualitas, Layanan, dan Ketepatan Waktu. Pratika Manufacturing berada di garis terdepan industri manufaktur, menghadirkan produk berkualitas tinggi yang memenuhi kebutuhan industri terkemuka di Indonesia serta merek-merek internasional yang diakui secara global.',
  ogImage: '/pratika_manufacture.png',
  twitterCard: '/pratika_manufacture.png',
})

</script>

<style lang="scss" scoped>

</style>