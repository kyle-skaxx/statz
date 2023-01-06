import create from 'zustand'
import axios from 'axios'

const useStore = create((set) => ({
  interactions: [],
  async fetchInteractions() {
    try {
      const { data } = await axios.get('/api/v1/sales-interactions')
      set((state) => ({ interactions: data }))
    } catch (error) {
      console.error(error)
    }
  },
  async addInteraction(interaction) {
    try {
      await axios.post('/api/v1/sales-interactions', interaction)
      this.fetchInteractions()
    } catch (error) {
      console.error(error)
    }
  },
}))

export default useStore
