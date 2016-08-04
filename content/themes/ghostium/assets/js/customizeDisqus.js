/**
 * Created by ChienKira on 2016/08/04.
 */
$(document).ready(function () {
  var editable = true;
  setInterval(function () {
    var disqusHeight = $('#disqus_thread').height();
    if (disqusHeight > 0) {
      $(".tab-community").hide();
      $("#dsq-app5").remove();
      editable = false;
      console.log("xys");
    }
  }, 1000);
});

