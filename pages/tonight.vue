<template>
    <div class="relative bg-[#090A0B] min-h-screen">
        <AppHeader />

        <!--ABOUT : THE USER LIST-->
        <div class="sm:mt-10 flex flex-col items-center justify-center">
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
            <button type="button" class="text-white bg-red hover:rotate-180 duration-400"
                @click="randomChoice = user.chooseShow()">
                <img src="img/UI/change-button.png" class="w-12 sm:w-max" alt="change" />
            </button>
            <h3 class="text-white">Restart the choice</h3>
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