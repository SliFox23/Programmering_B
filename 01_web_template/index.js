var currentPage = '#page5'

//P5 setup() bliver kaldt EN gang før siden vises
function setup(){
    console.log("p5 setup kaldt")
    //sæt event listeners op på menu
    select('#menu-side1').mousePressed(
        function(){
            shiftPage('#page1')
        }
    )
}


function shiftPage(newPage){
    select(currentPage).removeClass('show')
    select(newPage).addClass('show')
    currentPage = newPage
}
