<!-- src/App/Modules/Orders/Components/NewOrderForm.vue -->

<script setup>
import { ref, onMounted } from 'vue';
import { useOrganizationsStore } from '@/stores/organizationsStore';


const organizationsStore = useOrganizationsStore();
const editMode = ref(false); // Add this line


const organization = ref({
    id: '',
    name: '',

})
const emit = defineEmits(['submitForm']);

const submitForm = (organization) => {
    emit('submitForm', organization);
    newOrganizationForm.close();
}

</script>


<template>
    <div class="text-xl text-center font-headings">
        New Organization
    </div>
    <form class="space-y-4" @submit.prevent="submitForm(organization)">
        <div>
            <label class="label">
                <span class="text-base label-text">Name</span>
            </label>
            <input v-model="organization.name" type="text" placeholder="John Doe"
                class="w-full input input-bordered input-primary" />
        </div>


        <div>
            <button type="submit" class="btn btn-block btn-primary">Add Organization</button>
        </div>
    </form>
</template>