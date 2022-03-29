
//  $(document).ready(function(){
//      $('h1').hide(); //hide the heading
//      $('p:first').hide(2000).show(1000); //hide the first paragraph and show 
//      $('button').css('border','4px solid black').css('padding','5px').css('background-color','gray')
//      $('tr:even').css('color','white')
//      $('tr:odd').hide();
//      $('ul li:first').css('list-style','none')
//      $('*').css('background-color','skyBlue'); //select all
//  });
 
 //writing event

 //$(document).ready(function(){
    
   // $('#btn').click(function(){
              //$('h1').hide(); //hide the heading
            //   $('p:first').hide(2000).show(1000).css('color','white'); //hide the first paragraph and show 
            //   $('tr:even').css('color','white')
            //   $('tr:odd').hide();
            //   $('button').css('border','4px solid black').css('padding','5px').css('background-color','gray')
            //   $('ul li:first').css('list-style','none')
            //   $('*').css('background-color','skyBlue'); //select all
              //$('#para3').hide(3000).fadeIn(4000)
              //$('ul li:first').hide(7000).fadeIn('fast')
              //$('#para2').hide(7000).fadeToggle('speed')
              //$('.cube').hide(7000).fadeTo(0.6)
            //   $('#para3').hide().slideDown('slow')
            //   $('#para2').hide(2000).slideUp(7000)

              
              

//})
$(document).ready(function(){
$('#ani').click(function(){
    $('.cube').animate({
        borderRadius:'20px',
        right:'200px',
        opacity:'1',
        border:'4px solid white'},1000)
});

});
