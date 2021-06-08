$(document).ready(function(){
   
  
  
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() > 100){
            
            $('#scrollup').fadeIn();
            
        }else{
            $('#scrollup').fadeOut();
        }
        
        
        $('#scrollup').click(function(){
           
            $('html.body').animate({scrollTop:0}, 'slow');
            
        });
        
        
        
        
    });
    
    
    
    
    $("#showBtn ").keyup(function(){
        
        $("#send").show();
        
        
    });
    
    
    
    
    
    
    
    
    
});








var conFirm = document.getElementById("send");

conFirm.addEventListener("click",function(){
    
    confirm("Are You Sure?");
    
    
})



var pre = document.getElementById('loading');

function preloader(){
    pre.style.display='none';
    
}





