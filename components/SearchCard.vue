<template>
    <div>
        {{ show }}
    </div>
</template>

<script setup>
defineProps({
    show: {
        type: Object,
        required: true,
    }
})
</script>