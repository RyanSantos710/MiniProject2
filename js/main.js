$(function(){
    var button = $("button#submit");
    button.on("click",function(){
        var numberCheck = $("input").val() || "0";
        var numberConfirm = 0;
        var numberRemove = 0;
        
        /*Start Prime Number Check */
        if(numberCheck == 2 || numberCheck == 3){
            numberConfirm++;
        } else if ( numberCheck < 0 || numberCheck == 1 || numberCheck % 1 !==0 ){
            numberRemove++;
        } else if ( numberCheck % 2 !== 0){
            for ( var i = 3 ; i <= Math.ceil(Math.sqrt(numberCheck)) ; i++){
                if ( numberCheck%i !== 0){
                    break;
                } else {
                    numberRemove++
                }
            } //end of for loop
            if ( numberRemove == 0 ){
                numberConfirm++;
                numberRemove = 0;
            } else {
                numberRemove = 0; 
            }
        }
        
        /*Displays Answer and makes the text appear */
        if(numberConfirm > 0){
            $("div#answer").text(numberCheck + " is prime!");                       //display result
            $(".solution").show();                              //shows text "answer" when an answer is present
            $("input").val('');                               //clears input field after button is clicked
            numberConfirm = 0;
            numberRemove = 0;
        } else {
            $("div#answer").text(numberCheck + " is not prime!");                       //display result
            $(".solution").show();                              //shows text "answer" when an answer is present
            $("input").val('');                               //clears input field after button is clicked
            numberConfirm = 0;
            numberRemove = 0;
        }
        
    }); //end of if statment
    
}); //end of function