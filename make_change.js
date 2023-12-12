// ------------------------------------------------------

    // makes change based on the input then displays output in text boxes:
    // -------------------------------------------------------------------
    function makeChange(val){

        var quarters = document.getElementById('quarters');
        var dimes = document.getElementById('dimes');
        var nickels = document.getElementById('nickels');
        var pennies = document.getElementById('pennies');

        var q = Math.floor(val / 25);
        val -= q * 25;

        var d = Math.floor(val  / 10);
        val -= d * 10;

        var n = Math.floor(val / 5);
        val -= n * 5;

        var p = val;

        //display values to text boxes
        quarters.value = q;
        dimes.value = d;
        nickels.value = n;
        pennies.value = p;

    }//end of function makeChange

// ------------------------------------------------------

function processEntries(input){
    if(input != isNaN && input >= 0 && input <= 99){
        makeChange(input);
    }else{
        alert("Invalid Number.  Enter a number between 0 and 99");
    }
}//end of processEntries

// ------------------------------------------------------

window.addEventListener('load', function(){

    document.getElementById('calculate').addEventListener('click', function(){
        var input = document.getElementById('cents').value;
        processEntries(input);
    });//end of processEntries

});//end of window.onload

// ------------------------------------------------------
