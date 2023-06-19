import { defineStore } from 'pinia'

/*USER STORE to store the list of chosen shows*/
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
            return this.showList
        },
        deleteFromList(id) {
            console.log("Delete a show with this id")
            for (var i = 0; i < this.showList.length; i++) {
                console.log(this.showList[i].id, id)
                if (this.showList[i].id === id) {
                    console.log("OK", i)
                    this.showList = this.showList.slice(i, 1)
                    console.log(this.showList)
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
            console.log("CLEAR THE FULL LIST")
            this.showList = []
            console.log(this.showList)
            return this.showList
        },
        chooseShow() {
            console.log("CHOSING THE SHOW FOR TONIGHT")
            let choice = Math.floor(Math.random() * this.nbrShow)
            console.log(choice, this.showList[choice])
            return choice
        }
    },
    persist: {
        storage: persistedState.localStorage,
    }
})
