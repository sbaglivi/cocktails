import { useState } from "react";
import styles from './SearchForm.module.css';

const SearchForm = ({handleSubmit}) => {
    const [text,setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(text);
    }
    return (
        <form onSubmit={onSubmit}>
            <input className={styles.textInput} type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Search for a cocktail'/>
            <button>Search</button>
        </form>
    )
}

export default SearchForm;