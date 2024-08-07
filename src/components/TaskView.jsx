import styles from "../assets/styles/taskView.module.css"
import PropTypes from 'prop-types'

export const TaskView = ({mainSelect}) => {
    const taskStorage = JSON.parse(localStorage.getItem('tasks')) || []
    const tasks = taskStorage.filter(task => task.category === mainSelect)
    console.log(taskStorage)
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