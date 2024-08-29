import { TitleHeader } from "./components/TitleHeader"
import { CreateTask } from "./components/CreateTask"
import React from "react"
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <TitleHeader />
      <CreateTask />
      <ToastContainer autoClose={2000} transition={Slide} />
    </>
  )
}

export default App
