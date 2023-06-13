<template>
    <!-- THE LIST OF THE SERIES REGISTERED-->
    <div class="mx-4 my-2 max-h-80 w-3/4 max-w-xs overflow-y-scroll border-2 px-2 lg:max-w-md">
        <h2 class="mb-1 mt-2 border-b py-2">Ma liste</h2>
        <ul class="mb-1 mt-1 font-mono text-xs">
            <MyListCard v-for="show in myShowList" :show="show" />
        </ul>
    </div>
</template>

<script setup>

defineProps({
    myShowList: {
        type: Array,
        required: true,
    }
})

//console.log(myShowList)

</script>