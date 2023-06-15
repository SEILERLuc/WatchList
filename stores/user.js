import { defineStore } from 'pinia'

/*export const useUserListStore = defineStore('userList', () => {
    const name = ref('WSWWT')
    const showList = ref([])
    const nbrShow = ref(showList.length)

    function addToList(show) {
        showList.value.push(show)
    }

    function deleteFromList(show) {
    }
    persist = true

    return { name, showList, nbrShow, addToList, deleteFromList }
})*/

export const useUserStore = defineStore('user', {
    state: () => ({ name: 'WSWWT User', showList: [], nbrShow: 0 }),
    getters: {
        //doubleCount: (state) => state.count * 2,
    },
    actions: {
        addToList(show) {
            if (!this.isAlreadyInList(show.id)) {
                this.showList.push(show)
                this.nbrShow = this.showList.length
            } else {
                console.log("Non ajouté")
            }
        },
        deleteFromList(id) {
            console.log("Delete a show with this id")
            for (var i = 0; i < this.showList.length; i++) {
                console.log(this.showList[i].id, id)
                if (this.showList[i].id === id) {
                    console.log("OK", i)
                    this.showList.slice(i, 1)
                    this.nbrShow = this.showList.length
                    console.log(this.showList[0])
                    return
                }
            }
            this.nbrShow = this.showList.length
        },
        isAlreadyInList(id) {
            if (this.showList === 0) return false
            for (var i = 0; i < this.showList.length; i++) {
                if (id === this.showList[i].id) return true
            }
            return false
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
})
