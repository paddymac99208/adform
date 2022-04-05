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