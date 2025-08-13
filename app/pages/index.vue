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
import NavBarMenu from '~/component/NavBarMenu.vue';
import HeroVideoSection from '~/component/HeroVideoSection.vue';
import ArticleOne from '~/component/ArticleOne.vue';
import ProductCard from '~/component/ProductCard.vue';
import ArticleTwo from '~/component/ArticleTwo.vue';
import PartnerCard from '~/component/PartnerCard.vue';
import GalleryCertificate from '~/component/GalleryCertificate.vue';
import FooterDepan from '~/component/FooterDepan.vue';
import QuoteArticle from '~/component/QuoteArticle.vue';

useSeoMeta({
  title: 'Pratika Manufacturing',
  ogTitle: 'Pratika Manufacturing',
  description: 'Excellence in Quality, Service, and Timely Delivery. Pratika Manufacturing stands at the forefront of the manufacturing industry, delivering high-quality products that meet the demands of leading industries in Indonesia and globally recognized international brands',
  ogDescription: 'Excellence in Quality, Service, and Timely Delivery. Pratika Manufacturing stands at the forefront of the manufacturing industry, delivering high-quality products that meet the demands of leading industries in Indonesia and globally recognized international brands.',
  ogImage: '/pratika_manufacture.png',
  twitterCard: '/pratika_manufacture.png',
})

</script>

<style lang="scss" scoped>

</style>