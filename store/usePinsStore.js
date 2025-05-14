import { defineStore } from 'pinia'
export const usePinsStore = defineStore('pins', {
    state: () => ({
        query: "",
        pins: [],
        bookmark: "",
        isLoading: false,
        error: null,
        scrollPosition: 0
    }),

    actions: {
        async fetchPins(isNewSearch = false) {
            this.isLoading = true
            try {
                const response = await $fetch(`/api/pins?q=${this.query}&bookmark=${this.bookmark || ""}`)
                if (isNewSearch) {
                    this.pins = response.pins
                } else {
                    this.pins.push(...response.pins)
                }
                this.bookmark = response.bookmark
            } catch (err) {
                this.error = err
            } finally {
                this.isLoading = false
            }
        },

        saveScroll() {
            this.scrollPosition = window.scrollY
        },

        restoreScroll() {
            if (this.scrollPosition) {
                setTimeout(() => {
                    window.scrollTo({ top: this.scrollPosition, behavior: "auto" })
                }, 100)
            }
        },
        reset() {
            this.query = ""
            this.pins = []
            this.bookmark = ""
            this.scrollPosition = 0
        }
    }
})
