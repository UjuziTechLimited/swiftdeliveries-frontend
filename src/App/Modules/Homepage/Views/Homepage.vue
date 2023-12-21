
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MainLayout from '@/App/Common/Layouts/MainLayout.vue';
import HeroSection from '../Components/HeroSection.vue';
import FeaturesSection from '../Components/FeaturesSection.vue';
import TestimonialsSection from '../Components/TestimonialsSection.vue';
import ContactSection from '../Components/ContactSection.vue';


</script>

<template>
    <div class="scroll-smooth">
        <MainLayout class="scroll-py-6 snap-y">
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <TestimonialsSection></TestimonialsSection>
            <ContactSection></ContactSection>
        </MainLayout>
    </div>
</template>