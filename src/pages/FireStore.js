import styled from 'styled-components'
import { useState} from "react"
import { db } from '../config/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

export const FireStore = () => {
  const [ list, setList] = useState([])
  setList([])

  const userCollectionRef = collection(db, 'user')

  const handleClick = async () => {
    const data = await getDocs(userCollectionRef)
    const filteredData = data.docs.map(doc => {return {
      ...doc.data(),
      id: doc.id
    }})
    console.log(filteredData, data)
    // setList(filteredData)
  }

  const handleSubmit = async () => {
    await addDoc(userCollectionRef, {
      name: "hey",
      images: ["Yeah Whatever", "You hear that kid?", "I did old man", "Tough rough huh"]
    }).then(response => {
      console.log(response)
    })
  }

  // const handleUpload = async () => {
    
  // }
  return (
    <Container>
      <h1 onClick={handleClick}>FireStore</h1>
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {list.map((item, index) => 
          <li key={index}>{item}</li>
        )}
      </ul>
    </Container>
  )
}

const Container = styled.div``