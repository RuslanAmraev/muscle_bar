function chMargin(px){
    setTimeout(()=>document.getElementsByClassName('header_content_button_el')[0].style.marginRight = px+'px', 10)
    document.getElementsByClassName('header_content_button_el')[1].style.marginRight = px+'px'
}
