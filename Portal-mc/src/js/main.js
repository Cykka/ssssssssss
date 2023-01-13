$(document).ready(function(){
  $('.menu span:last-child').click(function(){
    $('.menu span').not(':last-child').toggleClass('hidden show') ;
  })
})

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}