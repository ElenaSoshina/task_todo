import {useState} from 'react'
import css from './list.module.css'

function ListItem (props) {
    const {completed, content} = props
    const [isCompleted, setIsCompleted] = useState(completed)
    function OnChange () {
        setIsCompleted(isCompleted => {
            return !isCompleted
        })
    }

    return (
        <li className={css.listItem}>
            <input type="checkbox" checked={isCompleted} onChange={OnChange}/>
            {isCompleted ? (
                <del>{content}</del>
            ) : (
                <span>{content}</span>
            )}
        </li>
    )
}

export default ListItem