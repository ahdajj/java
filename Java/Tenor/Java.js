let out = document.getElementById('img');
let search = document.getElementById('in');
let form= document.getElementById('form')
let searchVal = 'random';


async function Display (search){
 try {
        let response = await fetch(
            `https://tenor.googleapis.com/v2/search?q=${search}&key=AIzaSyCnGfe6h0cxViWMV4h9cdEanXNiWXjwaJk&client_key=AIzaSyCnGfe6h0cxViWMV4h9cdEanXNiWXjwaJk&limit=8`
        );
        let data = await response.json();
        console.log('Server response:', data.results);
        let m = data.results;
        m.forEach(element => {
            out.innerHTML += `           
            <img 
                src="${element.media_formats.tinygif.url}" 
                alt="gif"
            >`;
        });
    } catch (error) {
        console.log('Error fetching gifs:', error);
    }
}

Display(searchVal)

form.addEventListener('submit', function (e) {
    e.preventDefault();
    out.innerHTML = '';      // Empty display
    search.value = '';       // Clear search bar
    Display(searchVal)

});

search.addEventListener('change', (e)=>{               // to add the input value to the url above
  e.preventDefault()
  searchVal = e.target.value;
  console.log(searchVal)
});