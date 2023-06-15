<template>
    <!--<div class="mb-2 mt-12 flex flex-col items-center px-2">
        <div class="flex flex-wrap justify-center">
            <div v-for="(genre, index) in genres" :key="index" class="my-2 flex flex-col px-1">
                <input :class="{ active: genre === activeGenre }" type="radio" id="show" class="hidden" name="filterShow" />
                <label for="show"
                    class="color-white sm:w-18 hover:rotate-10 flex h-8 w-16 items-center justify-center rounded-md border duration-200 sm:h-10"><button
                        type="button" @click="filterShow(genre)">{{ genre }}</button></label>
            </div>
        </div>
        <h2 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">Research ({{ activeGenre }})</h2>
        <input type="text" v-model="userInput"
            class="sm:w-128 duration-50 mb-1 mt-1 h-8 w-48 rounded-2xl bg-zinc-800 px-8 text-white hover:border-2 sm:h-12"
            placeholder="Homeland, Arrow, Berserk..." />
        <div v-if="activeGenre !== 'All'" class="flex flex-row items-start">
            <h3 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">Filtered by {{ activeGenre }}</h3>
        </div>
        <div>
            <ul class="mb-1 mt-1 flex flex-wrap justify-center font-mono text-xs">
                <ListCard v-for="show in filteredList()" :show="show" @addToList="addToList" />
                <div v-if="userInput && !filteredList().length">
                    <h2 class="color-white mb-1 mt-2 py-2 text-2xl font-bold">No result found.</h2>
                </div>
            </ul>
        </div>
    </div>-->
</template>