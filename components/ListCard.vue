<template>
    <li class="max-w-24 sm:max-w-32 m-1.5 pb-2 bg-zinc-800 bg-opacity-50 rounded-2xl">
        <div class="hover:font-bold hover:text-red-600 duration-100">
            <img :src="show.image.original" @click="showDetails = true"
                class="mb-2 h-32 w-22 sm:h-44 sm:w-32 cursor-pointer rounded-md duration-300 hover:scale-105 hover:opacity-25"
                alt="name" />
            <div class="px-2 flex flex-row justify-between">
                <h3 class="hidden sm:block dark:text-zinc-400 sm:text-sm text-white">{{ show.name }}</h3>
                <button v-if="!user.isAlreadyInList(show.id)" @click="user.addToList(show)"
                    class="h-5 w-5 bg-red-100 px-2 disabled:text-yellow-400 border-1 hover:scale-95 duration-100 text-white flex items-center justify-center rounded-full"
                    type="button">
                    +
                </button>
                <button v-if="user.isAlreadyInList(show.id)" @click="user.deleteFromList(show.id)"
                    class="h-5 w-5 bg-red-100 px-2 disabled:text-yellow-400 border-1 hover:scale-95 duration-100 text-white flex items-center justify-center rounded-full"
                    type="button">
                    -
                </button>
                <!--<button v-if="user.isAlreadyInList(show.id)" @click="emit('addToList', show), user.deleteFromList(show)"
                    class="h-5 w-5 bg-red-100 px-2 disabled:text-yellow-400 border-1 hover:scale-95 duration-100 text-white flex items-center justify-center rounded-full"
                    type="button">
                    -
                </button>-->
            </div>
        </div>
        <n-modal v-model:show="showDetails" style="background-color: #000000; color: aliceblue;" class="p-0">
            <n-card v-model:show="showDetails" :title="show.name" :bordered="false" size="small" role="dialog"
                aria-modal="true" class="w-150">
                <div class="rounded bg-black p-5 text-white">
                    <div class="text-end">
                        <button :disabled="message === ''" @click="emit('addToList', show)"
                            class="bg-red-100 px-2 disabled:text-yellow-400 border-1 hover:scale-95 duration-300"
                            type="button">Ajouter à ma liste</button>
                    </div>
                    <div>
                        <h2 class="uppercase font-bold">Genres : {{ show.title }}</h2>
                        <ul class="py-4 flex flex-wrap">
                            <li v-for="genre in show.genres" class="px-4 m-2 bg-[#841717] rounded-md border-1">{{ genre }}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-2 uppercase font-bold">Description :</h2>
                        <p class="text-left">{{ show.summary }}</p>
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
/*Test pinia*/
import { useUserStore } from '~/stores/user';

const user = useUserStore()

/*FIN*/


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
