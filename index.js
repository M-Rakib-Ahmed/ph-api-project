// 1 Fetch, load and categories on thml
function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour}hour ${minute}minute ${remainingSecond}second ago`
}


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

const loadCategoryVideos= (id)=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data =>displayVideo(data.category))
    .catch(error => console.log(error))

}

const displayVideo = (video)=>{
    const videoContainer = document.querySelector('#videos')
    videoContainer.innerHTML = ""
    // create card here
    video.forEach(video => {
        const card = document.createElement('div');
        card.classList = "card card-compact"
        card.innerHTML = `
       
  <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
      ${video.others.posted_date ? `<span class="absolute right-2 bottom-2 text-white text-xs bg-black rounded p-1">${getTimeString(video.others.posted_date)}</span>`:""}
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
     <img class="size-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
    </div>

    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified ? `  <img  class="size-4"src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>`: ""}
    </div>
    <p></p>
    </div>
   
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
        const buttonContainer = document.createElement('div')
       buttonContainer.innerHTML = `
       <button onclick="loadCategoryVideos(${item.category_id})" class = "btn">
       ${item.category}
       </button>
       
       `
        categoryContainer.append(buttonContainer)
        
    })
 
}



loadCategories();
loadVideos();
