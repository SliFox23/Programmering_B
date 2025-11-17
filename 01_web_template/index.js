var currentPage = '#page5'
var videoButton, theVideo
var videoPlaying = true

//P5 setup() bliver kaldt EN gang før siden vises
function setup(){
    console.log("p5 setup kaldt")
    //skift til current page
    shiftPage(currentPage)

    //videon
    theVideo = select('#theVideo')
    //video control button
    videoButton = select('#videoButton')
    videoButton.mousePressed(()=>{
        //console.log('button pressed')
        if(videoPlaying){
            theVideo.pause()
            videoPlaying = false
        }else{
            theVideo.plaay()
            videoPlaying = true
        }
    })

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
