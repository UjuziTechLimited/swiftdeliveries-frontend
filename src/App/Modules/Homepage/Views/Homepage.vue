
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HomepageLayout from '@/App/Common/Layouts/HomepageLayout.vue';
import HeroSection from '../Components/HeroSection.vue';
import FeaturesSection from '../Components/FeaturesSection.vue';
import TestimonialsSection from '../Components/TestimonialsSection.vue';
import ContactSection from '../Components/ContactSection.vue';


</script>

<template>
    <div>
        <HomepageLayout>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <TestimonialsSection></TestimonialsSection>
            <ContactSection></ContactSection>
        </HomepageLayout>
    </div>
</template>