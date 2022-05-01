
        
        
        function myFunction() {

                let x = document.getElementById("unu").value;
                    if(x > 0){
                let y = document.getElementById("doi").value;
                let z = (y - x)/x * 100 +" %";
                document.getElementById("apasa").innerHTML = z;
                }
            }
        
        function myReset(){
             document.getElementById("unu").value = "";
             document.getElementById("doi").value = "";
             document.getElementById("apasa").innerHTML = "";
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