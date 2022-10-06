const loadSingleUser = () =>{
    const url = `https://randomuser.me/api/`;
    fetch(url)
    .then(res => res.json())
    .then( data => displaySingleUser(data.results[0]))
}

loadSingleUser();

const displaySingleUser = user =>  {
    console.log(user)
}

// Meal db
 const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
    document.getElementById('search-field').value = '';
}


const loadMeals = searchText =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{

    const conatainer = document.getElementById('meals');
    conatainer.textContent='';
    meals.forEach( meal => {
        const div = document.createElement('div');
        div.innerHTML =`
        <h1>${meal.strMeal}</h1>
        <button onclick="loadMealDetail('${meal.strMeal}')" >click ME</button>
        `;
        conatainer.appendChild(div)
})


}

loadMeals('fish');


const loadMealDetail = mealNmae =>{
    console.log(mealNmae)
}