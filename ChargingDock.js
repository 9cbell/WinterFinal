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
        };

    this.chargeAll = function(min){
        for(i=0; i<this.leds; i++){
            if(!(this.leds[i] == "red")){
                this.ports[i].charge(min);

                if(dvc.juice > 0.99){
                    this.leds[i] = "green";
                }
            }

        }
    };


}

//defines the testing code
function main(){
    function testdoc(){
        let cd = new ChargingDock();

        let d1 = new Device("phone",3000,10000);
        let d2 = new Device("laptop",3000,15000);
        let d3 = new Device("laptop",5000,15000);
        let d4 = new Device("tablet",3000,15000);

        d1.use(90);
        d2.use(120);
        d3.use(90);
        d4.use(240);

        cd.plug(d1);
        cd.plug(d2);
        cd.plug(d3);
        cd.plug(d4);

        cd.chargeAll(60);

        cd.unplug(0);
        cd.unplug(1);

    }
}

//runs the main code
main();
