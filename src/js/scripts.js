
class Car {
    constructor(make, model, year, odometer, engine = new Engine())
    {
        this.make = make;
        this.model = model;
        this.year = year;
        this.odometer = odometer;
        this.engine = engine;

    }

    make;
    model;
    year;
    odometer = 0;
    engine;

    //Format Make to String
    set make(make) {
        this.make = make.toString;
    }

    //Format Model to String
    set model(model) {
        this.model = model.toString;
    }

    //Format Year to Number
    set year(year){
        this.year = parseInt(year);
    }

    //Method: Start Engine
    

    //Method: Stop Engine

    //Method: Drive
}

class Engine{
    constructor(CylinderCount)
    {
        this.CylinderCount = CylinderCount;
    }

    CylinderCount;
    IsRunning = false;

}







async function main() {
   

}


