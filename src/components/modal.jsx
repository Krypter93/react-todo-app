import styles from "../assets/styles/modal.module.css"
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import { hideModal } from "../redux/modalSlice"
import { setInput, clearInput } from "../redux/inputSlice";
import { addTask } from "../redux/taskSlice";
import { setSelectModal, clearSelectModal } from "../redux/selectModalSlice";
import { FaCheck } from "react-icons/fa";
import { React } from "react";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';


export const ModalWindow = () => {
    const dispatch = useDispatch()
    const inputState = useSelector((state) => state.inputTask.input)
    const selectModalState = useSelector((state) => state.selectModal.value)
    
    const handleModalClose = () => {
        dispatch(hideModal())
        dispatch(clearInput())
        dispatch(clearSelectModal())
    }

    const handleOnChangeInput = (e) => {
        dispatch(setInput(e.target.value))
    }
    
    const handleSelectModalChange = (e) => {
        dispatch(setSelectModal(e.target.value))
    }


    const handleModalTask = () => {
        const inputTask = inputState
        const category = selectModalState

        if (!inputTask || !category || category === 'Category') {
            toast.error('Please enter a task and select a category')
            return
        }

        const newTask = {
            id: uuidv4(),
            description: inputTask,
            category: category,
            createdAt: new Date().toLocaleString()
        }

        dispatch(addTask(newTask))
        dispatch(hideModal())
        dispatch(clearInput())
        dispatch(clearSelectModal())
        toast.success('Task added')
    }
    

    return <>
        <section className={styles['modal-container']}>
            <div className={styles['modal-task']}>
                <div id={styles['close']}>
                    <IoMdClose id={styles['close-btn']} onClick={handleModalClose}/>
                </div>

                <div id={styles['modal-info']}>
                    <fieldset>
                        <label htmlFor={styles["task"]} >
                            <input type="text" id={styles['task']} placeholder="Add your task" value={inputState} onChange={handleOnChangeInput} />
                        </label>
                        <label htmlFor={styles["category"]}>
                            <select name="category" id={styles['category']} value={selectModalState} onChange={handleSelectModalChange}>
                                <option value="Category">Category</option>
                                <option value="Incomplete">Incomplete</option>
                            </select>
                        </label>
                        <button onClick={handleModalTask}><FaCheck id={styles['check']} /></button>
                    </fieldset>
                </div>
            </div>
        </section>
    </>
}