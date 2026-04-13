// $(selector).action()
$("body").css(
{"background-color":"black",
    "color":"white"

})

$("p").css("font-size","30px")
$("#heading-1").css("color","red")
$(".p2").css("color","green")
$(".p2").text("This is a text from jquery")


function func1(){
    // $("img").show().slideDown(3000)

// let firstName=$("#fname").val()
$.get("https://jsoplaceholder.typicode.com/posts",{userId:13:101,
    title:"hello i am posting text",
    body:"i am the body text"},
    function(data){
    console.log(data)
})
}
