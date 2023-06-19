<template>
    <li v-for="show in user.showList"
        class="max-w-24 sm:max-w-32 m-1.5 pb-2 bg-zinc-800 bg-opacity-50 rounded-2xl hover:-translate-y-2 duration-300">
        <div class="hover:font-bold duration-100">
            <img v-if="show.image !== null" :src="show.image.original"
                class="mb-2 h-32 w-22 sm:h-44 sm:w-32 cursor-pointer rounded-md duration-300 hover:scale-105 hover:opacity-25"
                alt="name" />
            <div class="px-2 flex flex-row justify-between">
                <h3 class="hidden sm:block dark:text-zinc-400 sm:text-sm text-white">{{ show.name }}</h3>
                <button v-show="user.isAlreadyInList(show.id)" @click="user.deleteFromList(show.id)"
                    class="h-5 w-5 bg-red-100 px-2 disabled:text-yellow-400 border-1 hover:scale-95 duration-100 text-white flex items-center justify-center rounded-full"
                    type="button">
                    -
                </button>
            </div>
        </div>
    </li>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const user = useUserStore()
</script>