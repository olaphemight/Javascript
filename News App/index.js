const cards = document.querySelector(".cards");
const categories = document.querySelector(".categories");
const categorySpan = document.querySelectorAll(".categories span");

const baseUrl ="https://newsapi.org/v2"
const apiKey = "&apiKey=ef5f528ef8da4ec48132bc687dcf2755";


const backupImage = "./images/1 (1).jpg";

// 

async function dataRequest(url){
    try{
        const response = await fetch(baseUrl + url + apiKey);
        const data = response.json();
        return data;
    }
    catch(error){
        console.log(error);
    }
}

function urlRequest(url) {
  dataRequest(url).then(data => {
    // console.log(data.articles);
    data.articles.forEach(items => {
        // console.log(items);
        cards.innerHTML += `<div class="card m-3 flex-column flex-md-row  p-2 ">
                        <div class="image m-auto">
                            <img src="${items.urlToImage ? items.urlToImage : backupImage }" alt="Defaul image">
                        </div>
                        <div class="information my-3 ms-0 mx-sm-4 d-flex flex-column justify-content-between">
                            <div>
                                <p class="title fw-bold fs-5 ">${items.title}</p>
                                <p class="description lh-1 opacity-75">${items.description}</p>
                                <p class="time lh-1 d-flex gap-2 opacity-50">
                                    <span>${items.publishedAt.replace("Z", "").split("T")[1]}</span>
                                    <span>${items.publishedAt.replace("Z", "").split("T")[0]}</span>
                                </p>
                            </div>
                            <div class="other d-flex flex-row justify-content-between flex-wrap gap-2">
                                <span class="source bg-primary opacity-75 p-1 rounded text-white">${items.source.name}</span>
                                <a class="url" href="${items.url}">Read Articles<i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        </div>`;

    })
  });
 
};

categories.addEventListener("click", event => {
    console.log(event.target);
    if (event.target.tagName=== "SPAN"){
        cards.innerHTML = "";
        urlRequest(event.target.dataset.id);
        categorySpan.forEach(item => item.classList.remove("active"));
        event.target.classList.add("active");
        
    }
})

urlRequest("/top-headlines?country=us&category=business");