//defines how all charging stations work.
function ChargingDock(){

//Instance variables
    this.ports = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]; //finish from instructions
    this.leds = ["red", "red", "red", "red", "red","red", "red", "red"]; //finish from instructions


//Instance Functions
    this.plug = function(dvc){
        for(let p=0; p<=8; p++){
             if(this.leds[p] == "red"){
             }
            }
            if(this.juice > .99){
                this.leds = "green";
            }
            if (this.juice < .99){
                this.leds = "yellow";
            }
    };

    this.unplug = function(dvcIdx){
            if(this.leds[dvcIdx] == "yellow" || "green"){
                let temp;
                temp = this.ports[dvcIdx];
                this.ports[dvcIdx] = "red"

                return temp;
            }
        }
    };

    this.chargeAll = function(min){
        for(i=0; i<this.leds; i++){
            if(!(this.leds[i] == "red")){
                this.ports[i].charge(min);

                if(dvc.juice > 0.99){
                    this.leds[i] = "green";
                    if (dvc.juice > 0.99){
                        dvc.juice = 1;
                    }
                }
            }

        }
    };


}

//defines the testing code
function main(){

}

//runs the main code
main();
