<template>
    <section class="container p-4 mx-auto my-16 rounded-xl" id="testimonials">
        <div class="p-4 m-4 text-center">
            <h1 class="text-4xl font-bold">Testimonials</h1>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Testimonial Card 1 -->
            <div class="testimonial-card">
                <div class="quote">"SwiftDeliveries made our document handling process seamless. Highly recommended!"</div>
                <div class="author">- John Doe, XYZ Company</div>
            </div>

            <!-- Testimonial Card 2 -->
            <div class="testimonial-card">
                <div class="quote">"The real-time tracking feature helped us keep our clients informed and satisfied."</div>
                <div class="author">- Jane Smith, ABC Corporation</div>
            </div>

            <!-- Testimonial Card 3 -->
            <div class="testimonial-card">
                <div class="quote">"Efficient and secure deliveries. SwiftDeliveries is our go-to service for all our
                    document needs."</div>
                <div class="author">- Michael Johnson, LMN Enterprises</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Additional Styles for Testimonials Section */
.testimonial-card {
    text-align: left;
    border: 1px solid #e2e8f0;
    padding: 1.5rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    /* @apply: text-left border border-content p-1 rounded-md transition-all duration-300 ease-in-out; */
}

.testimonial-card:hover {
    transform: translateY(-4px);
}

.quote {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1rem;
}

.author {
    font-size: 1.2rem;
    font-weight: bold;
}
</style>
