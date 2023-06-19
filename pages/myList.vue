<template>
    <div class="relative bg-[#090A0B]">
        <AppHeader />

        <!--ABOUT : THE USER LIST-->
        <div v-show="user.showList.length !== 0" class="flex flex-col items-center justify-center">
            <img src="/img/UI/WSWWT-logo-v2.png" class="mb-6 relative max-h-80 w-[150px] max-w-[75%]" alt="background" />
            <h1 class="text-center text-sm font-extrabold uppercase text-red-600 mx-4 sm:mb-12 sm:text-2xl md:w-[90%]">
                Your list
            </h1>
            <div class="text-white text-md px-10 sm:px-12 sm:max-w-6xl sm:text-xl">
                <p class="text-justify sm:text-center my-2">
                    This is your list. You can delete a show, or delete ALL with the button.
                </p>
            </div>
            <div class="bg-[#DC2626] rounded-full px-4 py-2 mt-6">
                <n-button @click="showModal = true" class="text-white border-0">
                    Clear the list
                </n-button>
            </div>
        </div>
        <n-modal v-model:show="showModal" preset="dialog" title="Dialog" content="Are you sure to clear the list?"
            positive-text="Clear" negative-text="Cancel" @positive-click="submitCallback" @negative-click="cancelCallback"
            class="bg-zinc-900 text-white" />

        <!-- THE LIST OF THE SERIES REGISTERED-->
        <div class="mb-16 flex flex-col items-center">
            <ul class="mb-1 mt-10 flex flex-wrap justify-center font-mono text-xs max-w-7xl">
                <UserShowList />
            </ul>
            <h2 v-show="user.showList.length === 0" class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">
                Nothing in your list.<br> Return to home to add shows in your wachlist !
            </h2>
        </div>

        <AppFooter />
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const user = useUserStore()

const message = useMessage()
const showModal = ref(false)

function cancelCallback() {
    message.success('List saved')
}
function submitCallback() {
    user.clearList()
    message.success('List cleared')
}


</script>

<style>
.n-dialog__title {
    color: white !important;
}
</style>