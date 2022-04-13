let navItems = false;

$('#ham-icon').click(() => {
    if (!navItems) {
        $('.nav-items').css('display', 'block');
        navItems = true;
    }else{
        $('.nav-items').css('display', 'none');
        navItems = false;
    }
})

$(window).resize(() => {

    if(window.innerWidth >= 592){
        $('.nav-items').css('display', 'block');
    }
    
})