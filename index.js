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
        card.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
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
