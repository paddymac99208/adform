const classifications = [
  { mainClass: "Animals", subClass: "Dogs" },
  { mainClass: "Animals", subClass: "Pets" },
  { mainClass: "Animals", subClass: "Livestock" },
  { mainClass: "Animals", subClass: "Horses & Tack" },
  { mainClass: "Animals", subClass: "Hay & Feed" },
  { mainClass: "Vehicles", subClass: "Cars & Crossovers" },
  { mainClass: "Vehicles", subClass: "Pickups, Vans & 4x4s" },
  { mainClass: "Vehicles", subClass: "Classic Cars" },
  { mainClass: "Vehicles", subClass: "Auto Parts & Services" },
  { mainClass: "Home & Garden", subClass: "Home Services" },
  { mainClass: "Home & Garden", subClass: "Yard & Garden" },
  { mainClass: "Home & Garden", subClass: "Wood & Warm" },
  { mainClass: "Miscellaneous", subClass: "Antiques" },
  { mainClass: "Miscellaneous", subClass: "Business Opportunities" },
  { mainClass: "Miscellaneous", subClass: "Employment" },
  { mainClass: "Miscellaneous", subClass: "Health & Fitness" },
  { mainClass: "Miscellaneous", subClass: "Home Furnishings & Appliances" },
  { mainClass: "Miscellaneous", subClass: "Hunting & Fishing" },
  { mainClass: "Miscellaneous", subClass: "Miscellaneous" },
  { mainClass: "Miscellaneous", subClass: "Personals" },
  { mainClass: "Miscellaneous", subClass: "Wanted" },
  { mainClass: "Real Estate", subClass: "Acreage" },
  { mainClass: "Real Estate", subClass: "Real Estate - Residential" },
  { mainClass: "Real Estate", subClass: "Homes on Acreage" },
  { mainClass: "Real Estate", subClass: "Manufactured Homes" },
  { mainClass: "Real Estate", subClass: "Waterfront" },
  { mainClass: "Real Estate", subClass: "Real Estate - Commercial" },
  { mainClass: "Real Estate", subClass: "Rentals" },
  { mainClass: "Recreational Vehicles", subClass: "Motorhomes & Trailers" },
  { mainClass: "Recreational Vehicles", subClass: "Boats & Watercraft" },
  { mainClass: "Recreational Vehicles", subClass: "Motorhomes & Trailers" },
  { mainClass: "Recreational Vehicles", subClass: "Motorcycles & ATVs" },
  { mainClass: "Recreational Vehicles", subClass: "Snowmobiles" },
  { mainClass: "Sales Events & Auctions", subClass: "Garage/ Estate Sales" },
  { mainClass: "Sales Events & Auctions", subClass: "Auctions" },
  {
    mainClass: "Tractors, Equipment & Tools",
    subClass: "Tractors/ Heavy Equipment",
  },
  {
    mainClass: "Tractors, Equipment & Tools",
    subClass: "Building Materials & Tools",
  },
  { mainClass: "Antiques", subClass: "Antiques" },
  { mainClass: "Hunting & Fishing", subClass: "Hunting & Fishing" },
  { mainClass: "Hunting & Fishing", subClass: "Guns/ Firearms" },
  { mainClass: "Employment", subClass: "Employment/ Help Wanted" },
  { mainClass: "Employment", subClass: "Business Opportunities" },
];
const myClass = [];
let mainClass = [];
var selectBox = document.getElementById("mainCats");
var selectList = document.getElementById("choosePackage");

/***********************************************
 * STEP 1
 ***********************************************/
function buildArray() {
  for (let item in classifications) {
    var mc = classifications[item].mainClass;
    myClass.push(mc);
  }
  //Remove duplicates from Array
  let mainClass = [...new Set(myClass)];

  //Iterate through the mainClass Array to construction options for Main Classification Dropdown
  var selectBox = document.getElementById("mainCats");
  for (var key in mainClass) {
    var value = mainClass[key];
    let option = document.createElement("OPTION");
    option.text = option.value = value;
    var selectBox = document.getElementById("mainCats");
    selectBox.options.add(option);
  }
}
function chooseSub() {
  var x = document.getElementById("mainCats").value;
  var subclassSelect = document.getElementById("subCat");
  subclassSelect.innerHTML = "<option name='default' value='default'>Choose One</option>";
  let filterSubClass = classifications.filter((classes) => classes.mainClass === x);
  filterResult = filterSubClass.map((a) => a.subClass);
  for (var key in filterResult) {
    var value = filterResult[key];
    let option = document.createElement("option");
    option.text = option.value = value;
    subclassSelect.options.add(option);
  }
}

