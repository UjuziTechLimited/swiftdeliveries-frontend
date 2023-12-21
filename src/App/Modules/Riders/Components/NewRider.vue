<script setup>
import { ref } from 'vue';
import { useRidersStore } from '@/stores/ridersStore';


const ridersStore = useRidersStore();

const rider = ref({
    id: '',
    name: '',
    phoneNumber: '',
    accountStatus: 'active',
    assignStatus: true,

})
const emit = defineEmits(['submitForm', 'updateRider']);

const submitForm = (rider) => {
    emit('submitForm', rider);
    my_modal_3.close();
}
</script>


<template>
    <div class="text-xl text-center font-headings">
        Add Rider
    </div>
    <form class="space-y-4" @submit.prevent="submitForm(rider)">
        <div>
            <label class="label">
                <span class="text-base label-text">Name</span>
            </label>
            <input v-model="rider.name" type="text" placeholder="John Doe"
                class="w-full input input-bordered input-primary" />
        </div>

        <div>
            <label class="label">
                <span class="text-base label-text">Phone Number</span>
            </label>
            <input v-model="rider.phoneNumber" type="number" maxlength="9" placeholder="7xxxxxxxx"
                class="w-full input input-bordered input-primary" />
        </div>


        <div>
            <button type="submit" class="btn btn-block btn-primary">Add Rider</button>
        </div>
    </form>
</template>