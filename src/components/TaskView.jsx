import styles from "../assets/styles/taskView.module.css"
import PropTypes from 'prop-types'
import { MdDelete } from "react-icons/md";
import {React} from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteTask, modifyTaskCategory} from "../redux/taskSlice";
import { MdEdit } from "react-icons/md";
import { ModalEditTask } from "./modalEditTask";
import { editState } from "../redux/editTaskSlice";
import { toast } from 'react-toastify';


export const TaskView = ({mainSelect}) => {
    const taskState = useSelector(state => state.task.tasks)
    const tasks = taskState.filter(task => task !== null && task.category === mainSelect)
    const edit = useSelector(state => state.editionTask.edit)
    const dispatch = useDispatch()

    const handelDeleteTask = (id) => {
        dispatch(deleteTask({id}))
        toast.success('Task deleted')
    }

    const handleCategoryChange = (id) => {
        dispatch(modifyTaskCategory({id, category: 'Complete'}))
        mainSelect = 'Complete'
        toast.success('Task completed')
    }

    const handleEditTask = (id) => {
        dispatch(editState(id))
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
                        <input type="checkbox" onClick={() => handleCategoryChange(task.id)} />
                        <div id={styles['description']}>
                            <p style={mainSelect === 'Complete' ? { textDecoration: 'line-through' } : {}}>{task.description}</p>
                        </div>
                        <div id={styles['created']}>
                        <p>{task.createdAt}</p>
                        </div>
                        <div id={styles['delete-edit']}>
                            <MdEdit id={styles['edit-icon']} onClick={() => handleEditTask(task.id)} />
                            <MdDelete id={styles['delete-icon']} onClick={() => handelDeleteTask(task.id)} />
                        </div>
                        {edit === task.id && <ModalEditTask taskId={task.id} taskDescription={task.description}/>}
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