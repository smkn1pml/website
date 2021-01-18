$(document).ready(function () {
    function search(data = [], index = '', query = '') {
        var results = [];
        query = query.toLowerCase();
        for (var i = 0; i < data.length; i++) {
            var document = data[i][index];
            document = document.toLowerCase();
            var regexp = new RegExp(query + '.*');
            if (document.match(regexp)) {
                results.push(data[i]);
            }
        }
        return results;
    }

    $('#searchform').on('submit', function (e) {
        e.preventDefault();
        searching();
    });

    $('#search-input').bind('change keyup keydown cut copy paste', function () {
        searching();
    });

    function searching() {
        var value = $('#search-input').val();
        if (value.trim() != '') {
            $.getJSON('/api/posts.json', function (articles) {
                var result = search(articles.data, 'title', value),
                    html = '';

                for (var i = 0; i < result.length; i++) {
                    html += bikin_item(result[i]);
                }
                if (result.length > 0) {
                    $('#search-results').removeAttr('style').html(html);
                    $('#search-outside').css('display', 'none');
                } else {
                    $('#search-results').css('display', 'none').html('');
                    $('#search-outside').removeAttr('style');
                }
            });
        } else {
            $('#search-results').css('display', 'none').html('');
            $('#search-outside').removeAttr('style');
        }
    }

    function bikin_item(data) {
        var html = `<div class="clearfix post-recent">`;
        html += `<div class="post-recent-thumb float-left">`;
        html += `<a href="${data.url}">`;
        html += `<img src="${data.thumbnail}" class="img-fluid rounded" alt="${data.title}">`;
        html += `</a>`;
        html += `</div>`;
        html += `<div class="post-recent-content float-left">`;
        html += `<a href="${data.url}">${data.title}</a>`;
        html += `<span class="text-muted mt-2">${data.date_parse}</span>`;
        html += `</div>`;
        html += `</div>`;
        return html;
    }
});