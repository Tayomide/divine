import styled from "styled-components"
import { useState, useRef, useEffect } from "react"

export const UploadImage = ({reset, setDisplayCancel}) => {
  const [imageFile, setImageFile] = useState()
  const [imageName, setImageName] = useState()
  // const [aspect, setAspect] = useState()
  const inputRef = useRef()

  const handleDrop = (e) => {
    e.preventDefault()
    var file = e.dataTransfer.files[0]
    setImageFile(file)
  }
  
  const handleDragOver = (e) => e.preventDefault()

  const handleChange = (e) => {
    var input = e.target;
    if (input.files && input.files[0]) {
      setImageFile(input.files[0])
    }
  }
  const handleClick = (e) => {
    e.stopPropagation()
    inputRef.current.click()
  }

  useEffect(() => {
    if(!imageFile){
      setImageName(null)
      return
    }
    var reader = new FileReader()
    reader.onload = function(e) {
      setImageName(e.target.result)
    }
    reader.readAsDataURL(imageFile)
  }, [imageFile])

  useEffect(() => {
    setImageFile()
  }, [reset])

  useEffect(() => {
    setDisplayCancel(!!imageName)
  }, [imageName, setDisplayCancel])

  return (
    <Container>
      {imageName ?
        <div className="image-container">
          <img src={imageName} alt="demo"/>
        </div> :
        <label
          className="custom-file"
          htmlFor="file-input"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={(e) => {
            if(e.target.tagName === "INPUT")return
            e.preventDefault()
          }}
        >
          <p>Drag photos here</p> {/* Make videos later */}
          <button onClick={handleClick}>Select from computer</button>
          <input type='file' onChange={handleChange} id="file-input" ref={inputRef}/> {/* accept="image/*" */}
        </label>
      }
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 40em;
  height: 80vh;
  background-color: white;
  .test{
    width: 100px;
    height: 100px;
    background-color: red;
  }
  label{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    p{
      cursor: auto;
    }
    button{
      border: 0;
      outline: 0;
      background-color: transparent;
      padding: 0.8em 1em;
      background-color: bisque;
      border-radius: 0.8em;
      cursor: pointer;
    }
    input{
      display: none;
    }
  }
  .image-container{
    height: 100%;
    width: 100%;
    display: flex;
    img{
      height: 100%;
      width: 100%; // Don't make it 100% until aspect ratio has been calculated
      margin: 0 auto;
      object-fit: contain;
    }
  }
`
