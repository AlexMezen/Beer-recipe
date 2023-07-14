import { create } from 'zustand'

const useStore = create((set) => ({
  data: [],
  product: [],
  page:1,
  activeElements:[],
  fetchData: async () => {
    let { page,data } = useStore.getState();
    const response = await fetch('https://api.punkapi.com/v2/beers?per_page=15&page=' + page)
    const dataR = await response.json()
    set({ data: [...dataR,...data] })
    set({ page: page+=1 })
  },
  fetchProduct: async (id) => {
      const response = await fetch('https://api.punkapi.com/v2/beers?ids='+ id)
      const productR = await response.json()
      set({ product: productR })
    },
  addToActive: async (newElement) => {
    let { activeElements } = useStore.getState();
    let active = [...activeElements, newElement]
    set({ activeElements: active })
  },
  deleteData: (dataToDelete) => {
    let { data } = useStore.getState();
    let unique = data.filter(x => dataToDelete.indexOf(String(x.id)) === -1)
    console.log(unique);
    set({ data: unique })
  },
}));
  
  export default useStore