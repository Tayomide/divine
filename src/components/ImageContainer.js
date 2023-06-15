import styled from 'styled-components'
import { DynamicImage } from './DynamicImage'
import { useContext, useEffect, useRef } from 'react'
import { GridContext } from '../hooks/GridContext'

export const ImageContainer = () => {
  const { aspect, imageList, setSize } = useContext(GridContext)
  const imageContainer = useRef()

  useEffect(() => {
    const calculateSize = () => {
      setSize(() => {
        const newSize = []
        let i = -1;
        let images = 3
        let start = true
        while(true){
          i++
          if(i + images-1 >= aspect.length)break;
          for(let a = 0; a < images; a++){
            if(!aspect[i+a])start = false
          }
          if(start){
            const totalWidth = imageContainer.current.clientWidth - 5*(images-1)
            let initialWidth = 0
            for(let a = 0; a < images; a++){
              initialWidth += 1/aspect[i+a]
            }
            const b = totalWidth/initialWidth
            for(let a = 0; a < images; a++){
              newSize[i+a] = b*(1/aspect[i+a])
            }
            i += (images-1)
          }
        }
        return newSize
      })
    }
    calculateSize()
    window.addEventListener("resize", calculateSize)
    return () => window.removeEventListener("resize", calculateSize)
  }, [aspect, setSize])
  return (
    <Container ref={imageContainer}>
      {imageList.map((item, key) =>
        <DynamicImage id={key} key={key}/>
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 5px;
`
