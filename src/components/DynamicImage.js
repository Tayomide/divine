import styled from "styled-components"
import { useContext } from "react"
import { Image } from "./Image"
import { GridContext } from "../hooks/GridContext"

export const DynamicImage = ({id}) => {
  const { size, imageList }  = useContext(GridContext)
  
  return (
    // <ImageContainer>
    <Container style={{
      "--width": (size[id] ? size[id]+"px" : "33%")
    }}>
      <Image src={"/images/"+imageList[id]} alt="demo" id={id}/>
    </Container>
    // </ImageContainer>
  )
}

const Container = styled.div`
  width: var(--width);
  > img{
    width: 100%;
    &:hover{
      cursor: zoom-in;
    }
  }
`
