import styled from "styled-components"
import { OverlayContext } from "../hooks/OverlayContext"
import { useContext } from "react"
import { ImageOverlay } from "./ImageOverlay"
import { Upload } from "./Upload"
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { GridContext } from "../hooks/GridContext"

export const OverlayContainer = () => {
  const { visible, setVisible, id, setId } = useContext(OverlayContext)
  const { imageList } = useContext(GridContext)
  const handleContainerClick = () => setVisible(false)
  const navigateBefore = (e) => {
    e.stopPropagation()
    if(id === 0)return
    setId(prevId => prevId-1)
  }
  const navigateNext = (e) => {
    e.stopPropagation()
    if(id === imageList.length-1)return
    setId(prevId => prevId+1)
  }

  return ( visible &&
    <Container onClick={handleContainerClick}>
      <CloseIcon className={"close" + (id === -1 ? " pad" : "")}/>
      {
        id >= 0 && 
        <>
          <NavigateBeforeIcon
            className={"navigate-before" + (id === 0 ? " disabled" : "")}
            onClick={navigateBefore}
          />
          <NavigateNextIcon
            className={"navigate-next" + (id === imageList.length-1 ? " disabled" : "")}
            onClick={navigateNext}
          />
        </>
      }
      {
        id >= 0 ? <ImageOverlay/> : <Upload/>
      }
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  .close, .navigate-before, .navigate-next{
    font-size: 2rem;
    position: fixed;
    &:hover{
      cursor: pointer;
    }
  }
  .navigate-before, .navigate-next{
    top: calc(50% - 1rem);
    fill: #000;
    background-color: rgba(255,255,255,0.7);
    border-radius: 50%;
    &.disabled{
      opacity: 0.5;
      /* pointer-events: none; */
      cursor: no-drop;
    }
    &:hover{
      background-color: #fff;
    }
  }
  .close{
    fill: rgba(255,255,255,0.7);
    right: 10px;
    top: 10px;
    &.pad{
      right: 26px;
    }
    &:hover{
      fill: #fff;
    }
  }
  .navigate-before{
    left: 10px;
  }
  .navigate-next{
    right: 10px;
  }
`
