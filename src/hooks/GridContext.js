import { createContext } from "react"

export const GridContext = createContext({
  aspect: [],
  size: [],
  imageList: [],
  setImage: () => {},
  setSize: () => {},
  setAspect: () => {}
})