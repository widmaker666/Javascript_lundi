// Fonctionnalité 6 //
// Resizing Cards //

resizing_cards = function(){
    let cards = document.querySelectorAll('.card')
    let image = document.querySelectorAll('img')
    let small_size_arr = []
    
    for(i = 0; i < cards.length; i++){
      small_size_arr.push(false)
    }
    
    for(let i = 0; i < cards.length; i++){
      let edit_btn = cards[i].querySelectorAll('.btn')[0]
      edit_btn.addEventListener('mouseover', function(){
    
        let text = cards[i].querySelectorAll('.card-text')[0]
    
        if(small_size_arr[i] == false){
            text.style.display = 'none'
            image[i].style.width = "20%"
            small_size_arr[i] = true
          } else {
            text.style.display = 'block'
            image[i].style.width = "100%"
            small_size_arr[i] = false
          }
        })
    }
  }
  
  resizing_cards()
  
  
  
  // Fonctionnalité 7 //
  // Moving Cards //
  
  moving_cards_right = function(){
    let arrow_btn_droit = document.getElementsByTagName('a')[5]
    let cards = document.querySelectorAll('.card')
    arrow_btn_droit.addEventListener("click", function(){
      
      let parent_node = document.getElementsByClassName('row')[1]
      let child_node = parent_node.children
    
      l = cards.length - 1
      parent_node.insertBefore(child_node[l], child_node[0])
    })
  }
  
  moving_cards_right()
  
  
  
  // Fonctionnalité 8 //
  // Moving Cards //
  
  moving_cards_left = function(){
    let arrow_btn_gauche = document.getElementsByTagName('a')[4]
  
    arrow_btn_gauche.addEventListener("click", function (e) {
      // link disabled
      e.preventDefault()
  
      // Moving Cards
      let parent_node = document.getElementsByClassName('row')[1]
      let new_div = document.createElement('div')
  
      // First: Moving the first Card at the end
      current_class = parent_node.children[0].classList.value
      new_div.classList.add(`${current_class}`)
      parent_node.appendChild(new_div)
      let child_node = parent_node.children[0].getElementsByClassName('card')[0]
      new_div.appendChild(child_node)
  
      // Deleting the empty first card
      parent_node.removeChild(parent_node.children[0])
  
    })
  }
  
  moving_cards_left()
  
  
  
  // Fonctionnalité 9 //
  // Layout in 4 columns //
  
  updating_layout = function(){
    logo_txt = document.querySelector("header").getElementsByTagName("div")[5].getElementsByTagName("a")[0].getElementsByTagName("strong")[0]
    
  
    document.addEventListener("keydown", function(e){
      selection = window.getSelection().toString()
      key = e.key
      main = document.getElementsByClassName('container')[3]
      if(selection == "JS & Events" && e.key){
        if(key == 'a'){
          // condensé sur 4 colonnes Bootstrap à gauche de l'écran
          main.style.marginLeft = "0"
          column_change(3)
        } else if(key == 'y'){
          //l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
          main.style.marginLeft = "auto"
          main.style.marginRight = "auto"
          column_change(3)
        } else if(key == 'p'){
          //l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
          main.style.marginRight = "0"
          main.style.marginLeft = "auto"
          column_change(3)
        } else if (key == 'b'){
        // tout redevient normal.
          main.style.marginLeft = "auto"
          main.style.marginRight = "auto"
          column_change(4)
        } 
      } else {
        console.log("The text selected is not correct")
      }
    })
  
    column_change = function(new_col){
      let = i
      for(i = 0; i < 6; i++){
        let main = document.getElementsByClassName('row')[1].children[i]
        main.className = `col-md-${new_col}`
      }
    }
  }
  
  
  updating_layout()