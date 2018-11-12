
function searchInfo() {
    //const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
    const api_key = "5B6D94AC6AFEB06A2F577D1DD406F143";
    var barcode = document.getElementById("barcode").value;
    var url = "https://api.upcdatabase.org/product/" + barcode + "/" + api_key;
    // var url ='https://api.upcdatabase.org/product/888464220178/5B6D94AC6AFEB06A2F577D1DD406F143';
    $.getJSON(url, function (Data) {
        codeData(Data);
    })
};
//function to fetch information from json data to display
function codeData(data) {
    //console.log(data); 
   
  
        var barCode = document.getElementsByClassName("barcode_number1")
        barCode[0].innerHTML = "<h3>Barcode-number = </h3>" + data.upcnumber;

        var prodName = document.getElementsByClassName("product_name")
        prodName[0].innerHTML = "<h3>Product-name = </h3>" + data.product_name;

        var category = document.getElementsByClassName("category")
        category[0].textContent = "<h3>Category =</h3>" + data.category;

        var manufact = document.getElementsByClassName("manufacturer")
        manufact[0].innerHTML = "<h3>Manufacturer = </h3>" + data.manufacturer;

        var brand = document.getElementsByClassName("brand")
        brand[0].innerHTML = "<h3>Brand-number = </h3>" + data.brand;

        var nutri_fatcs = document.getElementsByClassName("nutrition_facts")
        nutri_fatcs[0].innerHTML = "<h3>Nutrition-facts = </h3>" + data.nutrition_facts;

        var ingre = document.getElementsByClassName("ingredients")
        ingre[0].innerHTML = "<h3>Ingredients =</h3>" + data.ingredients;

        var color = document.getElementsByClassName("color")
        color[0].innerHTML = "<h3>Color =</h3>" + data.color;

        var desc =document.getElementsByClassName("description")
        desc[0].innerHTML = "<h3>Description =</h3>" + data.description;

        var image = document.getElementsByClassName("image")
        image[0].innerHTML = "<h3>Image =</h3>" + data.images;

        var stores = document.getElementsByClassName("stores")
        stores[0].innerHTML = "<h3>Stores = </h3>" + data.stores;

        var reviews = document.getElementsByClassName("reviews")
        reviews[0].innerHTML = "<h3>Reviews = </h3>" + data.reviews;
       
   
};
