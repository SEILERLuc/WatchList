<template>
    <div class="m-1.5 bg-zinc-800 bg-opacity-50 rounded-2xl">
        <div class="flex flex-col sm:flex-row">
            <img v-if="show.image !== null" :src="show.image.original" class="h-54 w-40 sm:h-64 sm:w-46 rounded-md"
                alt="name" />
            <img v-else src="/img/UI/no-image.png" class="h-54 w-40 sm:h-64 sm:w-46 rounded-md" alt="name" />
            <div class="p-4 flex flex-col text-white max-w-40 sm:max-w-64">
                <h3 class="dark:text-zinc-400 sm:text-sm text-white uppercase font-bold">{{ show.name }}
                </h3>
                <ul class="mb-4">
                    <li v-if="show.genres.length !== 0" v-for="genre in show.genres">{{ genre }}</li>
                    <li v-else>No info about the genres</li>
                </ul>
                <ul>
                    <li v-if="show.rating.average === null">No infos /10</li>
                    <li v-else>{{ show.rating.average }} /10</li>
                    <li class="flex flex-row items-center">
                        <img src="/img/UI/star.png" class="w-6" alt="rating star" v-for="star in 5" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const user = useUserStore()

defineProps({
    show: {
        type: Object,
        required: true,
    }
})

//const Rating5 = ref(5)
/*fromRating10ToRating5(user.tonightShow.rating.average)

function fromRating10ToRating5(N10) {
    if (N10 === null) {
        console.log("No rating info...")
        return
    }
    console.log("Note to convert", N10)
    console.log((N10 * 5) / 10)
    Rating5.value = Math.round((N10 * 5) / 10)
    //Rating5.value = 5
    console.log("Note converted : ", Rating5.value)
}*/
</script>