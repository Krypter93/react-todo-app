import styles from "../assets/styles/modal.module.css"
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux"
import { hideModal } from "../redux/modalSlice"

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
            </div>
        </section>
    </>
}