<template>
    <div class="relative bg-[#090A0B]">
        <AppHeader />

        <!--ABOUT : THE USER LIST-->
        <div class="mt-10 flex flex-col items-center justify-center">
            <img src="/img/UI/WSWWT-logo-v2.png" class="mb-6 relative max-h-80 w-[150px] max-w-[75%]" alt="background" />
            <h1 class="text-center text-sm font-extrabold uppercase text-red-600 mx-4 sm:mb-12 sm:text-2xl md:w-[90%]">
                You should watch this tonight !
            </h1>
        </div>
        <!-- THE LIST OF THE SERIES REGISTERED-->
        <div class="mb-16 flex flex-col items-center">
            <TonightChoiceCard v-if="user.showList.length !== 0" :show="user.showList[randomChoice]" />
        </div>

        <div class="text-lg flex flex-col items-center">
            <button type="button" class="text-white bg-red" @click="randomChoice = user.chooseShow()">Change</button>
            <div class="text-lg text-white">
                <p>The app chosen a show for you randomly from your list.</p>
            </div>
        </div>

        <AppFooter />
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const user = useUserStore()

const randomChoice = ref(null)
randomChoice.value = user.chooseShow()
</script>