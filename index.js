// 1 Fetch, load and categories on thml

// create loadCategories
const loadCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
    
}


// Create DisplayCategories
const displayCategories = (categories)=>{
    const categoryContainer = document.querySelector('#categories');
    categories.forEach((item)=> {
        console.log(item);
        // create a button
        const button = document.createElement('button')
        button.classList = "btn";
        button.innerText = item.category;
        categoryContainer.append(button)
        
    })
 
}



loadCategories();
