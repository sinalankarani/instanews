document.addEventListener('DOMContentLoaded', function() {
  
  $(function() {
    $('#sections').selectric();
  })
  
  $("#sections").on("change", function() {
    event.preventDefault();
    
    $("#logo").addClass("small-logo");
    $("#loader").removeClass("hide");
    $("#loader").addClass("show");

    $.ajax({
      method: "GET",
      url: `http://api.nytimes.com/svc/topstories/v2/${this.value}.json?api-key=PeYd6hAa0VOUHAOoc76PvocokqAM86gd&`,
      dataType: "json"
    })

      .done(function(data) {
        $(".stories").empty();

        const filterResults = data.results
          .filter(function(articleObj) {
            return typeof articleObj.multimedia[4] !== "undefined";
          })
          .slice(0, 12);

        $.each(filterResults, function(key, data) {
          $(".stories").append(
            `<article class='article-block' style="background-image: url('${
              data.multimedia[4].url
            }')">
              <a href="${data.short_url}">
                <ul class='article-text'>
                  <li class='article-title'>${data.title}</li>
                  <li class='article-detail'>${data.abstract}</li>
                  <li class='article-date'>${data.updated_date.slice(0,10)}</li>
                </ul>
              </a>
            </article>`
          );
        });
      })

      .fail(function() {
        $(".stories").append("An error has occured.");
      })
      .always(function() {
        $("#loader").removeClass("show");
        $("#loader").addClass("hide");
      });
  });
});