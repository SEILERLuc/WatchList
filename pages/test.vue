<template>
    <!--<ul>
            <li v-for="cafe in cafes.data" :key="cafe.id" v-text="cafe.company.name + ' - ' + cafe.location_name"></li>
        </ul>
        <ul>
            <li v-for="serie in series.data" :key="serie.id" v-text="serie.name"></li>
        </ul>
    </div>-->
    <div>{{ shows[0].name }}</div>
    <div v-for="show in shows">
        <ShowCard :show="show" />
    </div>
</template>

<script setup>

/*title, image, year, lenght on an episode, rating*/

const search = ref('');

const { data: shows, error } = await useAsyncData(
    'series',
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
console.log(shows)
/*const currentId = ref(1);
const currentPokemon = ref();
const fetchPokemonForCurrentId = async () => {
    const pokemon = await $fetch(`https://pokeapi.co/api/v2/pokemon/${currentId.value}`);
    currentPokemon.value = {
        name: pokemon.name,
        imageUrl: pokemon.sprites.front_default,
    };
};
onBeforeMount(() => {
    fetchPokemonForCurrentId();
});
const nextPokemon = async () => {
    currentId.value++;
    await fetchPokemonForCurrentId();
};
const previousPokemon = async () => {
    if (currentId.value > 1) {
        currentId.value--;
    }
    await fetchPokemonForCurrentId();
};

console.log(currentPokemon)*/

</script>