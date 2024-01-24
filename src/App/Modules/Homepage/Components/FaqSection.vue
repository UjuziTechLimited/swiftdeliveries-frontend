<script setup>
import { ref } from 'vue';


const faqs = ref([
    {
        id: 1,
        question: 'What industries does Swift Deliveries serve?',
        answer: 'Swift Deliveries is designed for businesses in various industries, providing a versatile solution that can be integrated into any ERP system for deliveries.'
    },
    {
        id: 2,
        question: 'How does real-time tracking work?',
        answer: 'Swift Deliveries offers real-time tracking to monitor deliveries live, address issues instantly, and keep customers informed. It is a powerful tool to ensure visibility throughout the delivery process.'
    },
    {
        id: 3,
        question: 'Can Swift Deliveries be customized for my business?',
        answer: 'Absolutely! Swift Deliveries is scalable and customizable to fit the unique needs of your business. Grow your operations with a tailored solution.'
    },
])

</script>

<template>
    <div class="container mx-auto my-8 snap-start" id="faqs">
        <div class="p-4 m-4 text-center ">
            <h1 class="text-4xl font-bold font-headings">Frequently Asked Questions</h1>
        </div>
        <div v-for="faq in faqs" :key="faq.id" class="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div class="text-xl font-medium collapse-title">
                {{ faq.question }}
            </div>
            <div class="collapse-content">
                <p>{{ faq.answer }}</p>
            </div>
        </div>
    </div>
</template>



<style scoped></style>