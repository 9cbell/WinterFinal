//Defines how all Devices with work.

function Device(t,ma,c){

    //Instance Variables
    this.type = t;
    this.state = "off";
    this.milliAmps = ma;
    this.capacity = c;
    this.juice = 1;
    this.rate = [0.0015,0.0235,0.23];

    //Instance Functions

    this.power = function(){
        this.juice = ma/c
      return this.juice * 100;
    }
    this.on = function(){
        if(this.state == "off" && this.juice >0){
           this.state = "idle";
        }
        else if (this.state == idle){
           this.state = "active";
        }
    };

    this.off = function(){
      if(this.state == "active" || this.state == "idle"){
        this.state = "off";
    }
  };

    this.wake = function(){
      if(this.state == "idle" || this.state == "off"){
        this.state = "active";
      }
    };

    this.sleep = function(){
      if(this.state == "active"){
        this.state = "idle";
      }
    };


    this.charge = function(min){
        //adds more electricity to the device's juice depending on its state

        let charge = (this.milliAmps / this.capacity);
        let time = min / 60;
        let output = 0;
        if(this.state == "off"){
            output = 1 - this.rate[0];
        }
        else if(this.state == "idle"){
           output = 1 - this.rate[1];
        }
        else if(this.state == "active"){
           output = 1 - this.rate[2];
        }
        this.juice = this.juice + charge*output*time;

        //resets juice to 1 if it has exceeded 1
        if(this.juice > 1){
          this.juice = 1;
        }
    };

    this.use = function(min){
        if (this.state == "active") {
            this.juice = (this.juice) - (this.rate[2] * min/60);
        }

        else if (this.state == "idle") {
            this.juice = (this.juice) - (this.rate[1] * min);
        }

        else if (this.state == "off") {
            this.juice = (this.juice) - (this.rate[0] * min);
        }
        if(this.juice < 0){
            this.juice=0;
        }
    };
}//end of the device declaration

//defines the testing code.
function main(){
    let flemphone = new Device("phone",3000,10000);
    console.log(flemphone.power());
    flemphone.on();
    flemphone.wake();
    flemphone.use(90);
    console.log(flemphone.power());
    flemphone.sleep();
    flemphone.use(300);
    console.log(flemphone.power());
    flemphone.off();
    flemphone.use(300);
    console.log(flemphone.power());
    flemphone.charge(60);
    console.log(flemphone.power());
    flemphone.charge(1000);
    console.log(flemphone.power());
    console.log(flemphone.state)
}
//runs the testing code.
main();
