<template>
    <div class="relative bg-[#090A0B] min-h-screen">
        <AppHeader />
        <!--ABOUT : THE USER LIST-->
        <div class="sm:mt-10 flex flex-col items-center justify-center">
            <img src="/img/UI/WSWWT-logo-v2.png" class="my-6 relative max-h-80 w-[150px] max-w-[75%]" alt="background" />
            <h1 class="text-center text-sm font-extrabold uppercase text-red-600 mx-4 sm:mb-12 sm:text-2xl md:w-[90%]">
                My list
            </h1>
            <div v-if="user.showList.length !== 0" class="mt-6">
                <button @click="showModal = true" class="text-white border-0" type="button">
                    <div
                        class="flex flex-row items-center justify-center bg-zinc-700 p-2 rounded-lg hover:scale-90 duration-200">
                        <img src="/img/UI/clear-button.png" class="mr-2 w-10" alt="clear list" />
                        <h3>Clear the list</h3>
                    </div>
                </button>
            </div>
        </div>
        <n-modal v-model:show="showModal" preset="dialog" title="Dialog" content="Are you sure to clear the list?"
            positive-text="Clear" negative-text="Cancel" @positive-click="submitCallback" @negative-click="cancelCallback"
            class="bg-zinc-900 text-white" />

        <!-- THE LIST OF THE SERIES REGISTERED-->
        <div v-show="user.showList.length !== 0" class="mb-16 flex flex-col items-center">
            <ul class="mb-12 mt-10 flex flex-wrap justify-center font-mono text-xs max-w-7xl">
                <ListCard v-for="show in user.showList" :show="show" />
            </ul>
        </div>
        <div v-show="user.showList.length === 0" class="my-12 flex flex-col items-center">
            <h2 class="color-white text-center mb-1 mt-2 py-2 text-md font-bold sm:text-3xl">
                Nothing in your list.<br> Return to home to add shows in your wachlist !
            </h2>
        </div>

        <div class="flex flex-col items-center justify-center">
            <div
                class="mt-2 mb-12 flex flex-col items-center text-white text-md px-10 max-w-[350px] sm:px-12 sm:max-w-xl sm:text-xl">
                <AboutMylist />
            </div>
        </div>

        <AppFooter />
    </div>
</template>

<script setup>
import AboutMylist from '~/components/AboutMylist.vue';
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

<!--<style lang="scss" scoped>-->
<style>
.n-button {
    border: none !important;
}

.n-dialog__title {
    color: white !important;
}
</style>