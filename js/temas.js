//Adicionando o jQuery na página pelo Javascript
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

window.addEventListener('load', () => {

  //Padrão
  $('#de').click(original = () => {
    $('body').css('background', '#6959CD')
    $('.app-box').css('background', 'rgb(128, 112, 230)')

    const button = document.querySelectorAll("button")
    for(i = 0; i < button.length; i++){
      button[i].style.background="white"
      button[i].style.borderBottomColor="silver"
      button[i].style.color="#6959CD"
    }

    $('.theme-box').css('background', 'white')

    const btnThemes = document.querySelectorAll(".themes")
    for(i = 0; i < btnThemes.length; i++){
      if(i > 0){
        btnThemes[i].style.background="silver"
        btnThemes[i].style.color="white"
      } else{
        btnThemes[i].style.background="#6959CD"
      }
    }

    $('.social-box').css('background', 'white')
  })


  //Black
  $('#bk').mousemove(() => {
    $('body').css('background', '#1c1c1c')
      $('.app-box').css('background', '#3d3d3d')
    
      const button = document.querySelectorAll("button")
      for(i = 0; i < button.length; i++){
        button[i].style.background="#141414"
        button[i].style.borderBottomColor="black"
        button[i].style.color="whitesmoke"
      }
    
      $('.theme-box').css('background', 'black')
      
      const btnThemes = document.querySelectorAll(".themes")
    
      for(i = 0; i < btnThemes.length; i++){
        if(i < 1 || i > 1){
          btnThemes[i].style.background="#3d3d3d"
        } else{
          btnThemes[i].style.background="white"
          btnThemes[i].style.color="black"
        }
      }
      
      $('.social-box').css('background', 'black')

      for(let v = true; v === true; v++) {
        const contagem = setInterval(() => {
            original()
            clearInterval(contagem)
        }, 5000)
      }
  })


  //Coral
  $('#cr').click(() => {
    $('body').css('background', '#CD5C5C')
    $('.app-box').css('background', '#f08080')

    const button = document.querySelectorAll("button")
    for(i = 0; i < button.length; i++){
      button[i].style.background="white"
      button[i].style.borderBottomColor="silver"
      button[i].style.color="#CD5C5C"
    }

    $('.theme-box').css('background', 'white')
    
    const btnThemes = document.querySelectorAll(".themes")
    for(i = 0; i < btnThemes.length; i++){
      if(i < 2 || i > 2){
        btnThemes[i].style.background="silver"
        btnThemes[i].style.color="white"
      } else{
        btnThemes[i].style.background="#CD5C5C"
      }
    }

    $('.social-box').css('background', 'white')
  })


  //Coffe
  $('#co').mousemove(() => {
    $('body').css('background', '#d2b48c')
    $('.app-box').css('background', '#f5deb3')

    const button = document.querySelectorAll("button")
    for(i = 0; i < button.length; i++){
      button[i].style.background="white"
      button[i].style.borderBottomColor="silver"
      button[i].style.color="#D2B48C"
    }

    $('.theme-box').css('background', 'white')
    
    const btnThemes = document.querySelectorAll(".themes")
    for(i = 0; i < btnThemes.length; i++){
      if(i < 3 || i > 3){
        btnThemes[i].style.background="silver"
        btnThemes[i].style.color="white"
      } else{
        btnThemes[i].style.background="#D2B48C"
      }
    }

    $('.social-box').css('background', 'white')

    for(let v = true; v === true; v++) {
      const contagem = setInterval(() => {
          original()
          clearInterval(contagem)
      }, 5000)
    }
  })

  
  //Green
  $('#gr').mousemove(() => {
    $('body').css('background', '#2e8b57')
    $('.app-box').css('background', '#3cb371')

    const button = document.querySelectorAll("button")
    for(i = 0; i < button.length; i++){
      button[i].style.background="white"
      button[i].style.borderBottomColor="silver"
      button[i].style.color="#2E8B57"
    }

    $('.theme-box').css('background', 'white')
    
    var btnThemes = document.querySelectorAll(".themes")
    for(i = 0; i < btnThemes.length; i++){
      if(i < 4 || i > 4){
        btnThemes[i].style.background="silver"
        btnThemes[i].style.color="white"
      } else{
        btnThemes[i].style.background="#2E8B57"
      }
    }

    $('.social-box').css('background', 'white')

    for(let v = true; v === true; v++) {
      const contagem = setInterval(() => {
          original()
          clearInterval(contagem)
      }, 5000)
    }
  })


  $('.pay').click(() => {
    location.href='dados.html'
  })
})
