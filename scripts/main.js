var books = books || {};

var app = Sammy(function(){
    this.get('#/', function(){
        $('#wrapper').html('<h1>Home page</h1>');
    });
    this.get('#/Books', function(){
        books.showAllBooks();
    });
});

app.run('#/');