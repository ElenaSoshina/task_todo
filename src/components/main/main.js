import css from "./main.module.css"
import EmptyState from "../empty-state/empty-state";
import List from "../list";
import {useState} from 'react'
import AddListForm from "../add-list-form";

function Main(props) {
    const {loggedUser, todos} = props
    const initialState = {
        isFormOpen : false,
        todos: todos
    }
    const [state, setState] = useState(initialState)

    function toggleForm () {
        setState(state => {
            return {
                ...state,
                isFormOpen: !state.isFormOpen
            }
        })
    }

    function addCard(data) {
        setState(state => {
            return {
                isFormOpen: false,
                todos: [...state.todos, {
                    ...data,
                    userId: loggedUser.id
                }]
            }
        })
    }

    return (
        <main className={css.main}>
            {loggedUser ? (
                <>
                    <h2>Welcome, {loggedUser.name}!</h2>
                    <button onClick={toggleForm}>{state.isFormOpen ? 'Close' : 'Add list'}</button>
                    {state.isFormOpen && <AddListForm addCard={addCard}/>}
                    <List todos={state.todos} />

                </>
            ) : (
                <EmptyState />
            )}
        </main>
    )
}

export default Main