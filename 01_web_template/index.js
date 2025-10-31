var currentPage = '#page5'

//P5 setup() bliver kaldt EN gang før siden vises
function setup(){
    console.log("p5 setup kaldt")
    //skift til current page
    shiftPage(currentPage)
    //sæt menu op
    //Hent alle sider som et nyt array
    var allPages=selectAll('.page')
    //sæt a taggetsnhtml til sidens titel
    //Løb listen igennem en for en
    allPages.map(
        page => {
            //lav et nyt <a> element
            var menuItem = createElement('a')
            menuItem.html(page.attribute('title'))
            //sæt eventlister på a tagget
            menuItem.mousePressed(
                ()=> shiftPage('#' + page.attribute('id'))
            )
            //sæt a tagget ind i sidebaren
            select('.sidebar').child(menuItem)
        }
    )

}


function shiftPage(newPage){
    select(currentPage).removeClass('show')
    select(newPage).addClass('show')
    currentPage = newPage
}
