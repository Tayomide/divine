import { createContext } from "react";

export const OverlayContext = createContext({
  visible: false,
  id: 0,
  // image: {
  //   aspect: 0,
  //   file: null,
  //   caption: "",
  //   alt: ""
  // },
  setImage: () => {},
  setVisible: () => {},
  setId: () => {}
})