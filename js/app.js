$(function () {


    var people = [];

    $.getJSON('data/products.json', function (data) {
        $.each(data, function (i, f) {
            var card = `<div class="col-12 col-sm-6 col-lg-4">
                <div class="card" style="width: 18rem;">
        <img class="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SJUD9oHXm-HxpI1TGVqHFvu6AS4Uc2XcLQ&usqp=CAU"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${f.name}</h5>
            <p class="card-text">${f.detail}</p>
            <p class="card-text">${f.price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>`;
            $(card).appendTo(".product .row");

        });

    });

});