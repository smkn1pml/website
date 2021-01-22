$(document).ready(function () {
    // Pagination JS
    // how much items per page to show
    var show_per_page = 4;
    // getting the amount of elements inside pagingBox div
    var number_of_items = $('#pagingBox').children().not('#parrent_pagination').length;
    // calculate the number of pages we are going to have
    var number_of_pages = Math.ceil(number_of_items / show_per_page);

    // set the value of our hidden input fields
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);

    // validate whether pagination should be displayed or not
    if (number_of_pages > 1) {
        $('#parrent_pagination').removeAttr('style');
    }

    // now when we got all we need for the navigation let's make it '

    /* 
    what are we going to have in the navigation?
        - link to previous page
        - links to specific pages
        - link to next page
    */
    var navigation_html = '<li class="page-item"><a class="page-link" href="javascript:previous()" aria-label="Previous">Prev</a></li>';
    var current_link = 0;
    while (number_of_pages > current_link) {
        navigation_html += '<li class="page-item link-pagination" current="' + current_link + '"><a class="page-link" href="javascript:go_to_page(' + current_link + ')">' + (current_link + 1) + '</a></li>';
        // navigation_html += '<a class="page-link" href="javascript:go_to_page(' + current_link + ')" current="' + current_link + '">' + (current_link + 1) + '</a>';
        current_link++;
    }
    navigation_html += '<li class="page-item"><a class="page-link" href="javascript:next()" aria-label="Next">Next</a></li>';

    $('#page_navigation').html(navigation_html);

    // add active class to the first page link
    $('#page_navigation .link-pagination:first').addClass('active');

    // hide all the elements inside pagingBox div
    $('#pagingBox').children().not('#parrent_pagination').css('display', 'none');

    // and show the first n (show_per_page) elements
    $('#pagingBox').children().slice(0, show_per_page).css('display', 'block');
});

// Pagination JS
function previous() {
    new_page = parseInt($('#current_page').val()) - 1;
    // if there is an item before the current active link run the function
    if ($('.active').prev('.link-pagination').length > 0) {
        go_to_page(new_page);
    }
}

function next() {
    new_page = parseInt($('#current_page').val()) + 1;
    // if there is an item after the current active link run the function
    if ($('.active').next('.link-pagination').length > 0) {
        go_to_page(new_page);
    }
}

function go_to_page(page_num) {
    // get the number of items shown per page
    var show_per_page = parseInt($('#show_per_page').val());

    // get the element number where to start the slice from
    start_from = page_num * show_per_page;

    // get the element number where to end the slice
    end_on = start_from + show_per_page;

    // hide all children elements of pagingBox div, get specific items and show them
    $('#pagingBox').children().not('#parrent_pagination').css('display', 'none').slice(start_from, end_on).css('display', 'block');

    /*get the page link that has current attribute of the current page and add active class to it
    and remove that class from previously active page link*/
    $('.link-pagination[current=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');

    // update the current page input field
    $('#current_page').val(page_num);
}