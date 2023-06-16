<template>
    <nav
        class="sm:flex-between sm:bg-opacity-85 z-100 fixed bottom-0 flex w-[100%] items-center justify-between bg-zinc-900 py-1 sm:py-4 backdrop-blur-lg sm:sticky sm:top-0 sm:px-8">
        <img src="/img/UI/WSWWT-logo.png" class="hidden h-14 sm:block" alt="logo" />
        <!--LIST OF PAGES LINKS-->
        <ul class="flex w-[100%] flex-row items-center justify-around text-white sm:justify-end">
            <!--LINK: HOME-->
            <NuxtLink to="/" class="px-6 hover:-translate-y-2 duration-300 w-24">
                <div class="flex flex-col items-center">
                    <img src="/img/UI/home.png" class="w-6" alt="WSWWT" />
                    <h4 class="hidden sm:block">Home</h4>
                </div>
            </NuxtLink>
            <!--LINK: RANDOM CHOICE FOR TONIGHT-->
            <NuxtLink to="/tonight" v-show="user.showList.length !== 0" class="px-6 hover:-translate-y-2 duration-300 w-24">
                <div class="flex flex-col items-center">
                    <img src="/img/UI/pop-corn.png" class="w-6" alt="WSWWT" />
                    <h4 class="hidden sm:block">WSWWT</h4>
                </div>
            </NuxtLink>
            <!--LINK: MY LIST-->
            <NuxtLink to="myList" class="relative px-6 hover:-translate-y-2 duration-300 w-24">
                <div class="flex flex-col items-center">
                    <img src="/img/UI/pop-corn.png" class="w-6 sm:mb-1 sm:mb-0" alt="WSWWT" />
                    <div class="flex flex-col items-center">
                        <h4 class="hidden sm:block mb-1">My List</h4>
                        <p v-show="user.showList.length > 0"
                            class="sm:absolute sm:top-0 sm:right-0 sm:mr-2 bg-red text-xs rounded-full text-white px-2">
                            {{ user.showList.length }}
                        </p>
                    </div>
                </div>
            </NuxtLink>
        </ul>
    </nav>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const user = useUserStore()
</script>