$("#swap").click(() => {
    var readHeader = $("#read").text();
    $("#read").html($('#write').text());
    $("#write").html(readHeader);
});