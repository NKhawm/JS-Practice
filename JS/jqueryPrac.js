/*$(document).ready(function(){


    for (let i=1; i<17; i++){
        let delay = i*100;
   
   
   $('.hide').click(function(){
    $(`.box:nth-child(${i})`).animate({
        opacity:'0',
        left:'0px',

    },delay);
});

$('.show').click(function(){
    $(`.box:nth-child(${i})`).animate({
        opacity:'1',
        left:'0px',

    },delay);


    
});
}

}); */

//
$(document).ready(function(){
    $('.hide').click(function(){
        $('.box').hide(2000).fadeTo('slow')
    });
    $('.show').click(function(){
        $('.box').show(2000).fadeIn('slow')
    })
})

//Get content  and attributes
//text().html(),val()

/*$(document).ready(function(){
    $('.showMe').click(function(){
        var p = $('h1').text()
        alert(p)
    })
})*/

/*$(document).ready(function(){
    $('.showMe').click(function(){
        var p = $('p').html()
        alert(p)
    })
})*/
/*$(document).ready(function(){
    $('.showMe').click(function(){
        var b = $('.third').val()
        alert(b)
    })
})*/
$(document).ready(function(){
    $('#btn').click(function(){
        var a = $('.third').text()
    
        alert('Hello' + a)

    })
})

$(document).ready(function(){
    $('.button').click(function(){
        alert($('#google').attr('href'))
    })
})

//Set content 
// text(''),html(''),val('')

$(document).ready(function(){
    $('.show-value').click(function(){
         $('h1').text('Mingalarbar');
        
    })
})

$(document).ready(function(){
    $('.show-value').click(function(){
         $('h1').html('Dam maw');
        
    })
})

$(document).ready(function(){
    $('#mybtn').click(function(){
         $('#name').val('Welcome Jquery');
        
    })
})

//append ==adding content
 $(document).ready(function(){
     $('.showT').click(function(){
          $('#append').append('   နေကောင်းပါတယ်၊ ကျေးဇူးတင်ပါတယ်ရှင်');
        
     })
 })

//prepand
$(document).ready(function(){
    $('.showT').click(function(){
         $('h1').prepend('   နေကောင်းပါသလားရှင်    ');
        
    })
})

//Practice
$(document).ready(function(){
    $('.slideup').click(function(){
        $('img').slideUp();

    })
   
    $('.slidedown').click(function(){
        $('img').slideDown();

    })

    $('.slidetoggle').click(function(){
        $('img').slideToggle('slow');

    })
    $('.fadeout').click(function(){
        $('img').show(2000).fadeOut('7000');

    })

    $('.fadein').click(function(){
        $('img').fadeIn();

    })

    

    $('.fadetoggle').click(function(){
        $('img').fadeToggle();

    })


//adding class (.addClass)

    $('#mybtn').click(function(){
         $('h1,p').addClass('blue');
        
    })
 //remove class(.removeClass)
    $('#mybtn').click(function(){
        $('h1,p').removeClass('blue');
       
   })

// add and remove (.toggleClass)

})


//Practice calculating
$(document).ready(function(){
    $(':input').bind('keypress keydown keyup change',function(){
        let num = 0;
        for(let i = 1; i <= 5 ; i++){
            num = num + parseInt($(`#num${i}`).val());
        }
        $('#total').text(num + ' % ');
    });
});

//search bar
/*$(documnet).ready(function(){
    $('#search').on('keyup',function(){
        var value = $(this).val().toLowerCase();
        $('#myUL li').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)       
        });
    });
});*/

$(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myUl li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  









