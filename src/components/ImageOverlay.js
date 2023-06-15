import styled from "styled-components"
import { GridContext } from "../hooks/GridContext"
import { OverlayContext } from "../hooks/OverlayContext";
import { useEffect, useState, useContext } from "react"

export const ImageOverlay = () => {
  const { aspect, imageList } = useContext(GridContext)
  const { setVisible, id, setId } = useContext(OverlayContext)
  const CardOnClick = (e) => e.stopPropagation()
  const [ size, setSize ] = useState([0,0])
  
  useEffect(() => {
    const onKeyDown = (e) => {
      if(e.key === "ArrowLeft"){
        setId(prevId => Math.max(prevId-1, 0))
      }
      if(e.key === "ArrowRight"){
        setId(prevId => Math.min(prevId+1, imageList.length-1))
      }
      if(e.key === "Escape")setVisible(false)
    }
    if(!aspect[id]) return
    const resize = () => {
      const height = window.innerHeight * 0.8
      const width = window.innerWidth * 0.8
      const tempSize = [0,0]
      tempSize[0] = height
      tempSize[1] = height / aspect[id]
  
      if(tempSize[1] > width){
        tempSize[0] = width * aspect[id]
        tempSize[1] = width
      }
      setSize(tempSize)
    }
    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [aspect, id, setSize, setId, imageList, setVisible])
  
  return (
      <Container onClick={CardOnClick}>
        <div className="image-container" style={{
          "--height": size[0]+"px",
          "--width": size[1]+"px"
        }}>
          <img src={"/images/"+imageList[id]} alt="demo" draggable="false"/>
        </div>
      </Container>
  )
}

const Container = styled.div`
  width: max-content;
  height: 80%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .image-container{
    display: flex;
    align-items: center;
    background-color: black;
    img{
      width: var(--width);
      height: var(--height);
      object-fit: contain;
    }
  }

`
