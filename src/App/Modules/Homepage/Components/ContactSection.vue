<template>
    <div class="container mx-auto mb-6 snap-start" id="contact">
        <div class="p-4 m-4 text-center ">
            <h1 class="text-4xl font-bold font-headings">Contact Us</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 ">
            <div class="items-center p-4 mx-4 my-auto">
                <h1 class="text-3xl text-center font-content">Leave Us a message by filling in the form and we will get back
                    to you.</h1>
            </div>
            <form class="px-8 pt-6 pb-8 mb-4 border-2 shadow-md bg-base-300 rounded-3xl">
                <div class="mb-4">
                    <label class="w-full form-control">
                        <div class="label">
                            <span class="label-text font-content">What is your name?</span>
                        </div>
                        <input type="text" placeholder="John Doe" class="w-full input input-primary input-bordered" />
                    </label>
                </div>
                <div class="mb-4">
                    <label class="w-full form-control">
                        <div class="label">
                            <span class="label-text font-content">What is your email?</span>
                        </div>
                        <input type="text" placeholder="someone@example.com"
                            class="w-full input input-primary input-bordered" />
                    </label>
                </div>
                <div class="mb-4">
                    <textarea class="w-full textarea textarea-lg textarea-primary" placeholder="Message"></textarea>
                </div>
                <div class="">
                    <button class="font-bold btn btn-primary font-headings">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const formData = ref({
    name: '',
    email: '',
    message: '',
});

const submitForm = () => {
    // Handle form submission logic
    console.log('Form submitted:', formData.value);
    // You can add your own logic for form submission here
};
</script>

<style scoped></style>
