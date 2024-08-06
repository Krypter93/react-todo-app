import styles from "../assets/styles/taskView.module.css"

export const TaskView = ({mainSelect}) => {
    const taskStorage = JSON.parse(localStorage.getItem('tasks')) || []
    console.log(taskStorage)
    return <>
        <section className={styles['task-view']}>
            {taskStorage.length < 1 ?
                <div className={styles['task-empty']}>
                    <p>No tasks</p>
                </div>
            :
             <p>Tasks</p>
            }
        </section>
    </>
}