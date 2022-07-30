import {useEffect, useReducer} from 'react';
import CocktailListItem from './CocktailListItem';

function cocktailReducer(state, action){
    switch(action.type){
        case 'pending':
            return {status: 'pending', error: null, data: null}
        case 'resolved':
            return {status: 'resolved', error: null, data: action.data};
        case 'rejected':
            return {status: 'rejected', error: action.error, data: null}
        default:
            throw Error(`Unknown action type: ${action.type}`)
    }
}

const ResultsBox = ({cocktailName}) => {
    const [state, dispatch] = useReducer(cocktailReducer, {status: 'idle', data: null, error: null})
    const {status, data:cocktailResults, error} = state;

    const getCocktailsByName = async cocktailName => {
        try {
            let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`); 
            let data = await response.json();
            return data;
        } catch (e) {
            console.log(`error while fetching data: ${e.message}`)
        } 
    }

    useEffect(()=>{
        if(!cocktailName)
            return
        dispatch({type: 'pending'});
        getCocktailsByName(cocktailName).then(
            data => {
                console.log(data.drinks)
                dispatch({type: 'resolved', data: data.drinks})
            },
            error => {
                dispatch({type: 'rejected', error})
            }
        )
    },[cocktailName]) 

    if (status === 'pending'){
        return <p>Loading</p>
    }
    if (status === 'rejected'){
        return <p>{error.message}</p>
    }
    if (status === 'idle'){
        return <p>Search for something! Try: margarita</p>
    }
    if (status === 'resolved'){
        return (
            <div>
                {cocktailResults.map(cocktail => <CocktailListItem key={cocktail.idDrink} drink={cocktail} />)} 
            </div>
        )
    }
}

export default ResultsBox;