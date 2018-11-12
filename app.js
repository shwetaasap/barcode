
//---    
function searchInfo() {
    //const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
    const api_key = "5B6D94AC6AFEB06A2F577D1DD406F143";
    var barcode = document.getElementById("barcode").value;
    //var search = document.getElementById("search").value;
    /*
        var proxyurl = "https://api.barcodelookup.com/v2/products?";
        if (barcode == "" && search == "") {
            alert("please enter a search criteria");
        } else if (!barcode == "") {
            proxyurl += "barcode=" + barcode;
            proxyurl += "&formatted=y&key=" + api_key;
        } else if (!search == "") {
            proxyurl += "search=" + search;
            proxyurl += "&formatted=y&key=" + api_key;
        } else if (!barcode == "" && !search == "") {
            proxyurl += "barcode=" + barcode + "&search=" + search;
            proxyurl += "&formatted=y&key=" + api_key;
        }*/
    
    const url = "https://api.upcdatabase.org/product/"+ barcode + "/" + api_key;
    //const url = "https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg";
    //const url = "http://api.openweathermap.org/data/2.5/weather?q=tokyo&APPID=a6c98c5f1512ef700db17185202188c4&units=metric"
    $.getJSON(url, codeData);
    
    //function to fetch information from json data to display
    function codeData(data) {
        alert(data);
        document.getElementsByClassName("barcode_number").innerHTML = "Barcode-number = " + data.barcode_number;
        document.getElementsByClassName("product_name").innerHTML = "Product-name = " + data.product_name;
        document.getElementsByClassName("category").innerHTML = "Category =" + data.category;
        document.getElementsByClassName("manufacturer").innerHTML = "Manufacturer = " + data.manufacturer;
        document.getElementsByClassName("brand").innerHTML = "Brand-number = " + data.brand;
        document.getElementsByClassName("nutrition_facts").innerHTML = "Nutrition-facts = " + data.nutrition_facts;
        document.getElementsByClassName("ingredients").innerHTML = "Ingredients =" + data.ingredients;
        document.getElementsByClassName("color").innerHTML = "Color =" + data.color;
        document.getElementsByClassName("description").innerHTML = "Description =" + data.description;
        document.getElementsByClassName("image").innerHTML = "Image =" + data.images;
        document.getElementsByClassName("stores").innerHTML = "Stores = " + data.stores;
        document.getElementsByClassName("reviews").innerHTML = "Reviews = " + data.reviews;
        //console.log(data); 
    };
};

//document.getElementsByClassName("result").innerHTML= entireResponse();
               //p5 screen//
       /* var canvas;
        function setup(){
         canvas=createCanvas(windowWidth,windowHeight);
         canvas.parent('canvasHolder');    
       };
       function mouseMoved(){
           clear();
       }; 
       function draw(){
           //background(175);
           if (mouseMoved){
           fill(200,250,200);
           rect(mouseX,mouseY,30,30)};
       };*/