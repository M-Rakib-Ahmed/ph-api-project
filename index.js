// 1 Fetch, load and categories on thml

// create loadCategories
const loadCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
    
}
const loadVideos = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
        .then(data => displayVideo(data.videos))
        .catch(error => console.log(error))
    
}

const displayVideo = (video)=>{
    const videoContainer = document.querySelector('#videos')
    console.log(video);
    // create card here
    video.forEach(video => {
        console.log(video);
        const card = document.createElement('div');
        card.classList = "card card-compact"
        card.innerHTML = `
       
  <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
   
    </div>
  </div>
</div>
        
        `;
        videoContainer.append(card)
        
    });
    
}


// Create DisplayCategories
const displayCategories = (categories)=>{
    const categoryContainer = document.querySelector('#categories');
    categories.forEach((item)=> {
        // create a button
        const button = document.createElement('button')
        button.classList = "btn";
        button.innerText = item.category;
        categoryContainer.append(button)
        
    })
 
}



loadCategories();
loadVideos();
