$(document).ready(function(){
        $('#gtt').hide()

        $(window).scroll(function(){
            if($(this).scrollTop() > 200){
                $('#gtt').fadeIn()
            }
            else{
                $('#gtt').fadeOut()
            }
        })

        $('#gtt').click(function(){
            $('html, body').animate({
                scrollTop:0
            },1000)
        })
})