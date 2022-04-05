function myFilter(array, value, list, label) {
    //label.innerHTML = "<option name='default' value='default'>It functions Choose One</option>";
    let filterArray = array.filter((item) => item.photo === value);
    console.table(filterArray);
    //var fResults = filterArray.map((adPackage) => adPackage.package);
    //console.log(fResults);
    var selectPackage = document.getElementById("adPackage");
    for (var item in fResults) {
      var value = fResults[item];
      selectPackage = document.getElementById("adPackage");
      let option = document.createElement("option");
      option.text = option.value = value;
      selectPackage.options.add(option);
    }
  }

  


  function clearChecks(){
    document.getElementById('photoText-text').style.display = 'none';
    const myCheck = document.querySelectorAll('#threeTextOnly');
     for(x=0; x<myCheck.length; x++){
       if(myCheck[x].type == 'checkbox'){
         myCheck[x].checked = false;
       }
     }
   };

   


   /******************************************
 * VALIDATE CORRECT NUMBER OF ADDITIONS IS SELECTED
 * ***************************************/
 var editionCount = 0;
 var photo = 0;
 var myTest = 0;
 
 function validateEditions(){
  var checkNumber = document.getElementById('countEditions');
   var inputElems = document.querySelectorAll('input#markets');
 photoValue = document.getElementById('photoNo').value;
   count = 0;
 for(var i=0; i<inputElems.length; i++){
   if(inputElems[i].type === 'checkbox' && inputElems[i].checked === true){
       count++
       editionCount = count;
       checkNumber.value = count;
       
   }
 }
       photo = parseInt(photoValue);
       addError()
 }

 


 function photo4() {
  //filter for photo only
  let photoPackage = document.getElementById('photoPackage');
  photoPackage.innerHTML = '<p>Photo Ad in 4 Editions</p><em>Please Select 4 Editions</em><br>'
  const photoEditions = [];
  for(let item of editions) {
if(item.photo === 'yes'){
  photoEditions.push(item);
}
  }
      for(x=0; x<photoEditions.length; x++){
      var checkbox = document.createElement('input');
      var id = photoEditions[x].edition;
      checkbox.type = 'checkbox';
      checkbox.id = id;
      var label = document.createElement('label')
      label.htmlFor = id;
      label.appendChild(document.createTextNode(id));
      var br = document.createElement('br');

var container = document.getElementById('photoPackage');
container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(br);
  }
}



function buildCheckboxes() {
  let photoEditions = editions.filter((item) => item.photo === 'yes');
  console.table(photoEditions);
  
  
  for(var item in photoEditions){
    var edition = photoEditions[item].edition;
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
checkbox.id = edition;
var label = document.createElement('label')
label.htmlFor = edition;
label.appendChild(document.createTextNode(edition));
var br = document.createElement('br');
var container = document.getElementById('subClassCheckbox');
container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(br);
  }
}


