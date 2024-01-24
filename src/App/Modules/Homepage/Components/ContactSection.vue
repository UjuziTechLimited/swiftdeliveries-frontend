<!-- src/App/Modules/Homepage/Components/ContactSection.vue -->

<script setup>
import { ref } from 'vue';
// import Swal from 'sweetalert2'

import { useMessagesStore } from '@/stores/messagesStore';

const messagesStore = useMessagesStore();

const message = ref({
    name: '',
    email: '',
    message: '',
});


// const emit = defineEmits(['submitForm']);

const submitForm = (message) => {
    //  emit('submitForm', order);
    messagesStore.addMessage(message);
};
</script>



<template>
    <div class="container mx-auto mb-6 snap-start" id="contact">
        <div class="p-4 m-4 text-center ">
            <h1 class="text-4xl font-bold font-headings">Contact Us</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 ">
            <div class="items-center p-4 mx-4 my-auto">
                <h1 class="text-3xl text-center font-content">Have questions or ready to get started with Swift Deliveries?
                    Leave us a message by filling in the form, and we'll get back to you promptly. Feel free to explore how
                    Swift Deliveries can enhance your delivery operations.</h1>
            </div>
            <form @submit.prevent="submitForm(message)"
                class="px-8 pt-6 pb-8 mb-4 border-2 shadow-md bg-base-300 rounded-3xl">
                <div class="mb-4">
                    <label class="w-full form-control">
                        <div class="label">
                            <span class="label-text font-content">What is your name?</span>
                        </div>
                        <input v-model="message.name" type="text" placeholder="John Doe"
                            class="w-full input input-primary input-bordered" required />
                    </label>
                </div>
                <div class="mb-4">
                    <label class="w-full form-control">
                        <div class="label">
                            <span class="label-text font-content">What is your email?</span>
                        </div>
                        <input v-model="message.email" type="email" placeholder="someone@example.com"
                            class="w-full input input-primary input-bordered" required />
                    </label>
                </div>
                <div class="mb-4">
                    <textarea v-model="message.message" class="w-full textarea textarea-lg textarea-primary"
                        placeholder="Message" required></textarea>
                </div>
                <div class="">
                    <button type="submit" class="font-bold btn btn-primary font-headings">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped></style>
