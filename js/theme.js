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
    $('.app-box').css('background', '#8070E6')
    $('.de').css('background', '#6959CD')
    $('.bk').css('background', '#C0C0C0')
    $('.cr').css('background', '#C0C0C0')
    $('.co').css('background', '#C0C0C0')
    $('.gr').css('background', '#C0C0C0')
  })


  //Black
  $(black).click(() => {
    $('body').css('background', '#1C1C1C')
      $('.app-box').css('background', '#3D3D3D')
      $(defaul).css('background', 'silver')
      $(black).css('background', 'white')
      $(coral).css('background', 'silver')
      $(coffe).css('background', 'silver')
      $(green).css('background', 'silver')

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
    $(defaul).css('background', 'silver')
    $(black).css('background', 'silver')
    $(coral).css('background', 'coral')
    $(coffe).css('background', 'silver')
    $(green).css('background', 'silver')
  })


  //Coffe
  $(coffe).click(() => {
    $('body').css('background', '#d2b48c')
    $('.app-box').css('background', '#f5deb3')
    $(defaul).css('background', 'silver')
    $(black).css('background', 'silver')
    $(coral).css('background', 'silver')
    $(coffe).css('background', '#D2B48C')
    $(green).css('background', 'silver')

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
    $(defaul).css('background', 'silver')
    $(black).css('background', 'silver')
    $(coral).css('background', 'silver')
    $(coffe).css('background', 'silver')
    $(green).css('background', '#2E8B57')

    for(let v = true; v === true; v++) {
      const contagem = setInterval(() => {
          original()
          clearInterval(contagem)
      }, 5000)
    }
  })
})
