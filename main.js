// show and hide
$(`.span`).click(function(){
    $(`#insideCard`).toggle()
})

// hold all div i want to make change on it
let divs = $(`#insideCard div`)

divs.eq(0).css("background-color","#088")
divs.eq(1).css("background-color","darkorange")
divs.eq(2).css("background-color","#09c")
divs.eq(3).css("background-color","salmon")
divs.eq(4).css("background-color","olive")
divs.eq(5).css("background-color","#000")

// change colors
divs.click(function(){
    let bgColors = $(this).css("background-color")
    $("button").css("background-color",bgColors)
})
divs.click(function(){
    let bgColors = $(this).css("background-color")
    $("h1,p").css("color",bgColors)
})
divs.click(function(){
    let bgColors = $(this).css("background-color")
    $("body").css("background-color", bgColors)
})

// change photos
$(`.btn1`).click(function(){
    // $(`img`).prop("src","2.png")
    $(`.png1`).attr("src","5.png")
})
$(`.btn2`).click(function(){
    // $(`img`).prop("src","2.png")
    $(`.png2`).attr("src","4.png")
})
$(`.btn3`).click(function(){
    // $(`img`).prop("src","2.png")
    $(`.png3`).attr("src","5.png")
})
$(`.btn4`).click(function(){
    // $(`img`).prop("src","2.png")
    $(`.png4`).attr("src","2.png")
})
$(`.btn5`).click(function(){
    // $(`img`).prop("src","2.png")
    $(`.png5`).attr("src","1.png")
})