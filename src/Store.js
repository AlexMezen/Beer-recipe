import { create } from 'zustand'

const useStore = create((set) => ({
    data: [],
    product: [],
    page:1,
    fetchData: async () => {
      let { page } = useStore.getState();
      const response = await fetch('https://api.punkapi.com/v2/beers?page=' + page)
      const dataR = await response.json()
      set({ data: dataR })
    },
    fetchProduct: async (id) => {
        const response = await fetch('https://api.punkapi.com/v2/beers?ids='+ id)
        const productR = await response.json()
        set({ product: productR })
      },
  }));

  
  export default useStore