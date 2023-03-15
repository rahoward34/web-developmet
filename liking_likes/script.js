function incrementValue1(likeOne)
{
    var value = parseInt(document.getElementById('likeOne').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('likeOne').value = value;
}
function incrementValue2(likeTwo)
{
    var value = parseInt(document.getElementById('likeTwo').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('likeTwo').value = value;
}
function incrementValue3(likeThree)
{
    var value = parseInt(document.getElementById('likeThree').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('likeThree').value = value;
}