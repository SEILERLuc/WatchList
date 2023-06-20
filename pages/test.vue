<template>
    <div class="relative bg-[#090A0B] min-h-screen">
        <AppTitle />

        <div class="flex flex-wrap justify-center">
            <div v-for="(genre, index) in genres" :key="index" class="my-2 flex flex-col px-1">
                <input :class="{ active: genre === activeGenre }" type="radio" id="show" class="hidden" name="filterShow" />
                <label for="show"
                    class="color-white sm:w-18 hover:rotate-10 flex h-8 w-16 items-center justify-center rounded-md border duration-200 sm:h-10"><button
                        type="button" @click="filterShow(genre)">{{ genre }}</button></label>
            </div>
        </div>
        <!--SEARCH BAR-->
        <div class="flex flex-col items-center justify-center">
            <h2 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">Research ({{ activeGenre }})</h2>
            <input type="text" v-model="userInput"
                class="sm:w-128 duration-50 mb-1 mt-1 h-8 w-48 rounded-2xl bg-zinc-800 px-8 text-white hover:border-2 sm:h-12"
                placeholder="Homeland, Arrow, Berserk..." />
        </div>
        <div v-if="activeGenre !== 'All'" class="flex flex-row items-start">
            <h3 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">Filtered by {{ activeGenre }}</h3>
        </div>
        <div class="flex flex-col items-center mb-8">
            <n-input @update:value="debounce(searchByName, 500)" class="text-white" v-model:value="search" type="text"
                placeholder="Flash, Homeland, Arrow..." />
        </div>
        <div v-show="shows.length !== 0" class="flex flex-col items-center">
            <ul class="mb-8 mt-1 flex flex-wrap justify-center font-mono text-xs max-w-7xl">
                <ListCard v-for="show in shows" :show="show" />
            </ul>
        </div>
        <div class="flex flex-col items-center">
            <div v-if="search && shows.length === 0">
                <h2 class="color-white mb-1 mt-2 py-2 text-2xl font-bold">No result found.</h2>
            </div>
        </div>

        <AppAbout />
        <AppFooter />
    </div>
</template>

<script setup>
import { debounce } from '~/composables/utils'

const search = ref(null)
const shows = ref([])







//console.log(shows.value[0].name)
let userInput = ref("")
const genres = ref(['All', 'Horror', 'Comedy', 'Drama', 'Action', 'Crime', 'Music'])
const activeGenre = ref('All')

function filteredList() {
    let tmp = shows.value

    if (activeGenre.value !== 'All') {
        tmp = tmp.filter((show) => show.genres.includes(activeGenre.value))
    }
    else if (userInput.value !== null) {
        return shows.value.filter((show) =>
            show.name.toLowerCase().includes(userInput.value.toLowerCase())
        )
    }
    return tmp.filter((show) =>
        show.name.toLowerCase().includes(userInput.value.toLowerCase())
    )
}

function filterShow(genre) {
    activeGenre.value = genre
    console.log("Filtre appliqué, genre = ", genre)
    return activeGenre.value
}


async function searchByName() {
    if (search.value === '') {
        shows.value = []
        return
    }
    shows.value = []
    const response = await useAsyncData(
        'shows',
        () => $fetch('https://api.tvmaze.com/search/shows', {
            params: { q: search.value }
        }),
    )

    //console.log("RESPONSE", response.data.value)
    for (var i = 0; i < response.data.value.length; i++) {
        //console.log(response.data.value[i])
        shows.value.push(response.data.value[i].show)
    }
    if (activeGenre.value !== 'All') {
        console.log("Filtrage nécessaire !")
        filter(shows.value)
    }
    //shows.value = response.data.value
    //console.log("RESULTS", shows.value)
}

function filter(showList) {
    console.log("Liste à filtrer ==>", showList)
    let tmp = []
    for (var i = 0; i < showList.length; i++) {
        console.log(showList[i].genres)
        if (showList[i].genres.includes(activeGenre.value)) {
            console.log("ok")
            tmp.push(showList[i])
        }
    }
    console.log("Liste filtrée", tmp)
    shows.value = tmp
    console.log(shows.value)
}
















</script>

<style>
.n-input {
    border: none !important;
    color: red !important;
    padding: 0 !important;
    width: 30% !important;
    height: 40px !important;
    background-color: #27272A !important;
}
</style>