import { useRef, useContext } from 'react'
import { GridContext } from '../hooks/GridContext'
import { OverlayContext } from '../hooks/OverlayContext'

export const Image = ({id, alt, ...props}) => {
  const image = useRef()
  const { setAspect } = useContext(GridContext)
  const { setVisible, setId } = useContext(OverlayContext)
  
  const onClick = () => {
    setVisible(prevVisible => !prevVisible)
    setId(id)
  }
  const onLoad = () => {
    setAspect(prevAspect => {
      if(prevAspect){
        const newAspect = [...prevAspect]
        newAspect[id] = image.current.height / image.current.width
        return newAspect
      }
      return null
    })
  }

  return (
    <img
      {...props}
      alt={alt}
      ref={image}
      draggable="false"
      onLoad={onLoad}
      onClick={onClick}
    />
  )
}
