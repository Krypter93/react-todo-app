import styles from "../assets/styles/taskView.module.css"
import PropTypes from 'prop-types'
import { MdDelete } from "react-icons/md";
import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteTask} from "../redux/taskSlice";

export const TaskView = ({mainSelect}) => {
    const taskStorage = JSON.parse(localStorage.getItem('tasks')) || []
    const taskState = useSelector(state => state.task.tasks)
    const tasks = taskStorage.filter(task => task.category === mainSelect)
    const dispatch = useDispatch()

    const handelDeleteTask = (id) => {
        dispatch(deleteTask({id}))
    }

    useEffect(() => {
        <TaskView mainSelect={mainSelect} />
    }, [taskState])

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
                        <input type="checkbox" />
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