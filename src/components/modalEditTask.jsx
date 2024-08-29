import styles from '../assets/styles/editModal.module.css'
import { IoMdClose } from "react-icons/io";
import { editState } from '../redux/editTaskSlice';
import { modifyTask } from '../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setEditInput, clearEditInput } from '../redux/editInputSlice';
import { toast } from 'react-toastify';

export const ModalEditTask = ({taskId, taskDescription}) => {
    const dispatch = useDispatch()
    const inputEditState = useSelector(state => state.editInput.input)

    const handleModalClose = () => {
        dispatch(editState(null))
        dispatch(clearEditInput())
    }

    const handleOnChangeEditInput = (e) => {
        dispatch(setEditInput(e.target.value))
    }

    const handleUpdateTask = () => {
        if (inputEditState === '') {
            toast.error('Please update your task')
            return
        }
        dispatch(modifyTask({id: taskId, description: inputEditState}))
        dispatch(editState(null))
        dispatch(clearEditInput())
        toast.success('Task updated')
    }

    return <>
        <section className={styles['modal-update-task']}>
            <div className={styles['modal-update-data']}>
            <IoMdClose id={styles['close-btn']} onClick={handleModalClose} />
            </div>

            <div id={styles['modal-info']}>
                <input type="text" disabled  value={taskDescription}/>

                <input type="text" placeholder='Update your task' onChange={handleOnChangeEditInput} />

                <button id={styles['update-btn']} onClick={handleUpdateTask}>Update</button>
            </div>
        </section>
    </>
}