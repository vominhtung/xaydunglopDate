let MyDate = function (day,month,year){
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function (){
        return this.day;
    }
    this.getMonth = function (){
        return this.month;
    }
    this.getYear = function (){
        return this.year;
    }
    this.setDay = function (day){
        this.day = day;
    }
    this.setMonth = function (month){
        this.month = month;
    }
    this.setYear = function (year){
        this.year = year;
    }

};
let date = new MyDate(22, 9, 2202);
date.setDay(23)
date.setMonth(9)
date.setYear(2022)


let day = date.getDay(); //22
let month = date.getMonth(); //9
let year = date.getYear();//2022
alert(day + "/"+month +"/"+year);