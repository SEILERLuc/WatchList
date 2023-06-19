<template>
    <div>
        <div class="flex flex-col items-center justify-center">
            <h2 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl"></h2>
            <input type="text" v-model="userInput"
                class="sm:w-128 duration-50 mb-1 mt-1 h-8 w-48 rounded-2xl bg-zinc-800 px-8 text-white hover:border-2 sm:h-12"
                placeholder="Homeland, Arrow, Berserk..." />
        </div>
        <ListCard v-for="show in filteredList()" :show="show" />
        <div v-if="userInput && !filteredList().length">
            <h2 class="color-white mb-1 mt-2 py-2 text-2xl font-bold">No result found.</h2>
        </div>
        <div class="relative bg-[#090A0B] text-white">
            {{ showsList }}
        </div>
        <div class="relative bg-[#090A0B] text-white">
            {{ test }}
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
const message = useMessage()
message.info('TEST')

const showsList = ref([])
const test = ref([])

/*const q = ref("boys")

const { data: shows } = await useAsyncData(
    'shows',
    () => $fetch('https://api.tvmaze.com/search/shows', {
        params: {
            q: q.value
        }
    }), {
    watch: [q]
}
)
console.log(shows)*/
const q = ref("")
let userInput = ref("")

async function filteredList() {
    const { data: shows } = await useAsyncData(
        'shows',
        () => $fetch('https://api.tvmaze.com/search/shows', {
            params: {
                q: userInput.value
            }
        }), {
        watch: [q]
    }
    )
    console.log(shows.value)
    test.value = shows.value
    return shows.value
}

</script>
