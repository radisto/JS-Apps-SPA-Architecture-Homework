var books = books || {};

var ajaxRequester = (function () {
    var makeRequest = function makeRequest(method, url, data, success, error) {
        return $.ajax({
            headers: {
                'X-Parse-Application-Id': 'Mv248r8bnylYI52LQEv3oyBXUNJCQJGlGsmvtEGA',
                'X-Parse-REST-API-Key': 'qrltHp4aereH1QyuEjNaWJYHwbfqkg1OHkwBDlS7'
            },
            contentType: 'application/json',
            method: method,
            url: url,
            data: JSON.stringify(data),
            success: success,
            error: error
        })
    };

    function getRequest(url, success, error) {
        return makeRequest('GET', url, null, success, error);
    }

    function postRequest(url, data, success, error) {
        return makeRequest('POST', url, data, success, error);
    }

    function putRequest(url, data, success, error) {
        return makeRequest('PUT', url, data, success, error);
    }

    function deleteRequest(url, success, error) {
        return makeRequest('DELETE', url, {}, success, error);
    }

    return {
        get: getRequest,
        post: postRequest,
        put: putRequest,
        delete: deleteRequest
    }
}());

var url = 'https://api.parse.com/1/classes/Book/';

books.showAllBooks = function(){
    ajaxRequester.get(url + '?order=title', success, error);
};

function success(data) {
    addBookToDom(data);
}

function error(err){
    console.log(err.responseText);
}

function addBookToDom(books){
    $.get('temps/book-template.html', function(data){
        var template = Handlebars.compile(data);
        $('#wrapper').html(template(books));
    });
}