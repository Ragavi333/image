const accesskey     = "3Wmj-AvU2N0m5bazPCsiHYdkVeaivmABzrs_ZbrlowA"
const formE1        = document.querySelector("form")
const inputE1       = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore      = document.getElementById("show-more-button")

let inputData = ""
let page      = 1;

async function searchImages(){
          inputData = inputE1.value;
    const url       = 'https:/api.unsplash.com/search/photos?page=${page}$query=${inputData}&client_id=${accessKey}'
    const response = await fetch(url)
    const data = await response.json()
    const results = data.results
    if (page === 1)
    {
        searchResults.innerHTML =""
    }
    results.map ((resut)=>{
        const imageWrapper = document.createElement ('div')
    })

}