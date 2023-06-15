<template>
    <nav
        class="sm:flex-between sm:bg-opacity-85 z-100 fixed bottom-0 flex w-[100%] items-center justify-between bg-zinc-900 py-4 backdrop-blur-lg sm:sticky sm:top-0 sm:px-8">
        <img src="/img/UI/WSWWT-logo.png" class="hidden h-14 sm:block" alt="logo" />
        <ul class="flex w-[100%] flex-row items-center justify-around text-white sm:justify-end">
            <li class="px-6">
                <a href="/" class="flex flex-col items-center">
                    <img src="/img/UI/home.png" class="w-6" alt="WSWWT" />
                    <h4 class="hidden sm:block">Home</h4>
                </a>
            </li>
            <li v-if="user.showList.length !== 0" class="flex flex-row items-center px-6">
                <a href="/tonight" class="flex flex-col items-center">
                    <img src="/img/UI/pop-corn.png" class="w-6" alt="WSWWT" />
                    <h4 class="hidden sm:block">WSWWT</h4>
                </a>
            </li>
            <li class="flex flex-col items-center px-6">
                <a href="/myList" class="flex flex-col items-center">
                    <img src="/img/UI/pop-corn.png" class="w-6" alt="WSWWT" />
                    <div class="flex flex-row">
                        <h4 class="hidden sm:block">My List</h4>
                        <p v-if="user.showList.length > 0" class="bg-red text-xs rounded-full text-white px-2 mx-1">
                            {{ user.showList.length }}
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const user = useUserStore()
</script>