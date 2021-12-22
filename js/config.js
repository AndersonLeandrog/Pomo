//Adicionando o jQuery na página pelo Javascript
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js'
script.type = 'text/javascript'
document.getElementsByTagName('head')[0].appendChild(script)

window.addEventListener('load', () => {
    let v = 0
    $('.config').click(() => {
        $('.box-config').fadeIn()
        $('.box-config').css('display', 'flex')

        for(let i = 0; i === 0; i++) {
            const intervalo = setInterval(() => {
                v += 1
                $('.contagem').html('fechando menu em ' + v + '/30s')

                if(v === 31) {
                    $('.box-config').fadeOut(500)
                    clearInterval(intervalo)
                    v = 0
                } 
            }, 1000)
        }
    })

    $('.buy').click(() => {
        location.href='data.html'
    })
})