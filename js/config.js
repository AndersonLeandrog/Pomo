window.addEventListener('load', () => {
    let click = 0
    const t = 500
    $('.config').click(() => {
        click++
        if(click > 1) {
            click = 0
            $('.box-config').fadeOut(t)
            clearInterval(intervalo)
        }  
        $('.box-config').fadeIn(t).attr('style', 'display: flex;')
    })

    $('.App').click(() => {
        $('.box-config').fadeOut(t)
    }) 

    $('.buy').click(() => {
        location.href='data.html'
    })
})