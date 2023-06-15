<template>
    <div class="relative bg-[#090A0B] h-screen">
        <AppHeader />
        <!-- THE LIST OF THE SERIES REGISTERED-->
        <div class="mb-16 flex flex-col items-center">
            <ul class="mb-1 mt-10 flex flex-wrap justify-center font-mono text-xs">
                <UserShowCard />
            </ul>
            <h2 v-if="user.showList.length === 0" class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">
                Nothing in your list.<br> Return to home to add shows in your wachlist !
            </h2>
        </div>
    </div>
</template>

<script setup>

import { useUserStore } from '~/stores/user'

const user = useUserStore()

console.log(user)

//console.log(myShowList)

</script>