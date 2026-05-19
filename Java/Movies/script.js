'use strict';

// https://www.omdbapi.com/?s=life&apikey=67ec90b6

const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const outPut = document.getElementById('out-put')

let searchValue = 'friends'
let myKey = '67ec90b6'

function getMovies() {
    var getRequest = new XMLHttpRequest()
    getRequest.open('GET', `https://www.omdbapi.com/?s=${searchValue}'&apikey=${myKey}`)
    
    getRequest.responseType = 'json'

    getRequest.send()

    getRequest.onload = function () {
        if (getRequest.status >= 200 && getRequest.status < 300) { //201 => 300
            let fMovies = getRequest.response.Search
            outPut.innerHTML = ' '
            for (let i = 0; i < 12; i++) {
                let outputCard = document.createElement("div");
                outPut.appendChild(outputCard);
                outputCard.innerHTML = `
                <div class="card">
                <h3>${fMovies[i].Title || 'not found'}</h3>
                <p>${fMovies[i].Year}</p>
                <p>${fMovies[i].Type}</p>               
                <img src='${fMovies[i].Poster}'></img>
                </div>`
 			}
        }
        else{
            alert('get a request')
        }
    }

}

getMovies()

searchInput.addEventListener('change', (e)=>{
    e.preventDefault()
    searchValue = e.target.value;
})

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    getMovies()
})