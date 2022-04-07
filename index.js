// declare variable return first-2-drivers using const 
//  set array values 
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=function(){
    return drivers.slice(0,2)
};
const returnLastTwoDrivers=function(){
    return drivers.slice(-2)
};
const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier= function(multiplyValue){
    return function(value){
        return multiplyValue * value;
    };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driversToReturn) => driversToReturn (drivers);
