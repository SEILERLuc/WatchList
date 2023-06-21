import { defineStore } from 'pinia'

/*USER STORE to store the list of chosen shows*/
export const useUserStore = defineStore('user', {
    state: () => ({ name: 'WSWWT User', showList: [], nbrShow: 0, tonightShow: null }),
    getters: {
        //doubleCount: (state) => state.count * 2,
    },
    actions: {
        addToList(show) {
            //const message = useMessage()
            if (!this.isAlreadyInList(show.id)) {
                this.showList.push(show)
                this.nbrShow = this.showList.length
                //message.success("added to your list")
            } else {
                //console.log("Non ajouté")
            }
            return this.showList
        },
        deleteFromList(id) {
            //console.log("Delete a show with this id")
            for (var i = 0; i < this.showList.length; i++) {
                if (this.showList[i].id === id) {
                    this.showList.splice(i, 1)
                    this.nbrShow = this.showList.length
                }
            }
            this.nbrShow = this.showList.length
            return this.showList
        },
        isAlreadyInList(id) {
            if (this.showList === 0) return false
            for (var i = 0; i < this.showList.length; i++) {
                if (id === this.showList[i].id) return true
            }
            return false
        },
        clearList() {
            //console.log("CLEAR THE FULL LIST")
            this.showList = []
            return this.showList
        },
        chooseShow() {
            //console.log("CHOSING THE SHOW FOR TONIGHT")
            let choice = Math.floor(Math.random() * this.nbrShow)
            this.tonightShow = this.showList[choice]
            return choice
        },
        fromRating10ToRating5() {
            let N10 = this.tonightShow.rating.average
            if (N10 === null) {
                console.log("No rating info...")
                return
            }
            console.log("Note to convert", N10)
            console.log((N10 * 5) / 10)
            Rating5.value = Math.round((N10 * 5) / 10)
            //Rating5.value = 5
            console.log("Note converted : ", Rating5.value)
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
})
