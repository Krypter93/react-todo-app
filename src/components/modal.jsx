import styles from "../assets/styles/modal.module.css"
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import { hideModal } from "../redux/modalSlice"
import { setInput, clearInput } from "../redux/inputSlice";
import { addTask } from "../redux/taskSlice";
import { setSelectModal, clearSelectModal } from "../redux/selectModalSlice";
import { FaCheck } from "react-icons/fa";
import { useEffect, React } from "react";
import { v4 as uuidv4 } from 'uuid';

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

    // This useEffect is for debugging purposes only
    useEffect(() => {
        console.log('Select changed to: ', selectModalState)
    }, [selectModalState])

    const handleModalTask = () => {
        const inputTask = inputState
        const category = selectModalState

        if (!inputTask || !category || category === 'Category') {
            alert('Please enter a task and select a category')
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
    }
    

    return <>
        <section className={styles['modal-container']}>
            <div className={styles['modal-task']}>
                <div id={styles['close']}>
                    <IoMdClose id={styles['close-btn']} onClick={handleModalClose}/>
                </div>

                <div id={styles['modal-info']}>
                    <fieldset>
                        <label htmlFor="task">
                            <input type="text" id={styles['task']} placeholder="Add your task" value={inputState} onChange={handleOnChangeInput} />
                        </label>
                        <label htmlFor="category">
                            <select name="category" id={styles['category']} value={selectModalState} onChange={handleSelectModalChange}>
                                <option value="Category">Category</option>
                                <option value="Complete">Complete</option>
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