/***********************************************
 * STEP 2 - WRITE YOUR AD COPY
 ***********************************************/

// AD TEXT/ WORD COUNT

function myWordCounter() {
  var count = document.getElementById("count"); // word count field
  var input = document.getElementById("input"); //text area
  var globalWordCounter = 0;
  var WORD_LIMIT = 1000;

  input.addEventListener("keydown", function (e) {
    if (globalWordCounter > WORD_LIMIT && e.code !== "Backspace") {
      e.preventDefault();
      return alert("You have reached the word limit");
    }
  });

  input.addEventListener("keyup", function (e) {
    wordCounter(e.target.value);
  });

  function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if (
        (code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)
      ) {
        // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
      }
    }
    return alphaNumericFound;
  }

  function wordCounter(text) {
    var text = input.value.split(" ");
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
      if (!text[i] == " " && isWord(text[i])) {
        wordCount++;
      }
    }
    globalWordCounter = wordCount;
    var rWords = Math.abs(globalWordCounter - 30);
    if (globalWordCounter <= 30) {
      count.innerHTML =
        "<h3><b>Total Words:</b> " +
        globalWordCounter +
        "<br><b>Remaining:</b> " +
        rWords +
        "</h3>";
    } else {
      count.innerHTML =
        "<h3><b>Total Words:</b> " +
        globalWordCounter +
        "<br><b>Extra Words:</b> " +
        rWords +
        "</h3>";
    }
    return globalWordCounter;
  }
}

/*****************************************************************************
 * STEP 3 --
 * SELECTING PHOTO PACKAGES
 ****************************************************************************/

//move this to global var section
const adPackages = [
  { package: "Photo Ad in 4 Editions - $55", photo: "yes", value: "55" },
  { package: "Photo Ad in 1 Edition - Text in 3 other Editions - $35", photo: "yes", value: "35"},
  { package: "Build Your Own Package", photo: "yes", value: "0" },
  { package: '5 Edition "Super Saver" - $35', photo: "no", value: "35" },
  { package: "4 Editions - $30", photo: "no", value: "30" },
  { package: "3 Editions - $26", photo: "no", value: "26" },
  { package: "2 Editions - $18", photo: "no", value: "18" },
  { package: "1 Edition - $10", photo: "no", value: "10" },
];

const editions = [
  { edition: "The Exchange - Eastern Washington/ North Idaho Edition", photo: "yes"},
  { edition: "The Exchange - Lewiston/ Clarkston Edition", photo: "yes" },
  { edition: "The Exchange - Wenatchee/ Moses Lake Edition", photo: "yes" },
  { edition: "The Nickels Worth - North Idaho/ Western Montana Edition", photo: "yes"},
  { edition: "Giant Nickel Online - Tri-Cities Edition", photo: "no" },
];

//SELECT ELEMENT - Would you like to include a photo with your ad?

//TRY TO POPULATE ONLY 1 Selector, CLEAR THE INNERHTML FIRST ON EACH CHANGE

function includePhoto() {
  //let selectList = document.getElementById('choosePackage');
  let packageType = document.getElementById("photoYN").value;
  let labelName = document.getElementById("packageLabel");
  if (packageType == "yes") {
    document.getElementById('adPackage').innerHTML = "<option>Choose One</option>"
    labelName.innerHTML = "Please Select a Photo Package";
    myFilter(adPackages, packageType); // I'm passing the ad package array to filter, and the Yes/ No argument
    //construct Photo Packages
  } else {
    labelName.innerHTML = "Please Choose an Ad Package";
    //construct Non-Photo Packages
    document.getElementById('adPackage').innerHTML = "<option>Choose One</option>"
    myFilter(adPackages, packageType);

  }
}

function myFilter(array, value, list, label) {
  //label.innerHTML = "<option name='default' value='default'>It functions Choose One</option>";
  let filterArray = array.filter((item) => item.photo === value);
  var fResults = filterArray.map((adPackage) => adPackage.package);
  var selectPackage = document.getElementById("adPackage");
  for (var item in fResults) {
    var value = fResults[item];
    selectPackage = document.getElementById("adPackage");
    let option = document.createElement("option");
    option.text = option.value = value;
    selectPackage.options.add(option);
  }
}



window.onload = (event) => {
  var selectBox = document.getElementById("mainCats");
  var selectList = document.getElementById("choosePackage");
  buildArray();
  myWordCounter();
};
