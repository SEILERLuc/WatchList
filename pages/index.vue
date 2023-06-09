<template>
  <div class="relative lg:pb-40">
    <nav class="flex items-start justify-between bg-slate-500 p-4">
      <div>
        <h1 class="rounded bg-emerald-400 p-2">WSWW</h1>
      </div>
      <ul class="flex flex-col flex-wrap items-start sm:flex-row">
        <li class="px-2"><a href="default.asp">Home</a></li>
        <li class="px-2"><a href="news.asp">News</a></li>
        <li class="px-2"><a href="contact.asp">Contact</a></li>
        <li class="px-2"><a href="about.asp">About</a></li>
      </ul>
    </nav>
    <!--/img/characters/lui-kang.png-->
    <h1 class="m-8 text-center font-extrabold">What Should We Watch ?</h1>

    <div class="mb-16 flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center">
      <!-- RESEARCH OF A SERIE-->
      <div class="mx-4 my-2 h-80 w-3/4 max-w-xs overflow-y-scroll border-2 px-2 lg:max-w-md">
        <h2 class="mb-1 mt-2 border-b py-2">Rechercher</h2>
        <input type="text" v-model="input" class="mb-1 mt-1 w-max border-2 px-4" placeholder="Search your character..." />
        <div>
          <ul class="mb-1 mt-1 font-mono text-xs">
            <!--<ListCard v-for="show in shows" :show="show" />-->
            <ListCard v-for="show in filteredList()" :show="show" />
            <div v-if="input && !filteredList().length">
              <p>No results found!</p>
            </div>
          </ul>
        </div>
      </div>

      <!-- THE LIST OF THE SERIES REGISTERED-->
      <div class="mx-4 my-2 max-h-80 w-3/4 max-w-xs overflow-y-scroll border-2 px-2 lg:max-w-md">
        <h2 class="mb-1 mt-2 border-b py-2">Ma liste</h2>
        <div>
          <ul class="mb-1 mt-1 font-mono text-xs">
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
              <input type="checkbox" class="w-max" />
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
              <input type="checkbox" class="w-max" />
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
              <input type="checkbox" class="w-max" />
            </li>
          </ul>
        </div>
      </div>

      <!-- THE SERIE CHOOSEN FOR TONIGHT-->
      <div class="mx-4 my-2 max-h-80 w-3/4 max-w-xs overflow-y-scroll border-2 px-2 lg:max-w-2xl">
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
      </div>
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
const search = ref('');

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
);

let input = ref("");

function filteredList() {
  return shows.value.filter((show) =>
    show.name.toLowerCase().includes(input.value.toLowerCase())
  );
}

console.log(shows.value[0].name)
</script>