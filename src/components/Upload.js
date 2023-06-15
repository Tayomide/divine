import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import { UploadDetails } from "./UploadDetails"
import { UploadImage } from "./UploadImage"

export const Upload = () => {
  const CardOnClick = (e) => e.stopPropagation()
  const [reset, setReset] = useState(false)
  const [displayCancel, setDisplayCancel] = useState(false)
  const uploadRef = useRef()
  useEffect(() => {
    uploadRef.current.focus()
  }, [])
  
  return (
    <Container onClick={CardOnClick} ref={uploadRef}>
      <div>
        <div className="upload-nav">
          {
            displayCancel && 
            <button
              className="cancel"
              onClick={() => setReset(currReset => !currReset)}
            >Cancel</button>
          }
          <p>Create a post</p>
          <button className="post">Post</button>
        </div>
        <UploadImage reset={reset} setDisplayCancel={setDisplayCancel} />
        <UploadDetails />
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  min-width: 75vw;
  max-width: 80vw;
  padding-top: 5em;
  > div{
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 0.3em;
    >.upload-nav{
      height: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-items: center;
      p{
        font-size: 1.2em;
        height: max-content;
        width: max-content;
        margin: 0;
        grid-column: 2;
      }
      button{
        height: max-content;
        width: max-content;
        border: 0;
        outline: 0;
        margin: 0;
        background-color: transparent;
        justify-self: right;
        font-size: 1.1em;
        padding: 0 0.5em;
        font-weight: bold;
        cursor: pointer;
        &.cancel{
          color: #c92c2c;
          justify-self: left;
        }
      }
    }
  }
`