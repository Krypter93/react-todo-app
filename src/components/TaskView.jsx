import styles from "../assets/styles/taskView.module.css"
import PropTypes from 'prop-types'
import { MdDelete } from "react-icons/md";
import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteTask, modifyTaskCategory} from "../redux/taskSlice";

export const TaskView = ({mainSelect}) => {
    const taskState = useSelector(state => state.task.tasks)
    const tasks = taskState.filter(task => task !== null && task.category === mainSelect)
    const dispatch = useDispatch()

    const handelDeleteTask = (id) => {
        dispatch(deleteTask({id}))
    }

    useEffect(() => {
        <TaskView mainSelect={mainSelect} />
    }, [mainSelect])

    const handleCategoryChange = (id) => {
        dispatch(modifyTaskCategory({id, category: 'Complete'}))
        mainSelect = 'Complete'
    }

    return <>
        <section className={styles['task-view']}>
            {tasks.length < 1 ?
                <div className={styles['task-empty']}>
                    <p>No tasks</p>
                </div>
            :
             <ul className={styles['task-list']}>
                
                {tasks.map(task => {
                    return <li key={task.id}>
                        <input type="checkbox" onClick={() => handleCategoryChange(task.id)}/>
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