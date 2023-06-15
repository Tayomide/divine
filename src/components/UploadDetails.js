import styled from "styled-components"
import { useState } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UploadDetails = () => {
  const [caption, setCaption] = useState()
  const [alt, setAlt] = useState()
  return (
    <Container>
      <li className="user-name">
        <AccountCircleIcon /> Tomiwa Ibrahim
      </li>
      <li className="caption">
        <h3>Caption</h3>
        <textarea
          placeholder="Write a caption..."
          defaultValue={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </li>
      <li className="accessibility">
        <h3>Alt Text</h3>
        <p className="helper">Alt text describes your photos for people with visual impairments.</p>
        <textarea
          placeholder="Write alt text..."
          defaultValue={alt}
          onChange={(e) => setAlt(e.target.value)}
        />
      </li>
      <li className="user-info">
        {/* 
          name
          email
          number
          social media account links
         */}
      </li>
    </Container>
  )
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 1em 1em;
  h3{
    margin: 0.6em 0 0.2em 0;
  }
  p{
    margin: 0 0 0.2em 0;
  }
  textarea{
    resize: none;
    width: 100%;
    height: 10em;
    outline: 0;
    border: 0;
  }
  .user-name{
    display: flex;
    align-items: center;
    svg{
      margin: 0 0.1em 0 0;
      fill: white;
      background-color: black;
      border-radius: 50%;
    }
    p{
      height: 100%;
      text-align: center;
    }
  }
  .accessibility{
    .helper{
      font-size: 0.8em;
    }
  }
`
