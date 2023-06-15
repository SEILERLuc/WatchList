<template>
  <div class="relative bg-[#090A0B]">
    <!--<nav v-show="showNavbar"
      class="sm:flex-between sm:bg-opacity-85 z-100 fixed bottom-0 flex w-[100%] items-center justify-between bg-zinc-900 py-4 backdrop-blur-lg sm:sticky sm:top-0 sm:px-8">-->
    <!--<nav
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
    </nav>-->
    <AppHeader />
    <!--<div class="flex flex-col items-center justify-center">
      <img src="/img/UI/WSWWT-logo-v2.png" class="relative max-h-80 w-[500px] max-w-[75%]" alt="background" />
      <h1 class="text-center text-sm font-extrabold uppercase text-red-600 mx-4 sm:mb-12 sm:text-2xl md:w-[90%]">What
        Should We
        Watch Tonight ?</h1>
    </div>-->
    <AppTitle />
    <!--<form @click="user.addToList('hi')">
      <input v-model="todo" type="radio" />
    </form>-->

    <div class="mb-16 flex flex-col items-center">
      <!-- RESEARCH OF A SERIE-->
      <div class="mb-2 mt-12 flex flex-col items-center px-2">
        <div class="flex flex-wrap justify-center">
          <div v-for="(genre, index) in genres" :key="index" class="my-2 flex flex-col px-1">
            <input :class="{ active: genre === activeGenre }" type="radio" id="show" class="hidden" name="filterShow" />
            <label for="show"
              class="color-white sm:w-18 hover:rotate-10 flex h-8 w-16 items-center justify-center rounded-md border duration-200 sm:h-10"><button
                type="button" @click="filterShow(genre)">{{ genre }}</button></label>
          </div>
        </div>
        <h2 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">Research ({{ activeGenre }})</h2>
        <input type="text" v-model="userInput"
          class="sm:w-128 duration-50 mb-1 mt-1 h-8 w-48 rounded-2xl bg-zinc-800 px-8 text-white hover:border-2 sm:h-12"
          placeholder="Homeland, Arrow, Berserk..." />
        <div v-if="activeGenre !== 'All'" class="flex flex-row items-start">
          <h3 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">Filtered by {{ activeGenre }}</h3>
        </div>
        <div>
          <ul class="mb-1 mt-1 flex flex-wrap justify-center font-mono text-xs">
            <ListCard v-for="show in filteredList()" :show="show" @addToList="addToList" />
            <div v-if="userInput && !filteredList().length">
              <h2 class="color-white mb-1 mt-2 py-2 text-2xl font-bold">No result found.</h2>
            </div>
          </ul>
        </div>
      </div>

      <!-- THE LIST OF THE SERIES REGISTERED-->
      <!--<div class="mx-4 my-2 h-80 max-h-80 w-3/4 max-w-xs overflow-y-scroll border-2 bg-white px-2 lg:max-w-md">
        <h2 class="mb-1 mt-2 border-b py-2">Ma liste</h2>
        <div>
          <ul class="mb-1 mt-1 font-mono text-xs">
            <MyListCard v-for="show in myShowList" :show="show" />
          </ul>
        </div>
        <div v-if="myShowList.length == 0" class="flex flex-col justify-between font-extrabold">
          <p>Nothing in your list</p>
          <p>Add show to your list by research</p>
        </div>
      </div>

      <MyListCard v-for="show in showSelected" :show="show" @addForSelection="addForSelection" />

      <TonightChoice />-->
    </div>

    <AppAbout />

    <!-- FOOTER bg-[#0E1A2D] -->
    <footer class="bottom-0 w-[100%] bg-zinc-900 p-4 pt-10 text-white mt-24">
      <h2 class="mb-5 flex flex-wrap justify-center text-center font-semibold">Thank you for using this app :</h2>

      <!--TECHNO INFOS-->
      <div class="flex flex-col items-center pt-6">
        <h2 class="mb-2 text-center font-semibold">Created with:</h2>
        <p>Nuxt</p>
        <p>NaiveUI</p>
        <p>TailWind</p>
        <p>🍍 Pinia</p>
      </div>

      <!--INFO-->
      <div class="flex flex-row justify-between pt-6">
        <p>2023</p>
        <p>Created by Luc Seiler</p>
      </div>
    </footer>
  </div>
</template>

<script setup>

/*User Store --> Pinia*/
import { useUserStore } from '~/stores/user'

const user = useUserStore()
console.log(user.name)

/*Get all the shows from the API*/
const search = ref(null)

const { data: shows } = await useAsyncData(
  'shows',
  () => $fetch(`/shows`, {
    method: 'GET',
    baseURL: 'https://api.tvmaze.com',
    params: {
      search: search.value,
    }
  }), {
  watch: [
    search
  ]
}
)

//console.log(shows.value[0].name)

/*Code for user interactions : research, filter*/
let userInput = ref("")
const genres = ref(['All', 'Horror', 'Comedy', 'Drama', 'Action', 'Crime', 'Music'])
const activeGenre = ref('All')

function filteredList() {
  /*if (userInput.value == "") {
    userInput.value = null
  }*/
  //shows.value = filterShow(genre)
  let tmp = shows.value

  if (activeGenre.value !== 'All') {
    tmp = tmp.filter((show) => show.genres.includes(activeGenre.value))
  }
  else if (userInput.value !== null) {
    return shows.value.filter((show) =>
      show.name.toLowerCase().includes(userInput.value.toLowerCase())
    )
  }
  return tmp.filter((show) =>
    show.name.toLowerCase().includes(userInput.value.toLowerCase())
  )
}

function filterShow(genre) {
  activeGenre.value = genre
  console.log("Filtre appliqué, genre = ", genre)
  return activeGenre.value
}

const myShowList = ref([])

function addToList(show) {
  console.log("=== Ajout de la série dans la liste ===")
  //console.log(show)
  if (myShowList.value.includes(show)) {
    console.log("This show is already in the list")
  } else {
    myShowList.value.unshift(show)

  }
  console.log(myShowList.value)
}

const showSelected = ref([])

function addForSelection(show) {
  console.log("=== SHOW SELECTED FOR TONIGHT ===")
  showSelected.value.push(show)
}

</script>
