import { useState } from "react";
import styles from './SearchForm.module.css';
import image from '../assets/cocktail.png';
import searchIcon from '../assets/search.svg';

const SearchForm = ({handleSubmit}) => {
    const [text,setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(text);
    }
    return (
        <form onSubmit={onSubmit} className={styles.searchForm}>
            <div className={styles.imageDiv}>
                <img src={image} alt='cocktail'/>
            </div>
            <div>
                <h1 className={styles.welcome}>Welcome, what may I serve you?</h1>
                <div className={styles.inputDiv}>
                    <input className={styles.textInput} type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Search for a cocktail'/>
                    <button className={styles.searchButton}><img src={searchIcon} alt='search'/></button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;