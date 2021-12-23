var script = document.createElement('script')
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js'
script.type = 'text/javascript'
document.getElementsByTagName('head')[0].appendChild(script)

window.addEventListener('load', () => {
  const defaul = $('.de')
  const black = $('.bk')
  const coral = $('.cr')
  const coffe = $('.co')
  const green = $('.gr')

  //Default
  $(defaul).click(original = () => {
    $('body').css('background', '#6959CD')
    $('.app-box').css('background', 'rgb(128, 112, 230)')

    const button = document.querySelectorAll("button")
    for(i = 0; i < button.length; i++){
      button[i].style.background="white"
      button[i].style.borderBottomColor="silver"
      button[i].style.color="#6959CD"
    }

    $(defaul).css('background', '#6959CD')
    $(black).css('background', 'silver')
    $(coral).css('background', 'silver')
    $(coffe).css('background', 'silver')
    $(green).css('background', 'silver')

    $('.social-box').css('background', 'white')
  })


  //Black
  $(black).click(() => {
    $('body').css('background', '#1c1c1c')
      $('.app-box').css('background', '#3d3d3d')
    
      const button = document.querySelectorAll("button")
      for(i = 0; i < button.length; i++){
        button[i].style.background="#141414"
        button[i].style.borderBottomColor="black"
        button[i].style.color="whitesmoke"
      }

      $(defaul).css('background', 'silver')
      $(black).css('background', 'white')
      $(coral).css('background', 'silver')
      $(coffe).css('background', 'silver')
      $(green).css('background', 'silver')
      
      $('.social-box').css('background', 'black')

      for(let v = true; v === true; v++) {
        const contagem = setInterval(() => {
            original()
            clearInterval(contagem)
        }, 5000)
      }
  })


  //Coral
  $(coral).click(() => {
    $('body').css('background', '#CD5C5C')
    $('.app-box').css('background', '#f08080')

    const button = document.querySelectorAll("button")
    for(i = 0; i < button.length; i++){
      button[i].style.background="white"
      button[i].style.borderBottomColor="silver"
      button[i].style.color="#CD5C5C"
    }

    $(defaul).css('background', 'silver')
    $(black).css('background', 'silver')
    $(coral).css('background', 'coral')
    $(coffe).css('background', 'silver')
    $(green).css('background', 'silver')

    $('.social-box').css('background', 'white')
  })


  //Coffe
  $(coffe).click(() => {
    $('body').css('background', '#d2b48c')
    $('.app-box').css('background', '#f5deb3')

    const button = document.querySelectorAll("button")
    for(i = 0; i < button.length; i++){
      button[i].style.background="white"
      button[i].style.borderBottomColor="silver"
      button[i].style.color="#D2B48C"
    }

    $(defaul).css('background', 'silver')
    $(black).css('background', 'silver')
    $(coral).css('background', 'silver')
    $(coffe).css('background', '#D2B48C')
    $(green).css('background', 'silver')

    $('.social-box').css('background', 'white')

    for(let v = true; v === true; v++) {
      const contagem = setInterval(() => {
          original()
          clearInterval(contagem)
      }, 5000)
    }
  })

  
  //Green
  $(green).click(() => {
    $('body').css('background', '#2e8b57')
    $('.app-box').css('background', '#3cb371')

    const button = document.querySelectorAll("button")
    for(i = 0; i < button.length; i++){
      button[i].style.background="white"
      button[i].style.borderBottomColor="silver"
      button[i].style.color="#2E8B57"
    }

    $(defaul).css('background', 'silver')
    $(black).css('background', 'silver')
    $(coral).css('background', 'silver')
    $(coffe).css('background', 'silver')
    $(green).css('background', '#2E8B57')

    $('.social-box').css('background', 'white')

    for(let v = true; v === true; v++) {
      const contagem = setInterval(() => {
          original()
          clearInterval(contagem)
      }, 5000)
    }
  })
})
