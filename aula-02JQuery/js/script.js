//le o documento primeiro
$(document).ready(function(){
    //aponta os elementos e armazena na variavel
    const mario = $('.mario')
    const pipe = $('.pipe')

    //funcao do pulo
    const pulo = () => {
        mario.addClass('pulo')

        setTimeout(() =>{

            mario.removeClass('pulo')
    
        }, 500)
    }

    const loop =  setInterval (() => {

        //vai ver a posicao da direita do pipe e depois vai ver a posicao de baixo do mario
        const pipePosition = pipe.offset().left
        const marioPosition = parseInt(mario.css('bottom'))
    
        //se essa condicao dor true
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    
            //o pipe vai parar de andar
            pipe.css('animation', 'none')
            pipe.css('left', `${pipePosition}px`) 
    
            //mario vai parar de andar tbm na posicao q ele encosta no pipe
            mario.css('animation', 'none')
            mario.css('bottom', `${marioPosition}px`)
    
            //o mario vai mudar
            mario.attr('src', 'img/game-over.png') 
            mario.css('width', '75px')
            mario.css('marginLeft', '50px')
    
            //para o loop
            clearInterval(loop)
        }
    }
    , 10)

    //quando clicarem vai chamar a funcao
    $(document).keydown(pulo)
})

