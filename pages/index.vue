<template>
  <div>
    <AppTitle />

    <div class="flex flex-col items-center mb-8">
      <h2 class="color-white mb-1 mt-2 py-2 text-lg font-bold sm:text-3xl">
        Research a show
      </h2>
      <n-input
        @update:value="debounce(searchByName, 500)"
        class="text-white"
        v-model:value="search"
        type="text"
        placeholder="Flash, Homeland, Arrow..."
      />
    </div>
    <div v-show="shows.length !== 0" class="flex flex-col items-center">
      <ul
        class="mb-8 mt-1 flex flex-wrap justify-center font-mono text-xs max-w-7xl"
      >
        <ListCard v-for="show in shows" :show="show" />
      </ul>
    </div>
    <div class="flex flex-col items-center">
      <div v-if="search && shows.length === 0">
        <h2 class="color-white mb-1 mt-2 py-2 text-2xl font-bold">
          No result found.
        </h2>
      </div>
    </div>
    <!--<pre v-for="show in shows">{{ show.name }}, {{ show.id }}</pre>-->
    <div id="about-anchor" class="flex flex-col items-center justify-center">
      <div
        class="mt-2 mb-12 flex flex-col items-center text-white text-md px-10 max-w-[350px] sm:px-12 sm:max-w-xl sm:text-xl"
      >
        <AppAbout />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppAbout from "~/components/AppAbout.vue";
import { debounce } from "~/composables/utils";

const title = ref("Home - WSWWT?");
const description = ref(
  "In the Home page, you can research your own shows. When you tap a name, the app make a research to the API and show you the returned response. There is a limit result of 10."
);
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});

const search = ref(null);
const shows = ref([]);

async function searchByName() {
  if (search.value === "") {
    shows.value = [];
    return;
  }
  shows.value = [];
  const response = await useAsyncData("shows", () =>
    $fetch("https://api.tvmaze.com/search/shows", {
      params: { q: search.value },
    })
  );

  for (var i = 0; i < response.data.value.length; i++) {
    shows.value.push(response.data.value[i].show);
  }
}
</script>

<style>
.n-input {
  border: none !important;
  color: red !important;
  padding: 0 !important;
  width: 70% !important;
  height: 40px !important;
  background-color: #27272a !important;
}

@media screen and (min-width: 640px) {
  .n-input {
    width: 400px !important;
  }
}
</style>
