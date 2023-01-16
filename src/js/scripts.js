
class Car {
    constructor(make, model, year, odometer, engine = new Engine())
    {
        this._make = make;
        this._model = model;
        this._year = year;
        this.odometer = odometer;
        this.engine = engine;
    }

    odometer = 0;
    engine;

    //Format Make to String
    #make;
    set make(make) {
        this._make = make.toString;
    }

    get make() {
        return this.#make;
    }

    //Format Model to String
    #model;
    set model(model) {
        this._model = model.toString;
    }

    get model() {
        return this.#model;
    }

    //Format Year to Number
    #year;
    set year(year){
        this._year = parseInt(year);
    }

    get year() {
        return this.#year;
    }

    //Method: Start Engine
    startEngine() {
        output (`Attempting to Start Engine.` , "debug");
        Engine.IsRunning = true;
        output (`Engine Started` , "debug");
    }


    //Method: Stop Engine

    //Method: Drive
}

class Engine{
    constructor(CylinderCount, IsRunning)
    {
        this.CylinderCount = CylinderCount;
        this.IsRunning = IsRunning;
    }

    CylinderCount;
    IsRunning = false;

}







async function main() {
   
    let myCar = new Car();
    myCar.startEngine();
    myCar.Drive(100);
    myCar.StopEngine();
    myCar.StartEngine();
    myCar.Drive(50);
    myCar.StopEngine();

}


