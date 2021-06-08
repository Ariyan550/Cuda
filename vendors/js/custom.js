$(document).ready(function(){
   
    $(window).scroll(function(){
        
        var diveffect = $(document).scrollTop();
        console.log(diveffect);
        
        if((diveffect > 433) && (diveffect <1033)){
            
            
            $(".divone").addClass("animated slideInLeft");
           
        }
        
        
        
         if((diveffect > 450) && (diveffect <1033)){
            
            
            $(".divtwo").addClass("animated slideInLeft");
           
        }
        
        
         if((diveffect > 470) && (diveffect <1033)){
            
            
            $(".divthree").addClass("animated slideInRight");
           
        }
        
        
         if((diveffect > 500) && (diveffect <1033)){
            
            
            $(".divfour").addClass("animated slideInRight");
           
        }
        
        
        
         if((diveffect > 1150) && (diveffect <1660)){
            
            
            $(".divfive").addClass("animated flipInX");
            $(".divsix").addClass("animated flipInY");
            $(".divseven").addClass("animated slideInUp");
            $(".diveight").addClass("animated slideInDown");


             
           
        }
        
        
        if((diveffect >2960 ) && (diveffect <4000)){
           
           $(".aboutOne").addClass("animated rotateInUpRight");
            
           $(".aboutTwo").addClass("animated rotateInUpLeft");
            
            
               $(".aboutThree").addClass("animated rotateInDownRight");
            
           $(".aboutFour").addClass("animated rotateInDownLeft");
            
            
            
           
           }
        
        
        
        
        
        
        
        
        
        
    });
    
    
    
    
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





