$("ul").on("click","li",function(){
    $(this).toggleClass("completado")
})
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    event.stopPropagation()
})
$("input[type='text']").keypress(function(event){
    if(event.key=="Enter"){
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+ $(this).val() + "</li>")
        $(this).val("")
        event.stopPropagation()
    }
})
$(".fa-arrows-v").click(function(){
    $("ul").slideToggle()
})