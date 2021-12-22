//Adicionando o jQuery na página pelo Javascript
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js'
script.type = 'text/javascript'
document.getElementsByTagName('head')[0].appendChild(script)

window.addEventListener('load', () => {
    const box = $('<div>')
    $(box)
    .attr('style',`
      position: absolute;
      width: 500px; 
      height: 200px; 
      margin-top: 20%; 
      border-radius: 5px; 
      background: #d3d3d3; 

      color: #3d3d3d;  
      padding: 10px; 
      text-align: justify; 
      
      box-shadow: 0px 1px 12px -3px #000000;
      -webkit-box-shadow: 0px 1px 12px -3px #000000; 

      display: flex; 
      flex-direction: column; 
      justify-content: space-between; 
      align-items: center;
    `)

    const textBox = $('<div>')
    $(textBox)
    .append(`
      Olá, seja bem vindo ao aplicativo TakeFocus! 🎄
      Esse aplicativo é desenvolvido em HTML, CSS e Javascript e jQuery, e
      ainda está sofrendo alguns ajustes, mas logo estará finalizado.
                                                  
      Se gostar do aplicativo, por favor não deixe de me seguir no
      GITHUB: GITHUB.COM/ANDERSONLEANDROG - e não se esqueça de 
      dar um feedback lá na plataforma, isso me ajuda muuuuito! \u2764
    `)

    $(textBox)
    .attr(
      'style', 
      `width: 98%;
       height: 152px;
       border-radius: 5px;
       background: #f5f5f5;

       display: flex;
       justify-content: center;
       align-items: center;
       padding: 5px;`
    )
  
    const fechar = $('<div>')
    $(fechar).append('\u2716')

    $(fechar)
    .attr(
      'style',
      `cursor: pointer;
       width: 98%;
       border-radius: 5px;
       text-align: end;`
    )
  
    $(box).append(fechar)
    $(box).append(textBox)
    $('body').append(box)
  
    $(fechar).click(() => {
      $(box).hide()
    })
  })