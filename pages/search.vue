<template>
    <div class="relative bg-[#090A0B] min-h-screen">
        <AppHeader />
        <AppTitle />

        <div class="flex flex-col items-center mb-8">
            <h2 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">Research a show</h2>
            <n-input @update:value="debounce(searchByName, 500)" class="text-white" v-model:value="search" type="text"
                placeholder="Flash, Homeland, Arrow..." />
        </div>
        <div v-show="shows.length !== 0" class="flex flex-col items-center">
            <ul class="mb-8 mt-1 flex flex-wrap justify-center font-mono text-xs max-w-7xl">
                <ListCard v-for="show in shows" :show="show" />
                <!--<li v-for="show in shows" class="max-w-80 sm:max-w-80 m-1.5 pb-2 bg-zinc-800 bg-opacity-50 rounded-2xl">
                    {{ show.name }}
                    <div class="hover:font-bold hover:text-red-600 duration-100">
                        <img v-if="show.image !== null" :src="show.image.original"
                            class="mb-2 h-32 w-22 sm:h-44 sm:w-32 cursor-pointer rounded-md duration-300 hover:scale-105 hover:opacity-25"
                            alt="name" />
                        <img v-else src="/img/UI/no-image.png"
                            class="mb-2 h-32 w-22 sm:h-44 sm:w-32 cursor-pointer rounded-md duration-300 hover:scale-105 hover:opacity-25"
                            alt="name" />
                        <div class="px-2 flex flex-row justify-between">
                            <h3 class="hidden sm:block dark:text-zinc-400 sm:text-sm text-white">{{ show.name }}</h3>
                            <h3 v-show="shows.length === 0"
                                class="hidden sm:block dark:text-zinc-400 sm:text-sm text-white">{{ show.name }}</h3>
                        </div>
                        <n-button v-show="!user.isAlreadyInList(show.id)" @click="user.addToList(show)"
                            class="h-5 w-5 px-2 disabled:text-yellow-400 border-1 hover:scale-95 duration-100 text-white flex items-center justify-center rounded-full">
                            +
                        </n-button>
                        <button v-show="user.isAlreadyInList(show.id)" @click="user.deleteFromList(show.id)"
                            class="h-5 w-5 px-2 disabled:text-yellow-400 border-1 border-red hover:scale-95 duration-100 text-red text-2xl flex items-center justify-center rounded-full"
                            type="button">-</button>
                    </div>
                </li>-->
            </ul>
        </div>
        <div class="flex flex-col items-center">
            <div v-if="search && shows.length === 0">
                <h2 class="color-white mb-1 mt-2 py-2 text-2xl font-bold">No result found.</h2>
            </div>
        </div>
        <!--<pre v-for="show in shows">{{ show.name }}, {{ show.id }}</pre>-->

        <div class="flex flex-col items-center justify-center">
            <div
                class="mt-2 mb-12 flex flex-col items-center text-white text-md px-10 max-w-[350px] sm:px-12 sm:max-w-xl sm:text-xl">
                <AboutResearch />
            </div>
        </div>

        <AppFooter />
    </div>
</template>

<script setup>
import { debounce } from '~/composables/utils'

const search = ref(null)
const shows = ref([])

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
    //shows.value = response.data.value
    //console.log("RESULTS", shows.value)
}
</script>

<style>
.n-input {
    border: none !important;
    color: red !important;
    padding: 0 !important;
    width: 70% !important;
    height: 40px !important;
    background-color: #27272A !important;
}

@media screen and (min-width: 640px) {
    .n-input {
        width: 400px !important;
    }
}
</style>