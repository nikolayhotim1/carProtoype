'use strict';
function CarProtoype() {
    this.make = 'Webville Motors';
    this.model = 'NH1';
    this.year = 2021;
    this.color = 'silver';
    this.passengers = 4;
    this.convertible = true;
    this.hasLoudStereoSystem = true;
    this.hasNitro = true;
    this.hasAlloyWheels = true;
    this.mileage = 0;
    this.started = false;

    this.start = function () {
        this.started = true;
    };

    this.stop = function () {
        this.started = false;
    };

    this.drive = function () {
        if (this.started) {
            console.log(this.make + ' ' +
                this.model + ' goes zoom zoom!');
        } else {
            console.log('Start the engine first.');
        }
    };
}

let mySuperCar1 = new CarProtoype();

mySuperCar1.fluxCapacitor = { type: 'N1kolay' };
mySuperCar1.currentTime = new Date();

mySuperCar1.start();
mySuperCar1.drive();
mySuperCar1.drive();
mySuperCar1.stop();
console.log(mySuperCar1.fluxCapacitor.type);
console.log(mySuperCar1.currentTime.toString());
