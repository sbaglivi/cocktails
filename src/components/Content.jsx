import styles from './Content.module.css';
const Content = ({children}) => {
    return (
        <div className={styles.contentDiv}>
            {children}
        </div>
    )
}

export default Content;