import styled from "styled-components"
import { OverlayContext } from "../hooks/OverlayContext"
import { useContext } from "react"

export const Navbar = () => {
  const { setVisible, setId } = useContext(OverlayContext)
  const handleUpload = () => {
    setVisible(true)
    setId(-1)
  }
  return (
    <Container>
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>
          <button onClick={handleUpload}>
            Upload
          </button>
        </li>
      </ul>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: aliceblue;
  ul{
    list-style: none;
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    li{
      button{
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
`