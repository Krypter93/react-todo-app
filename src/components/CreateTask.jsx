import styles from "../assets/styles/createTask.module.css"
import { ModalWindow } from "./modal"
import { useSelector, useDispatch } from "react-redux"
import { showModal } from "../redux/modalSlice"


export const CreateTask = () => {
    const modal = useSelector((state) => state.modalTask.isVisible)
    const dispatch = useDispatch()

    const handleModal = () => {
        dispatch(showModal())
    }

    return <>
        <section className={styles['create-task']}>
            <button onClick={handleModal}>Add Task</button>
            <select name="" id="">
                <option value="">Incomplete</option>
                <option value="">Complete</option>
                <option value="">All</option>
            </select>
        </section>
        {modal && <ModalWindow />}
    </>
}