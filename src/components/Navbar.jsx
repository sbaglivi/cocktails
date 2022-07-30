import styles from './Navbar.module.css'
import logo from '../assets/logo.svg';
const Navbar = ({}) => {
    return (
        <header className={styles.header}>
            <div className={styles.logoDiv}>
                <img src={logo} alt='logo' />
            </div>
            <nav className={styles.nav}>
                <a href="#">About</a>
                <a href='#'>Contact us</a>
            </nav>
        </header>
    )
}

export default Navbar;