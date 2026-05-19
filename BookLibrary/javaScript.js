   $('.hid').hide();
        $('.shown').on('click' , function(){
            $('.shown').hide(1000)
            $('.hid').fadeIn(3000)
        })
        $('.hid').on('click' , function(){
            $('.hid').hide();
            $(this).show();
            $(this).animate({
                width: 750,
                opacity: 0.5,
            })

        });

 let btnIn1 = document.getElementById('Education')
      let btnIn2 = document.getElementById('horror')
      let btnIn3 = document.getElementById('Romance')
      let btnIn4 = document.getElementById('Fantasy')
      let btnIn5 = document.getElementById('Fairy')
      let btnIn6 = document.getElementById('for Children')
      let input = document.getElementById('In')
      let sub = document.getElementById('Su')
      let search = ''
      let out = document.getElementById('output')

  async function getbooks() {
    try {
        let response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${search}`
        );
        let data = await response.json();
        console.log(data.items[1].volumeInfo.imageLinks);
        let m = data.items;
        out.innerHTML = '';
        for (let i = 1; i < 6; i++) {
            out.innerHTML += `  
            <div>
                <img src="${m[i].volumeInfo.imageLinks.thumbnail}" />
                <h4>Book Title: ${m[i].volumeInfo.title}</h4>
                <h4>Author: ${m[i].volumeInfo.authors}</h4>
                <p>
                    Book Description:
                    ${m[i].volumeInfo.description}
                </p>
                <h4>
                    Published Date:
                    ${m[i].volumeInfo.publishedDate}
                </h4>
                <a href="${m[i].volumeInfo.previewLink}" target="_blank">
                    Book Preview
                </a>
            </div>  `;
        }
    } catch (error) {
        console.log("Error fetching books:", error);
    }
}

      btnIn1.addEventListener('click',function(e){
       e.preventDefault();
       search = btnIn1.innerHTML;
       getbooks()                 
       })

       btnIn2.addEventListener('click',function(e){
       e.preventDefault();
       search = btnIn2.innerHTML;
       getbooks()                 
       })

       btnIn3.addEventListener('click',function(e){
       e.preventDefault();
       search = btnIn3.innerHTML;
       getbooks()                 
       })

       btnIn4.addEventListener('click',function(e){
       e.preventDefault();
       search = btnIn4.innerHTML;
       getbooks()                 
       })

       btnIn5.addEventListener('click',function(e){
       e.preventDefault();
       search = btnIn5.innerHTML;
       getbooks()                 
       })

       btnIn6.addEventListener('click',function(e){
       e.preventDefault();
       search = btnIn6.innerHTML;
       getbooks()                 
       })
        
       input.addEventListener('change',function(e){
        e.preventDefault();
        search = e.target.value;                 
       })
       Su.addEventListener('click',function(e){
       e.preventDefault();
       getbooks()                 
       })