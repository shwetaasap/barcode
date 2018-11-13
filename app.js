
function searchInfo() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
    const api_key = "5B6D94AC6AFEB06A2F577D1DD406F143";
    var barcode = document.getElementById("barcode").value;
    var url = proxyurl + "https://api.upcdatabase.org/product/" + barcode + "/" + api_key;
    // var url ='https://api.upcdatabase.org/product/888464220178/5B6D94AC6AFEB06A2F577D1DD406F143';
    $.getJSON(url, function (Data) {
        codeData(Data);
    })
};
//function to fetch information from json data to display
function codeData(data) {
    //console.log(data); 


    var barCode = document.getElementsByClassName("barcode_number1")
    barCode[0].innerHTML = "<h4>Barcode-number = <span class='deco'>" + data.upcnumber + "</span></h4>";

    var prodName = document.getElementsByClassName("product_name")
    prodName[0].innerHTML = "<h4>Product-name = <span class='deco'>" + data.product_name + "</span></h4>";

    var category = document.getElementsByClassName("category")
    category[0].innerHTML = "<h4>Category = <span class='deco'> " + data.category + "</span></h4>";

    var manufact = document.getElementsByClassName("manufacturer")
    manufact[0].innerHTML = "<h4>Manufacturer = <span class='deco'>" + data.manufacturer + "</span></h4>";

    var brand = document.getElementsByClassName("brand")
    brand[0].innerHTML = "<h4>Brand-number = <span class='deco'>" + data.brand + "</span></h4>";

    var nutri_fatcs = document.getElementsByClassName("nutrition_facts")
    nutri_fatcs[0].innerHTML = "<h4>Nutrition-facts = <span class='deco'>" + data.nutrition_facts + "</span></h4>";

    var ingre = document.getElementsByClassName("ingredients")
    ingre[0].innerHTML = "<h4>Ingredients = <span class='deco'>" + data.ingredients + "</span></h4>";

    var color = document.getElementsByClassName("color")
    color[0].innerHTML = "<h4>Color = <span class='deco'>" + data.color + "</span></h4>";

    var desc = document.getElementsByClassName("description")
    desc[0].innerHTML = "<h4>Description = <span class='deco'>" + data.description + "</span></h4>";

    var image = document.getElementsByClassName("image")
    image[0].innerHTML = "<h4>Image =<span class='deco'> " + data.images + "</span></h4>";

    var stores = document.getElementsByClassName("stores")
    stores[0].innerHTML = "<h4>Stores = <span class='deco'>" + data.stores + "</span></h4>";

    var reviews = document.getElementsByClassName("reviews")
    reviews[0].innerHTML = "<h4>Reviews = <span class='deco'>" + data.reviews + "</span></h4>";
};




