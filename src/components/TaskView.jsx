import styles from "../assets/styles/taskView.module.css"
import PropTypes from 'prop-types'
import { MdDelete } from "react-icons/md";

export const TaskView = ({mainSelect}) => {
    const taskStorage = JSON.parse(localStorage.getItem('tasks')) || []
    const tasks = taskStorage.filter(task => task.category === mainSelect)
    console.log(taskStorage)

    const handelDeleteTask = (id) => {
        const newTasks = taskStorage.filter(task => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }

    return <>
        <section className={styles['task-view']}>
            {taskStorage.length < 1 ?
                <div className={styles['task-empty']}>
                    <p>No tasks</p>
                </div>
            :
             <ul className={styles['task-list']}>
                {tasks.map(task => {
                    return <li key={task.id}>
                        <p>{task.description}</p>
                        <p>{task.createdAt}</p>
                        <MdDelete id={styles['delete-icon']} onClick={() => handelDeleteTask(task.id)}/>
                    </li>
                })}
             </ul>
             }
        </section>
    </>
}

TaskView.propTypes = {
    mainSelect: PropTypes.string
}