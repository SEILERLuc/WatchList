<template>
  <div class="relative lg:pb-40 bg-[#090A0B]">
    <nav
      class="flex items-center justify-between bg-zinc-900 p-4 bottom-0 fixed w-[100%] z-100 sm:top-0 sm:fixed sm:sticky">
      <div>
        <h1 class="rounded bg-red-600 p-2">WSWWT</h1>
      </div>
      <ul class="flex flex-col flex-wrap items-start sm:flex-row text-white">
        <li class="px-6"><a href="/home">Home</a></li>
        <li class="px-6"><a href="/myList" :showList="myShowList">My List</a></li>
        <li class="px-6"><a href="/tonight">WSWWTonight</a></li>
        <li class="px-6"><a href="/about">About</a></li>
      </ul>
    </nav>
    <!--/img/characters/lui-kang.png-->
    <div class="flex flex-col items-center justify-center">
      <img src="/img/background.jpg" class="w-[100%] max-h-sm relative" alt="background" />
      <h1 class="md:w-[90%] mx-6 text-center font-extrabold absolute uppercase text-sm sm:text-5xl">What Should
        We Watch Tonight ?
      </h1>
    </div>

    <div class="mb-16 flex flex-col items-center">
      <!-- RESEARCH OF A SERIE-->
      <div class="mb-2 mt-12 px-2 flex flex-col items-center">
        <div class="flex flex-wrap justify-center">
          <div v-for="(genre, index) in genres" :key="index" class="px-1 my-2 flex flex-col">
            <input @click="filterShow(genre)" :class="{ checked: genre === activeFilter }" class="" type="radio" id="show"
              name="filterShow" :value="genre">
            <label for="show" class="color-white border w-16 h-8 flex justify-center items-center">{{ genre }}</label>
          </div>
        </div>
        <!--<div class="w-64 h-64 bg-red-100 relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('/img/characters/scorpion.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
            Dwayne</div>
        </div>-->
        <!--<ul class="mb-1 mt-1 font-mono text-xs flex flex-wrap justify-center">
          <ListCard v-for="show in filteredByGenres('Comedy')" :show="show" />
        </ul>-->
        <h2 class="mb-1 mt-2 py-2 font-bold text-3xl color-white">Research</h2>
        <input type="text" v-model="userInput"
          class="mb-1 mt-1 h-8 w-48 sm:h-12 sm:w-128 px-8 bg-zinc-800 rounded-2xl text-white hover:border-2 duration-50"
          placeholder="Research a show..." />
        <div>
          <ul class="mb-1 mt-1 font-mono text-xs flex flex-wrap justify-center">
            <!--<ListCard v-for="show in shows" :show="show" />-->
            <ListCard v-for="show in filteredList()" :show="show" @addToList="addToList" />
            <div v-if="userInput && !filteredList().length">
              <p>No results found!</p>
            </div>
          </ul>
        </div>
      </div>

      <!-- THE LIST OF THE SERIES REGISTERED-->
      <div class="mx-4 my-2 h-80 max-h-80 w-3/4 max-w-xs overflow-y-scroll border-2 px-2 lg:max-w-md bg-white">
        <h2 class="mb-1 mt-2 border-b py-2">Ma liste</h2>
        <div>
          <!--<ul class="mb-1 mt-1 font-mono text-xs">
            <li class="mb-1 flex flex-row items-center justify-between border-y-2 py-2">
              <div class="flex flex-row">
                <img src="/img/characters/lui-kang.png" class="w-16 border px-1" alt="name" />
                <div>
                  <ul class="px-4">
                    <li>Breaking Bad</li>
                    <li>45 min</li>
                    <li>7.5</li>
                    <li>2010</li>
                  </ul>
                </div>
              </div>
              <userInput type="checkbox" class="w-max" />
            </li>
            <li class="mb-1 flex flex-row items-center justify-between border-y-2 py-2">
              <div class="flex flex-row">
                <img src="/img/characters/lui-kang.png" class="w-16 border px-1" alt="name" />
                <div>
                  <ul class="px-4">
                    <li>Breaking Bad</li>
                    <li>45 min</li>
                    <li>7.5</li>
                    <li>2010</li>
                  </ul>
                </div>
              </div>
              <userInput type="checkbox" class="w-max" />
            </li>
            <li class="mb-1 flex flex-row items-center justify-between border-y-2 py-2">
              <div class="flex flex-row">
                <img src="/img/characters/lui-kang.png" class="w-16 border px-1" alt="name" />
                <div>
                  <ul class="px-4">
                    <li>Breaking Bad</li>
                    <li>45 min</li>
                    <li>7.5</li>
                    <li>2010</li>
                  </ul>
                </div>
              </div>
              <userInput type="checkbox" class="w-max" />
            </li>
          </ul>-->
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
      <!--<div class="mx-4 my-2 max-h-80 w-3/4 max-w-xs overflow-y-scroll border-2 px-2 lg:max-w-2xl">
        <h2 class="mb-1 mt-2 border-b py-2">Je vais regarder quoi ce soir ?</h2>
        <div>
          <ul class="mb-1 mt-1 font-mono text-xs">
            <li class="mb-1 flex flex-col items-center justify-between border-y-2 py-2">
              <div class="my-4 flex flex-row items-start justify-between">
                <img src="/img/characters/lui-kang.png" class="w-24 border px-1" alt="name" />
                <div class="flex flex-col">
                  <ul class="mb-4 px-4">
                    <li>Breaking Bad</li>
                    <li>45 min</li>
                    <li>7.5</li>
                    <li>2010</li>
                  </ul>
                </div>
              </div>
              <div class="p-2">
                <p>Add more information regarding the series (like a summary) which could be displayed by clicking on a «
                  More information » button. • Add sorting options to the « My List » section that allow users to sort
                  series by rating, year, alphabetical order. • Add a filter to the « My List » section to display only
                  series within a given runtime: Short (25min), Medium (25-50min), Long (>50min)</p>
                <p>Add more information regarding the series (like a summary) which could be displayed by clicking on a «
                  More information » button. • Add sorting options to the « My List » section that allow users to sort
                  series by rating, year, alphabetical order. • Add a filter to the « My List » section to display only
                  series within a given runtime: Short (25min), Medium (25-50min), Long (>50min)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>-->
    </div>

    <!-- FOOTER -->
    <footer class="bottom-0 h-40 w-[100%] bg-[#0E1A2D] p-4 pt-10 text-white">
      <h2 class="mb-8 flex flex-wrap justify-center text-center font-semibold">Thank you for using this app :</h2>

      <!--INFO-->
      <div class="flex flex-row justify-between pt-6">
        <p>2023</p>
        <p>Créé par Luc Seiler</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const search = ref(null)

const { data: shows, error } = await useAsyncData(
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

//let userInput = ref(null)

let userInput = ref("")
//const filters = ref(['All', '60+', '-60'])
const genres = ref(['All', 'Horror', 'Comedy', 'Drama', 'Action', 'Crime'])
const activeFilter = ref('All')

function filteredList() {
  /*if (userInput.value == "") {
    userInput.value = null
  }*/
  //shows.value = filterShow(genre)
  if (userInput.value !== null) {
    return shows.value.filter((show) =>
      show.name.toLowerCase().includes(userInput.value.toLowerCase())
    );
  }
}

function filterShow(genre) {
  let showFilter = []
  console.log(genre)
  activeFilter.value = genre
  if (activeFilter.value === 'All') {
    console.log(shows.value)
    return shows.value
  } else {
    console.log(shows.value.filter((show) =>
      show.genres.includes(genre)
    ))
    return shows.value.filter((show) =>
      show.genres.includes(genre)
    );
  }
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
