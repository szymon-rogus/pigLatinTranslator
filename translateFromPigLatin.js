var vowels = [97, 101, 105, 111, 117, 121]

$(".dropdown-menu a").click(function(){
    $("#btnGroupDrop1").html($(this).text());
    if($("#write").text() == "Pig Latin")
        english()
  });

document.getElementById("translate").addEventListener("click", () => {
    if($("#write").text() == "Pig Latin")
        english()
});

english = () => {
    
}