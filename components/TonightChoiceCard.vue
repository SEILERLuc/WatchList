<template>
    <div class="max-w-24 sm:max-w-32 m-1.5 pb-2 bg-zinc-800 bg-opacity-50 rounded-2xl">
        <div class="hover:font-bold hover:text-red-600 duration-100">
            <img v-if="show.image !== null" :src="show.image.original"
                class="mb-2 h-32 w-22 sm:h-44 sm:w-32 cursor-pointer rounded-md duration-300 hover:scale-105 hover:opacity-25"
                alt="name" />
            <div class="px-2 flex flex-row justify-between">
                <h3 class="hidden sm:block dark:text-zinc-400 sm:text-sm text-white">{{ show.name }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    show: {
        type: Object,
        required: true,
    }
})
</script>