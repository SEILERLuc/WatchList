<template>
    <div class="relative bg-[#090A0B] min-h-screen">
        <AppHeader />

        <!--ABOUT : THE USER LIST-->
        <div class="sm:mt-10 flex flex-col items-center justify-center">
            <img src="/img/UI/WSWWT-logo-v2.png" class="my-6 relative max-h-80 w-[150px] max-w-[75%]" alt="background" />
            <img src="/img/UI/cinema.png" class="w-32 sm:w-48 mt-4 mb-10" alt="cinema" />

            <h1 class="text-center text-sm font-extrabold uppercase text-red-600 mx-4 mb-6 sm:mb-12 sm:text-2xl md:w-[90%]">
                You should watch this for tonight !
            </h1>
        </div>
        <!-- THE LIST OF THE SERIES REGISTERED-->
        <div class="mb-16 flex flex-col items-center">
            <TonightChoiceCard v-if="user.showList.length !== 0" :show="user.showList[randomChoice]" />
        </div>

        <div class="text-lg flex flex-col items-center mb-8">
            <button type="button" class="text-white bg-red hover:rotate-180 duration-400"
                @click="randomChoice = user.chooseShow(), changeMessage()">
                <img src="img/UI/change-button.png" class="w-12 sm:w-max" alt="change" />
            </button>
            <h3 class="text-white">Restart the choice</h3>
        </div>

        <div class="flex flex-col items-center justify-center">
            <div
                class="mt-2 mb-12 flex flex-col items-center text-white text-md px-10 max-w-[350px] sm:px-12 sm:max-w-xl sm:text-xl">
                <AboutWSWWT />
            </div>
        </div>

        <AppFooter />
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const user = useUserStore()
const randomChoice = ref(null)
const message = useMessage()

randomChoice.value = user.chooseShow()

function changeMessage() {
    message.success("Other show selected !")
}

</script>