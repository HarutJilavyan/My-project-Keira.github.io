var textDisplay = document.getElementById('text')
var words = ['FREELANCER', 'DESIGHNER',]
var i = 0;
var j = 0;
var currentword = []
var isDeleting = false
var isEnd = false

var typing_interval = setInterval(loop,200);

function loop () {
    var splitText = words[j].split('')
    // console.log(splitText)
    textDisplay.innerText +=  splitText[i]
    //$('#text').append(splitText[i]);
    i++
    if(i == splitText.length){
        clearInterval(typing_interval);
        del_interval = setInterval(del, 200)
    }
}

function del (){
    if(textDisplay.innerText.length != 0){
        sliceWord = textDisplay.innerText.slice(0,-1);
        textDisplay.innerText = sliceWord
    }
        else{
            clearInterval(del_interval);
            i = 0;
            j++;
            if(j == words.length){
                j = 0;
            }
            typing_interval = setInterval(loop,200)
        }
    
    //console.log(sliceWord)
}

$('.menu_li>a').on('click', function(e){
    e.preventDefault();
    var text = $(this).text().trim().toLowerCase();
    var top_scroll = $('#'+text).offset().top;
    $('html, body').animate({
        scrollTop:top_scroll
    },500)
    console.log(top_scroll)
})

$(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 300){
        $('.up_arrow').addClass('.up_arrow_opacity');
    }
        else{
            $('.up_arrow').removeClass('.up_arrow_opacity');
        }
    if(scrollTop > 100){
        $('header').addClass('header_fixed');
    }   
        else{
            $('header').removeClass('header_fixed');
        }
})

$('.up_arrow').on('click', function(){
    $('html, body').animate({
        scrollTop:0
    }, 1000)

})

$('#keira_btn').on('click', function (){
    $('html, body').animate({
        scrollTop:5000
    })
    $(this).animate({
       'top':'10px',
       'opacity':'0',
    },1000, function(){
        $('#keira').animate({
            'top':'-100%',
        },3000, function(){})
            $('#red_keira').animate({
                'top':'0%',
                'height':'100%'
            },2000,function(){
                $('#red_keira').animate({
                    'height':'0'
                })
                $('html, body').animate({
                    scrollTop:0
                },1000)
            })
  });
})