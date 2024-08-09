import styles from "../assets/styles/createTask.module.css"
import { ModalWindow } from "./modal"
import { useSelector, useDispatch } from "react-redux"
import { showModal } from "../redux/modalSlice"
import { TaskView } from "./TaskView"
import { setMainSelect } from "../redux/mainSelectSlice"
import { React } from "react"


export const CreateTask = () => {
    const modal = useSelector((state) => state.modalTask.isVisible)
    const mainSelectState = useSelector((state) => state.mainSelect.value)
    const dispatch = useDispatch()

    const handleModal = () => {
        dispatch(showModal())
    }

    const handleSelectChange = (e) => {
        dispatch(setMainSelect(e.target.value))
    }

    return <>
        <section className={styles['create-task']}>
            <button onClick={handleModal}>Add Task</button>
            <select value={mainSelectState} onChange={handleSelectChange}>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </select>
        </section>
        {modal && <ModalWindow />}
        <TaskView mainSelect={mainSelectState} />
    </>
}