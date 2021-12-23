//Adicionando o jQuery na página pelo Javascript
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js'
script.type = 'text/javascript'
document.getElementsByTagName('head')[0].appendChild(script)

window.addEventListener('load', () => {
    let v = 0
    const t = 500
    $('.config').click(function() {
        $(this).attr('disabled', true)
        $('.box-config').fadeIn(t)
        $('.box-config').css('display', 'flex')

        for(let i = 0; i === 0; i++) {
            const intervalo = setInterval(() => {
                v += 1
                $('.contagem').html('fechando menu em ' + v + '/30s')

                if(v === 31) {
                    $(this).attr('disabled', false)
                    $('.box-config').fadeOut(t)
                    clearInterval(intervalo)
                    v = 0
                } 
            }, 1000)
        }
    })

    $('.App').click(() => {
        $('.config').attr('disabled', false)
        $('.box-config').fadeOut(t)
    }) 

    $('.buy').click(() => {
        location.href='data.html'
    })
})