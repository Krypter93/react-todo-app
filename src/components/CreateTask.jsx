import styles from "../assets/styles/createTask.module.css"

export const CreateTask = () => {
    return <>
        <section className={styles['create-task']}>
            <button>Add Task</button>
            <select name="" id="">
                <option value="">Incomplete</option>
                <option value="">Complete</option>
                <option value="">All</option>
            </select>
        </section>
    </>
}