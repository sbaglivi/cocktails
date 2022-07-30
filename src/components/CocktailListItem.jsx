function getIngredientList(drink) {
    let ingredientList = [];
    for (let i = 1; i < 15; i++){
        if(!drink[`strIngredient${i}`])
            break;
        ingredientList.push(drink[`strIngredient${i}`]);
    }
    return ingredientList;
}

const CocktailListItem = ({drink}) => {
    const ingredientList = getIngredientList(drink);
    return (
       <>
        <div style={{width: 100, height: 100}}>
            <img style={{height: '100%', width: '100%'}} src={drink.strDrinkThumb} alt={drink.strDrink}/>
        </div>
        <h3>{drink.strDrink}</h3>
        <p>{drink.strAlcoholic}</p>
        <ul>
            {ingredientList.map(ingredient => <li>{ingredient}</li>)}
        </ul>
       </> 
    )
}

export default CocktailListItem;