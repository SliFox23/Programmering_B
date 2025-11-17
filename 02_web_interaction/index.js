var currentPage = '#page2'

//P5 setup() bliver kaldt EN gang før siden vises
function setup(){
    console.log("p5 setup kaldt")
    //skift til current page
    shiftPage(currentPage)

    //Buttons
    var theButton = select('#theButton')
    //sæt en event listener op på knappen
    theButton.mousePressed(()=>{
        if( confirm('Er du sikker?')){
            theButton.html('i was clicked')
        }else{
            theButton.html('I am not sure who i am')
        }
    })

    //p5 button
    var myButton =createButton('Button created with javascript')
    //læg den ind i side 5
    select('#page5').child(myButton)
    //lav en event listener
    myButton.mousePressed(()=>{
        shiftPage('#page1')
    })

    //Drop Downs
    var theDropdown = select('#theDropdown')
    //event listener: changed
    theDropdown.changed(()=>{
        select('#page2').style('background-color', theDropdown.value())
    })

    //input field - DOM BINDING
    var theInput = select('#theInput')
    var theInputButton = select('#theInputButton')
    var theInputTitle = select('#theInputTitle')
    theInputButton.mousePressed(()=>{
        //giv mig det der står i input feætet ind i variablen title
        var title = theInput.value()
        theInput.hide()
        theInputButton.hide()
        theInputTitle.html(title)
    })

    //checkboxes
    var ck = select('#ck1')
    ck.changed(()=>{
        ck.hide()
        select('#ckl').hide()
        select('#rebel').html("død over oprøret")
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
