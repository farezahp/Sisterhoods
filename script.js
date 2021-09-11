// -----------------------------
//  Video Replace
// -----------------------------
$(".video-box span.icon").click(function () {
  var video =
    '<iframe allowfullscreen src="' +
    $(this).attr("data-video") +
    '"></iframe>';
  $(this).replaceWith(video);
});
