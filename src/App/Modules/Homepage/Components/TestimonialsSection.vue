<script setup>
import {
    ref
} from 'vue';

const testimonials = ref([

    {
        id: 1,
        author: 'John Doe, XYZ Company',
        quote: 'SwiftDeliveries made our document handling process seamless. Highly recommended',
    },
    {
        id: 2,
        author: 'Jane Smith, ABC Corporation',
        quote: 'The real-time tracking feature helped us keep our clients informed and satisfied',
    },
    {
        id: 3,
        author: 'Michael Johnson, LMN Enterprises',
        quote: 'Efficient and secure deliveries. SwiftDeliveries is our go-to service for all our document needs',
    },
    {
        id: 4,
        author: 'Jane Smith, ABC Corporation',
        quote: 'SwiftDeliveries made our document handling process seamless. Highly recommended',
    },
    {
        id: 5,
        author: 'John Doe, XYZ Company',
        quote: 'The real-time tracking feature helped us keep our clients informed and satisfied',
    }
])

</script>


<template>
    <section class="container p-4 mx-auto my-16 rounded-xl" id="testimonials">
        <div class="p-4 m-4 text-center">
            <h1 class="text-4xl font-bold">Testimonials</h1>
        </div>

        <div class="carousel">
            <div v-for="testimony in testimonials" :key="testimony.id" class="w-1/3 p-2 carousel-item">
                <div class="p-2 text-left transition-all duration-300 ease-in-out border rounded-md border-content">
                    <div class="mb-1 text-xl italic">"{{ testimony.quote }}"</div>
                    <div class="text-lg font-bold">- {{ testimony.author }}</div>
                </div>
            </div>

        </div>

    </section>
</template>



<style scoped></style>
