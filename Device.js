//Defines how all Devices with work.

function Device(t,ma,c){

    //Instance Variables
    this.state = "off"
    this.type = t;
    this.milliAmps = ma;
    this.capacity = c;
    this.juice = 1
    this.rate = [0.0015,0.0235,0.23];

    //Instance Functions
    this.on = function(){
        if(this.state == "off" && this.juice >0){
             this.state = "idle";
        }
        else if (this.state == "idle" && this.juice >0){
             this.state= "active";
           //complete from instructions
          }
    };

    this.wake = function(){
        if(this.state == "off" || this.state == "idle"){
            this.state = "active"
        }
    }
    this.use = function(min){

        let charge = (this.milliAmps / this.capacity);
        let time = min / 60;
        this.juice = this.juice + charge*output*time;
    };
    this.charge = function(min){
        //adds more electricity to the device's juice depending on its state
        if(this.state == "off"){
            let output = 1 - this.rate[0];
        }
        else if(this.state == "idle"){
             let output = 1 - this.rate[1];
       }
        else if(this.state == "active"){
             let output = 1 - this.rate[2];
       }

        //resets juice to 1 if it has exceeded 1
        if(this.juice > 1){
             this.juice = 1
       }

    };

}//end of the device declaration

//defines the testing code.
function main(){}
//runs the testing code.
main();
