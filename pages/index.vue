<template>
  <div class="relative bg-[#090A0B]">
    <nav
      class="flex items-center justify-between bg-zinc-900 sm:bg-opacity-85 backdrop-blur-lg py-4 px-8 bottom-0 fixed w-[100%] z-100 sm:top-0 sm:fixed sm:sticky">
      <!--<div>
        <h1 class="rounded bg-red-600 p-2">WSWWT</h1>
      </div>-->
      <!--<div>
        <h1 class="px-2 font-bold text-red-700 text-4xl">WSWWT</h1>
      </div>-->
      <img src="/img/UI/WSWWT-logo.png" class="h-14" alt="logo" />
      <ul class="flex flex-col flex-wrap items-start sm:flex-row text-white">
        <li class="px-6 flex flex-row items-center">
          <img src="/img/UI/home.png" class="w-6 mr-2" alt="WSWWT" />
          <a href="/">Home</a>
        </li>
        <li v-if="myShowList.length !== 0" class="px-6 flex flex-row items-center">
          <img src="/img/UI/pop-corn.png" class="w-6 mr-1" alt="WSWWT" />
          <a href="/tonight">WSWWTonight</a>
        </li>
        <li class="px-6"><a href="/myList" :showList="myShowList">My List</a></li>
      </ul>
    </nav>
    <div class="flex flex-col items-center justify-center">
      <!--VERSION WITH CINEMA BACKGROUND-->
      <!--<img src="/img/background.jpg" class="w-[100%] max-h-70 relative" alt="background" />-->
      <!--<h1 class="md:w-[90%] mx-6 text-center font-extrabold absolute uppercase text-sm sm:text-5xl">What Should
        We Watch Tonight ?
      </h1>-->
      <!--VERSION WITH WSWWT LOGO-->
      <img src="/img/UI/WSWWT-logo-v2.png" class="w-[500px] max-w-[75%] max-h-80 relative" alt="background" />
      <h1 class="md:w-[90%] sm:mb-12 text-center text-red-600 font-extrabold uppercase text-sm sm:text-2xl">What
        Should
        We Watch Tonight ?
      </h1>
    </div>

    <div class="mb-16 flex flex-col items-center">
      <!-- RESEARCH OF A SERIE-->
      <div class="mb-2 mt-12 px-2 flex flex-col items-center">
        <div class="flex flex-wrap justify-center">
          <div v-for="(genre, index) in genres" :key="index" class="px-1 my-2 flex flex-col">
            <input :class="{ active: genre === activeGenre }" type="radio" id="show" class="hidden" name="filterShow">
            <label for="show"
              class="color-white border rounded-md w-16 h-8 sm:w-18 sm:h-10 flex justify-center items-center hover:rotate-10 duration-200"><button
                type=button @click="filterShow(genre)">{{ genre }}</button></label>
          </div>
        </div>
        <h2 class="mb-1 mt-2 py-2 font-bold text-lg sm:text-3xl color-white">Research ({{ activeGenre }})</h2>
        <input type="text" v-model="userInput"
          class="mb-1 mt-1 h-8 w-48 sm:h-12 sm:w-128 px-8 bg-zinc-800 rounded-2xl text-white hover:border-2 duration-50"
          placeholder="Homeland, Arrow, Berserk..." />
        <!--<div class="flex flex-row items-start">
          <h3 class="mb-1 mt-2 py-2 font-bold text-3xl color-white">{{ shows.length }} results</h3>
        </div>-->
        <div v-if="activeGenre !== 'All'" class="flex flex-row items-start">
          <h3 class="mb-1 mt-2 py-2 font-bold text-lg sm:text-3xl color-white">Filtered by {{ activeGenre }}</h3>
        </div>
        <div>
          <ul class="mb-1 mt-1 font-mono text-xs flex flex-wrap justify-center">
            <!--<ListCard v-for="show in shows" :show="show" />-->
            <ListCard v-for="show in filteredList()" :show="show" @addToList="addToList" />
            <div v-if="userInput && !filteredList().length">
              <h2 class="mb-1 mt-2 py-2 font-bold text-2xl color-white">No result found.</h2>
            </div>
          </ul>
        </div>
      </div>

      <!-- THE LIST OF THE SERIES REGISTERED-->
      <div class="mx-4 my-2 h-80 max-h-80 w-3/4 max-w-xs overflow-y-scroll border-2 px-2 lg:max-w-md bg-white">
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

      <!-- THE SERIE CHOSEN FOR TONIGHT-->
      <MyListCard v-for="show in showSelected" :show="show" @addForSelection="addForSelection" />

      <TonightChoice />
    </div>

    <!-- FOOTER bg-[#0E1A2D] -->
    <footer class="bottom-0 w-[100%] bg-zinc-900 p-4 pt-10 text-white">
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

const route = useRoute()
console.log(route.path)

/*TEST STORE PINIA*/

/*import { useUserShowList } from '~/stores/userList';

const userList = useUserListStore()*/

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
