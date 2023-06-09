import { ref } from 'vue'

const debounceTime = ref(null)

export function debounce(callback, timeout) {
    if (debounceTime.value) {
        clearTimeout(debounceTime.value)
    }
    debounceTime.value = setTimeout(() => {
        callback()
    }, timeout)
}