import { TitleHeader } from "./components/TitleHeader"
import { CreateTask } from "./components/CreateTask"
import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <TitleHeader />
      <CreateTask />
      <ToastContainer autoClose={1800} />
    </>
  )
}

export default App
