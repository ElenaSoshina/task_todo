import css from './add-list-form.module.css'
import {useRef, useState} from 'react'
import nextId from "react-id-generator";

function AddListForm (props) {
    const {addCard} = props
    const titleInput = useRef()
    const itemsInput = useRef()
    const [isFormValid, setFormValid] = useState(true)
// e - event доступна в любом обработчике
    function handleSubmit (e) {
        e.preventDefault()
        const isValidated = isFormValidated()
        if (isValidated) {
            const items = itemsInput.current.value.split(',').map(item => {
                return {
                    id: nextId(),
                    content: item.trim(),
                    completed: false
                }
            })
            setFormValid(true)
            addCard({
                    title: titleInput.current.value,
                    items: items,
                })
        }else {
            setFormValid(false)
        }
    }

    function isFormValidated () {
        return titleInput.current.value !== '' && itemsInput.current.value !== ''
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label htmlFor='cardTitle' className={css.label}>Card title</label>
            <input ref={titleInput} type="text" id='cardTitle' placeholder='Enter card title'/>
            <label htmlFor="cards" className={css.label}>Enter list items separated by comma</label>
            <textarea ref={itemsInput} id="cards"></textarea>
            <button type='submit'>Add</button>
            {!isFormValid && <p className={css.error}>List must have a title and at least one item</p>}
        </form>
    )
}

export default AddListForm