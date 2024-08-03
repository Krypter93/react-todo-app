import styles from "../assets/styles/modal.module.css"
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux"
import { hideModal } from "../redux/modalSlice"
import { FaCheck } from "react-icons/fa";

export const ModalWindow = () => {
    const dispatch = useDispatch()
    
    const handleModalClose = () => {
        dispatch(hideModal())
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
                            <input type="text" id={styles['task']} placeholder="Add your task" />
                        </label>
                        <label htmlFor="category">
                            <select name="category" id={styles['category']}>
                                <option value="Category">Category</option>
                                <option value="Complete">Complete</option>
                                <option value="Incomplete">Incomplete</option>
                            </select>
                        </label>
                        <button><FaCheck /></button>
                    </fieldset>
                </div>
            </div>

            
        </section>
    </>
}