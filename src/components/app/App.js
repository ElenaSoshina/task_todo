
import Header from '../header'
import Main from '../main'

import mock from '../../server-response-mock'

import css from './app.module.css'
import Footer from "../footer";



function App() {
    const {activeUserId, users, todos} = mock
    const isLogged = mock.activeUserId !== null
    const loggedUser = users.find(user => user.id === activeUserId)
    let filteredTodos = []
    if(isLogged) {
        filteredTodos = todos.filter(item => item.userId === loggedUser.id)
    }
    

    return (
        <div className={css.app}>
            <Header isLogged = {isLogged}/>
            <Main loggedUser = {loggedUser} todos={filteredTodos}/>
            <Footer />
        </div>
    )
}

export default App