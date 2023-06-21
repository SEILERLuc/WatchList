<template>
  <div class="relative bg-[#090A0B] min-h-screen">
    <AppHeader />
    <AppTitle />

    <!--PAGE CONTENT : LIST OF SHOWS AND SEARCHBAR/FILTERS-->
    <div class="mb-16 flex flex-col items-center">
      <!--LIST OF THE SHOWS-->
      <div class="mb-2 mt-12 flex flex-col items-center px-2">
        <!--FILTER BAR-->
        <div class="flex flex-wrap justify-center">
          <div v-for="(genre, index) in genres" :key="index" class="my-2 flex flex-col px-1">
            <input :class="{ active: genre === activeGenre }" type="radio" id="show" class="hidden" name="filterShow" />
            <label for="show"
              class="color-white sm:w-18 hover:rotate-10 flex h-8 w-16 items-center justify-center rounded-md border duration-200 sm:h-10"><button
                type="button" @click="filterShow(genre)">{{ genre }}</button></label>
          </div>
        </div>
        <!--SEARCH BAR-->
        <div class="flex flex-col items-center justify-center">
          <h2 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">Research ({{ activeGenre }})</h2>
          <a href="#about-anchor">
            <div class="flex flex-col items-center my-6">
              <img src="/img/UI/about.png" class="w-8 mb-2" alt="WSWWT" />
            </div>
          </a>
          <input type="text" v-model="userInput"
            class="sm:w-128 duration-50 mb-1 mt-1 h-8 w-48 rounded-2xl bg-zinc-800 px-8 text-white hover:border-1 sm:h-12"
            placeholder="Homeland, Arrow, Berserk..." />
        </div>
        <div v-if="activeGenre !== 'All'" class="flex flex-row items-start">
          <h3 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">Filtered by {{ activeGenre }}</h3>
        </div>
        <div>
          <!--CARD LIST OF THE SHOWS-->
          <ul class="mb-1 mt-1 flex flex-wrap justify-center font-mono text-xs max-w-7xl">
            <!--<ListCard v-for="show in filteredList()" :show="show" @addToList="addToList" />
            <div v-if="userInput && !filteredList().length">
              <h2 class="color-white mb-1 mt-2 py-2 text-2xl font-bold">No result found.</h2>
            </div>-->
            <ListCard v-for="show in filteredList()" :show="show" />
            <div v-if="userInput && !filteredList().length">
              <h2 class="color-white mb-1 mt-2 py-2 text-2xl font-bold">No result found.</h2>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div id="about-anchor" class="sm:mb-24"></div>
    <AppAbout />
    <AppFooter />
  </div>
</template>

<script setup>
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
</script>
