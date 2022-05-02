
      
      
        function myFunction(functie) {
                let x = document.getElementById("unu").value;
                let y = document.getElementById("doi").value;
                  if(x !== "" && y !== ""){
                let z = (y - x)/x * 100 +" %";
                document.getElementById("error").innerHTML = "";
                document.getElementById("apasa").value = z;
                }
                else{ 
                    document.getElementById("error").innerHTML = "Nu ai introdus Numere!"; 
            }
        }
            
        function myReset(){
             document.getElementById("unu").value = "";
             document.getElementById("doi").value = "";
             document.getElementById("apasa").value = "";
             document.getElementById("error").innerHTML = "";
        }
    
        document.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
            document.getElementById("buton").click();
        }
    });

        document.addEventListener("keyup", function(event) {
        if (event.keyCode === 82) {
            document.getElementById("reset").click();
        }
    });