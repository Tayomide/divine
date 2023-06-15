import { Route, Routes } from "react-router-dom"
import { ImageContainer } from "./components/ImageContainer"
import { GridContext } from "./hooks/GridContext";
import { useEffect, useState } from "react"
import { OverlayContext } from "./hooks/OverlayContext";
import { Navbar } from "./components/Navbar";
import { OverlayContainer } from "./components/OverlayContainer";
import styled from "styled-components";
import { FireStore } from "./pages/FireStore";

function App() {
const [aspect, setAspect] = useState([])
const [size, setSize] = useState([])
const [imageList, setImageList] = useState([])

const [ visible, setVisible ] = useState(false)
const [id, setId] = useState(0)
useEffect(() => {
  setImageList([
    "SamplePhoto_1.jpg","SamplePhoto_2.jpg",
    "SamplePhoto_3.jpg","SamplePhoto_4.jpg",
    "WIN_20230317_15_37_49_Pro.jpg","WIN_20230317_15_37_51_Pro.jpg",
    "SamplePhoto_7.jpg","SamplePhoto_8.jpg",
    "SamplePhoto_11.jpg","SamplePhoto_12.jpg",
    "WIN_20230317_15_37_55_Pro.jpg","WIN_20230317_15_38_33_Pro.jpg",
    "SamplePhoto_13.jpg","SamplePhoto_14.jpg",
    "theosm  Dribbble.png",
    "SamplePhoto_9.jpg",
    "SamplePhoto_10.jpg",
    "SamplePhoto_5.jpg","SamplePhoto_6.jpg",
    "WIN_20230317_15_38_36_Pro.jpg","WIN_20230317_15_38_52_Pro.jpg"
  ])
}, [])
  return (
    <OverlayContext.Provider value={{ visible, setVisible, id, setId }}>
    <GridContext.Provider value={{ aspect, size, imageList, setImageList, setSize, setAspect }}>
      <Container className={visible ? "visible" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="App">
            Tomiwa
          </div>}
          />
          <Route path="/demo/collage" element={<ImageContainer />} />
          <Route path="/demo/firestore" element={<FireStore />} />
        </Routes>
        <OverlayContainer />
      </Container>
    </GridContext.Provider>
    </OverlayContext.Provider>
  );
}

export default App;

const Container = styled.div`
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
  &.visible{
    overflow: hidden;
  }
`
