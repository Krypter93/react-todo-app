import styles from "../assets/styles/modal.module.css"

export const ModalWindow = () => {
    return <>
        <section className={styles['modal-container']}>
            <div className={styles['modal-task']}>
                <h1>Add Task</h1>
            </div>
        </section>
    </>
}