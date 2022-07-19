// To work with AdPro, subClass will need to be the exact match as what is in AdPro.
//I don't think we will need to use the mainclass on AdPro, just assign the subclass value

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
const editions = [
  { edition: "EWA", photoAllowed: "yes" },
  { edition: "NID", photoAllowed: "yes" },
  { edition: "LCV", photoAllowed: "yes" },
  { edition: "WML", photoAllowed: "yes" },
  { edition: "TCS", photoAllowed: "no" },
];
const myClass = [];
let mainClass = [];
/***********************************************
 * STEP 1
 ***********************************************/
function buildArray() {
  for (let item in classifications) {
    let mc = classifications[item].mainClass;
    myClass.push(mc);
  }
  //Remove duplicates from Array
  let mainClass = [...new Set(myClass)];

  //Iterate through the mainClass Array to construct options for Main Classification Dropdown
  for (var key in mainClass) {
    let value = mainClass[key];
    let option = document.createElement("OPTION");
    option.text = option.value = value;
    let selectBox = document.getElementById("mainCats");
    selectBox.options.add(option);
  }
}

function chooseSub() {
  var x = document.getElementById("mainCats").value;
  var subclassSelect = document.getElementById("subCat");
  subclassSelect.innerHTML =
    "<option name='default' value='default'>Choose One</option>";
  let filterSubClass = classifications.filter(
    (classes) => classes.mainClass === x
  );
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
  { package: "Photo Ad in 4 Editions - $55", photo: "yes" },
  {
    package: "Photo Ad in 1 Edition - Text in 3 other Editions - $35",
    photo: "yes",
  },
  { package: "Build Your Own Package", photo: "yes" },
  { package: '5 Edition "Super Saver" - $35', photo: "no", value: 5 },
  { package: "4 Editions - $30", photo: "no", value: 4 },
  { package: "3 Editions - $26", photo: "no", value: 3 },
  { package: "2 Editions - $18", photo: "no", value: 2 },
  { package: "1 Edition - $10", photo: "no", value: 1 },
];

const printEditions = [
  {
    edition: "The Exchange - Eastern Washington/ North Idaho Edition",
    photo: "yes",
  },
  { edition: "The Exchange - Lewiston/ Clarkston Edition", photo: "yes" },
  { edition: "The Exchange - Wenatchee/ Moses Lake Edition", photo: "yes" },
  {
    edition: "The Nickels Worth - North Idaho/ Western Montana Edition",
    photo: "yes",
  },
  { edition: "Giant Nickel Online - Tri-Cities Edition", photo: "no" },
];

//SELECT ELEMENT - Would you like to include a photo with your ad?

function includePhoto() {
  let dropdown = document.getElementById("photoYN");
  let photoPackageDD = document.getElementById("adPhotoPackages");
  let nonPhotoPackagesDD = document.getElementById("nonPhotoPackages");
  //photoPackageDD.style.display = "none";
  //nonPhotoPackagesDD.style.display = "none";
  if (dropdown.value == "yes") {
    addPhoto();
  } else {
    noPhoto();
  }
}
//PHOTO PACKAGES

function addPhoto() {
  //show addPhoto div
  document.getElementById("adPhotoPackages").style.display = "block";
  //hide NoPhoto div
  document.getElementById("noPhotoDiv").style.display = "none";

  //FILTER PACKAGES THAT ACCEPT PHOTOS
  const filterPackages = adPackages.filter(
    (package) => package.photo === "yes"
  );
  let photoPackageDD = document.getElementById("adPhotoPackages");

  var adPhotoPackages = document.getElementById("adPhotoPackages");
  adPhotoPackages.innerHTML = "Please Choose a Photo Package <br>";
  var selectBox = document.createElement("SELECT");
  selectBox.id = selectBox.name = "photoPackages";
  adPhotoPackages.appendChild(selectBox);
  //need to add in the default option 'choose a category'
  var option = document.createElement("OPTION");
  option.text = "Select a Package";
  option.value = "Select Package";
  option.setAttribute("class", "myPhotoPackages");
  selectBox.options.add(option);

  for (var key in filterPackages) {
    var value = filterPackages[key].package;
    let option = document.createElement("OPTION");
    option.text = value;
    option.value = key;
    option.setAttribute("class", "myPhotoPackages");
    option.setAttribute("onclick", "selectTextEditions();"); //for Firefox
    option.onclick = function () {
      selectTextEditions();
    }; //for IE
    selectBox.options.add(option);
  }
  //photoPackageDD.style.display = "block";
}

