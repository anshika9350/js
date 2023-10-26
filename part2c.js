// CHALLENGE #1
/* const calcAverage = (score1,score2,score3) => {
    const average = score1 + score2 + score3;
    return average/3;
} 
const avgDolhins = calcAverage(3,5,8);
const avgKoalas = calcAverage(67,99,8);

function checkWinner(avgDolhins,avgKoalas){
    if(avgDolhins>=2*avgKoalas){
        return `Dolhins Win(${avgDolhins} vs ${avgKoalas})`
    }
    else if(avgKoalas>=2*avgDolhins) {
        console.log(`Koalas Win(${avgKoalas} vs ${avgDolhins})`)
    }
}
checkWinner(avgDolhins,avgKoalas)
 */
//CHALLENGE 2

/* function CalcTip(BillValue){
BillValue>=50 && BillValue<=300 ? tip = 0.15*BillValue : tip= 0.20*BillValue;
return tip;
}
console.log(CalcTip(100));
const Bills = new Array(125,555,44);
const Tip = [CalcTip(Bills[0]),CalcTip(Bills[1]),CalcTip(Bills[2])];
const Total = [Bills[0]+Tip[0],Bills[1]+Tip[1],Bills[2]+Tip[2]];
console.log(Total)*/

//CHALLENGE 3 
 /* const Mark ={
    FullName:'Mark',
    Mass:78,
    Height:1.69,
    CalcBMI: function(){
        this.bmi = this.Mass/this.Height**2;
        return this.bmi
    }
 }
 const John ={
    FullName:'John',
    Mass:92,
    Height:1.95,
    CalcBMI: function(){
        this.bmi = this.Mass/this.Height**2;
        return this.bmi
    }
 }
Mark.CalcBMI();
John.CalcBMI();
if(Mark.bmi>John.bmi){
    console.log(`Mark's BMI(${Mark.bmi}) is higher than John's BMI(${John.bmi})`)
}
else if(John.bmi>Mark.bmi){
    console.log(`John's BMI(${John.bmi}) is higher than Mark's BMI(${Mark.bmi})`)
} */


//CHALLENGE 4
const Bills =[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const total=[];
function CalcTip(BillValue){
    BillValue>=50 && BillValue<=300 ? tip = 0.15*BillValue : tip= 0.20*BillValue;
    return tip;
    }
for(let i=0;i<Bills.length;i++){
    tips.push(CalcTip(Bills[i]));
    total.push(Bills[i]+total[i])
}
console.log(tips);
sum=0;
const CalcAvg = function(arr){
    for(i=0;arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(CalcAvg([1,2,4]))


