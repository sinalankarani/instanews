document.addEventListener('DOMContentLoaded', function() {
  $('#sections').on('change', function() {
    event.preventDefault();

    $.ajax({
      method: 'GET',
      url: `http://api.nytimes.com/svc/topstories/v2/${this.value}.json?api-key=PeYd6hAa0VOUHAOoc76PvocokqAM86gd&`,
      dataType: 'json'
    })

      .done(function(data) {
        $('.stories').empty();

        const filterResults = data.results.filter(function(articleObj) {
          return articleObj.multimedia[4] !== 'undefined';
        }).slice(0,12);

        $.each(filterResults, function(key, data) {
              $('.stories').append(
                `<article class='article-block' style="background-image: url('${data.multimedia[4].url}')">
                <div class='article-text'><p>${data.abstract}</p></div></article>`
              );
        });
      })

      .fail(function() {
        $('.stories').append(
          'Sorry, the world has ended and there are no more news.'
        );
      })
      .always(function() {});
  });
});
