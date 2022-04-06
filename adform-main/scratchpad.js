<div class="form-row dropdown subclass" id="nonPhotoPackage" name="nonPhotoPackage">
<label for="photoNo">Please Choose a Package</label>
<select onchange="noPhoto()" name="photoNo" id="photoNo" required>
    <option value="SelectSub" selected="selected">Choose a Package</option>
    <option value="5">5 Market 'Super Saver' - $35</option>
    <option value="4">4 Markets - $30</option>
    <option value="3">3 Markets - $26</option>
    <option value="2">2 Markets - $18</option>
    <option value="1">1 Market - $10</option>
</select>
</div>


const nonPhotoPackage = [
    {package: '5 Markets <em>Super Saver</em> - $35', price:"35" },
    {package: '4 Markets - $30', price:"30" },
    {package: '3 Markets - $26', price:"26" },
    {package: '2 Markets - $18', price:"18" },
    {package: '1 Market - $10', price:"10" },
    ]





    Add a radio Onclick




    function showText() {
        let myDiv = document.getElementById('textEditions');  
        let rbuttons = document.getElementsByTagName('input[type="radio"]');
        for(x=0; x<rbuttons.length; x++) {
          rbuttons[x].addEventListener('click', showDiv());
        }
        myDiv.style.display = rbuttons.checked ? "block" : 'none'; 
        console.log(rbuttons);  
        }
        
        function showDiv() {
          console.log('ran showDiv')
        }
        
        function radioPackage() {
          console.log('clicked');
        }




        function showText() {
            let radios = document.getElementsByName('photo1')
            let radioSelected = '';
          for(let name in editions){
            if(name.checked !== 0){
              radioSelected = name.name;
            }
          }
          let text3 = editions;
          for(let item in text3){
            if(item.edition === radioSelected){
              console.log('they match');
            }
          }  
            
            //let myRadio = document.getElementsByName('photo1');
            //for(let item in myRadio) {
              //if(item.checked){
                console.log('checked')
              //}
            }
            //console.log(myRadio);
            //grab value of selected radio button and remove it from the array
            
          //}