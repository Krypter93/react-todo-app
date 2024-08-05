import styles from "../assets/styles/modal.module.css"
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import { hideModal } from "../redux/modalSlice"
import { setInput } from "../redux/inputSlice";
/* import { addTask } from "../redux/taskSlice"; */
import { setSelectModal } from "../redux/selectModalSlice";
import { FaCheck } from "react-icons/fa";
import { useEffect } from "react";

export const ModalWindow = () => {
    const dispatch = useDispatch()
    const inputState = useSelector((state) => state.inputTask.input)
    /* const taskState = useSelector((state) => state.task.tasks) */
    const selectModalState = useSelector((state) => state.selectModal.value)
    
    const handleModalClose = () => {
        dispatch(hideModal())
    }

    // Refactor this later
    const handleOnChangeInput = (e) => {
        dispatch(setInput(e.target.value))
        console.log(inputState)
    }

    // Refactor this laters
    const handleSelectModalChange = (e) => {
        dispatch(setSelectModal(e.target.value))
    }

    // THis useEffect is for debugging purposes only
    useEffect(() => {
        console.log('Select changed to: ', selectModalState)
    }, [selectModalState])

    // Refactor this adding a new slice to the store for the 'input 'and 'select' of the modal
    /* const handleModalTask = () => {
        const inputTask = document.querySelector('#task').value.trim()
        const category = document.querySelector('#category').value

        if (!inputTask || !category || category === 'Category') {
            alert('Please enter a task and select a category')
            return
        }

        const newTask = {
            id: Date.now() + '-' + Math.floor(Math.random() *100 + 1),
            description: inputTask,
            category: category,
            createdAt: new Date().toLocaleString()
        }

        dispatch(addTask(newTask))
        console.log(taskState)
    } */
    

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
                        <button><FaCheck id={styles['check']} /></button>
                    </fieldset>
                </div>
            </div>

            
        </section>
    </>
}