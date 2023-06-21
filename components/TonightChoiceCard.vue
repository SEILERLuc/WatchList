<template>
    <div class="m-1.5 bg-zinc-800 bg-opacity-50 rounded-2xl">
        <div class="flex flex-row">
            <img v-if="show.image !== null" :src="show.image.original" class="h-50 w-36 sm:h-64 sm:w-50 rounded-md"
                alt="name" />
            <div class="px-2 flex flex-col text-white">
                <h3 class="hidden sm:block dark:text-zinc-400 sm:text-sm text-white uppercase font-bold">{{ show.name }}
                </h3>
                <ul>
                    <li v-for="genre in show.genres">{{ genre }}</li>
                </ul>
                <ul>
                    <li>{{ show.rating.average }}</li>
                    <li v-if="Rating5 !== 0" class="flex flex-row items-center">
                        <img src="/img/UI/star.png" class="w-6" alt="rating star" v-for="star in Rating5" />{{ star }}
                    </li>
                    <li v-else>No rating infos</li>
                </ul>
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

const Rating5 = ref(4)
fromRating10ToRating5(5)

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
}
</script>