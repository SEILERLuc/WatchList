<template>
    <li class="mb-1 flex flex-row items-center justify-between border-y-2 py-2">
        <div class="flex flex-row">
            <img :src="show.image.medium" class="w-16 border px-1" alt="name" />
            <div>
                <ul class="px-4">
                    <li class="underline"> {{ show.name }}</li>
                    <li> {{ show.averageRuntime }}</li>
                    <li> {{ show.rating.average }}</li>
                    <li> {{ show.premiered }}</li>
                </ul>
            </div>
        </div>
        <button @click="console.log('Ajouter à la liste', show.id, show.name)" class="bg-slate-300 px-2"
            type="button">Ajouter à ma
            liste</button>
        <button @click="addShow()" class="bg-slate-300 px-2" type="button">Ajouter à ma
            liste</button>
    </li>
</template>

<script setup>
defineProps({
    show: {
        type: Object,
        required: true,
    }
})

function addShow() {
    console.log("=== Ajout de la série dans la liste ===")
}
</script>