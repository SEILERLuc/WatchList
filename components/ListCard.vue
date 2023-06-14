<template>
    <li class="max-w-24 sm:max-w-32 m-1.5 pb-2 bg-zinc-800 bg-opacity-50 rounded-2xl">
        <!--<div @click="showDetails = true" class="w-32 h-44 bg-red-100 relative cursor-pointer hover:font-bold duration-100">
            <div class=" absolute inset-0 bg-cover bg-center z-0">
                <img :src="show.image.original"
                    class="mb-2 h-32 w-22 sm:h-44 sm:w-32 rounded-md duration-300 hover:scale-105 hover:opacity-25"
                    :alt="show.name" />
                <h3 class="hidden sm:block dark:text-zinc-400 sm:text-sm">{{ show.name }}</h3>
            </div>
            <div
                class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                {{ show.name }}</div>
        </div>-->
        <div class="hover:font-bold hover:text-red-600 duration-100">
            <img :src="show.image.original" @click="showDetails = true"
                class="mb-2 h-32 w-22 sm:h-44 sm:w-32 cursor-pointer rounded-md duration-300 hover:scale-105 hover:opacity-25"
                alt="name" />
            <div class="px-2 flex flex-row justify-between">
                <h3 class="hidden sm:block dark:text-zinc-400 sm:text-sm text-white">{{ show.name }}</h3>
                <button :disabled="message === ''" @click="emit('addToList', show)"
                    class="h-5 w-5 bg-red-100 px-2 disabled:text-yellow-400 border-1 hover:scale-95 duration-100 text-white flex items-center justify-center rounded-full"
                    type="button">+</button>
            </div>
        </div>

        <n-modal v-model:show="showDetails" style="background-color: rgb(25, 99, 99);">
            <n-card style="width: 600px; padding: 0px;" :title="show.name" :bordered="false" size="huge" role="dialog"
                aria-modal="true">
                <div class="rounded bg-black p-5 text-white">
                    <div class="text-end">
                        <button :disabled="message === ''" @click="emit('addToList', show)"
                            class="bg-red-100 px-2 disabled:text-yellow-400 border-1 hover:scale-95 duration-300"
                            type="button">Ajouter à ma liste</button>
                    </div>
                    <div>
                        <h2 class="uppercase font-bold">Genres : {{ show.title }}</h2>
                        <ul class="py-4 flex flex-wrap">
                            <li v-for="genre in show.genres" class="px-4 m-2 bg-[#DA2D08] rounded-md border-1">{{ genre }}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-2 uppercase font-bold">Description :</h2>
                        <p class="text-center">{{ show.summary }}</p>
                    </div>
                    <div>
                        <h2 class="pb-4">Average: </h2>
                        {{ show.averageRuntime }}
                    </div>
                </div>
            </n-card>
        </n-modal>
    </li>
</template>

<script setup>
const showDetails = ref(false)
const emit = defineEmits(['addToList'])

defineProps({
    show: {
        type: Object,
        required: true,
    }
})

let message = "hi"

</script>
