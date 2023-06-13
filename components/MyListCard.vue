<template>
    <li class="mb-1 flex flex-row items-center justify-between border-y-2 py-2">
        <div class="flex flex-row">
            <img :src="show.image.medium" class="w-16 border px-1" :alt="show.name" />
            <div>
                <ul class="px-4">
                    <li class="underline">{{ show.name }}</li>
                    <li> {{ show.averageRuntime }} </li>
                    <li> {{ show.rating.average }} </li>
                    <li> {{ show.premiered }} </li>
                </ul>
            </div>
        </div>
        <!--<button @click="emit('addForSelection', show)" class="bg-slate-300 px-2" type="button">hello</button>-->
        <input type="checkbox" class="w-max mr-2" @click="emit('addForSelection', show), isChecked(show)" />
    </li>
</template>

<script setup>
const emit = defineEmits(['addForSelection'])

defineProps({
    show: {
        type: Object,
        required: true,
    }
})

let checked = ref(false)


function isChecked(show) {
    if (checked == false) {
        checked = true
        console.log("Décoché ==> ", "Name:", show.name, "ID:", show.id)
        show.isChecked = false
    } else {
        checked = false
        console.log("Coché ==> ", "Name:", show.name, "ID:", show.id)
        show.isChecked = true
    }
    console.log(show)
}


</script>