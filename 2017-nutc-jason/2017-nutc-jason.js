//楊漢笙
var bmi={
    height:'Default',
    weight:'Default',
    getBMI: function(){
        return this.weight/((this.height/100)*(this.height/100));
    },

    getAdvise: function(){
        var bmi=this.getBMI();
        
        if(bmi<18.5){
            return "過輕";
        }
        if(bmi>18.5&&bmi<24){
            return "正常";
        }
        if(bmi>24){
            return "過重";
        }
    }
}


var bmi=Object.create(bmi);
bmi.height=184;
bmi.weight=59;
console.log(bmi.getBMI());
console.log(bmi.getAdvise());

