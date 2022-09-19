import css from './header.module.css'
import logo from './logo.svg'
function Header (props) {
    const {isLogged} = props
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <img src={logo} alt=""/>
                <h1>ToDo App</h1>
            </div>
            <button className={css.button}>{isLogged ? 'Log Out' : 'Log In'}</button>
        </header>
    )
}

export default Header