/****************************************************************
 * SHOW PHOTO PACKAGES
 ****************************************************************/

//PHOTO AD IN 4 EDITIONS

function photo4() {
  //filter for photo only
  let photoPackage = document.getElementById("photoPackage");
  photoPackage.innerHTML =
    "<p>Photo Ad in 4 Editions</p><em>Please Select 4 Editions</em><br>";
  const photoEditions = [];
  for (let item of editions) {
    if (item.photo === "yes") {
      photoEditions.push(item);
    }
  }
  for (x = 0; x < photoEditions.length; x++) {
    var checkbox = document.createElement("input");
    var id = photoEditions[x].edition;
    checkbox.type = "checkbox";
    checkbox.id = id;
    var label = document.createElement("label");
    label.htmlFor = id;
    label.appendChild(document.createTextNode(id));
    var br = document.createElement("br");

    var container = document.getElementById("photoPackage");
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(br);
  }
}

//PHOTO AD IN 1 EDITION - TEXT IN 3 EDITIONS
//BUILD YOUR OWN PACKAGE

/****************************************************************
 * SHOW NON-PHOTO PACKAGES
 ****************************************************************/

//5 MARKET CLASSIFIED
//4 MARKET CLASSIFIED
//3 MARKET CLASSIFIED
//2 MARKET CLASSIFIED
//1 MARKET CLASSIFIED

//NON-PHOTO PACKAGES

function noPhoto() {
  //hide addPhoto div
  document.getElementById("adPhotoPackages").style.display = "none";
  //add in the filter
  const filterPackages = adPackages.filter((package) => package.photo === "no");
  console.log(filterPackages);
  let noPhotoPackages = document.getElementById("photoPackageNo");
  noPhotoPackages.innerHTML = "Please choose a Non-Photo Package <br>";
  //Creates the available packages
  for (let key in filterPackages) {
    const selElm = document.getElementById("nonPhotoPackages");
    let option = document.createElement("OPTION");
    let value = filterPackages[key].package;
    option.text = value;
    option.value = filterPackages[key].value;
    option.setAttribute("class", "nonPhotoPackages");
    selElm.options.add(option);
  }

  document.getElementById("noPhotoDiv").style.display = "block";
}

const nonPhotoSelect = document.getElementById("nonPhotoPackages");
nonPhotoSelect.addEventListener("change", nonPhotoEditions);

function nonPhotoEditions() {
  let mySelection = document.getElementById("nonPhotoPackages").value;
  console.log(mySelection);
  return mySelection;
  //mySelection holds the value for number of checkboxes allowed
}

/*************************************************************
 * CHOOSE 1 PHOTO EDITION & 3 TEXT ADDITIONS
 * THIS IS THE FIRST CHUNK OF CODE FOR THE PHOTO EDITIONS
 * BUT ONCE AN EDITION IS CHOSEN NEED TO PULL IT FROM THE ARRAY...
 * ALSO IF THERE IS A CHANGE ON THIS MENU THEN THE ARRAY NEEDS TO BE RESET
 *
 * DO I NEED TO DO A REFRESH THEN REMOVE EVERYTIME A SELECTION IS MADE?
 * *********************************************************/

//FILTER EDITIONS THAT ALLOW PHOTOS
//CREATE SELECT-DROPDOWN WITH THOSE ELEMENTS CLASS='PHOTO4'

window.onload = (event) => {
  var selectBox = document.getElementById("mainCats");
  buildArray();
  myWordCounter();
};
