    // CODING CHALLENGE #1
    var MarkWeight=90,JohnWeight=80,MarkHeight=70,JohnHeight=8;
    function BMI(weight,height){
    let bmi=weight/height**2;
    return bmi;
    }
    console.log(MarkBMI=BMI(MarkWeight,MarkHeight));
    console.log(JohnBMI=BMI(JohnWeight,JohnHeight));
    MarkHigherBMI=MarkBMI>JohnBMI;
    console.log(MarkHigherBMI);
    if(MarkHigherBMI){
        console.log("Mark has higher BMI")
    }
    else{
        console.log("John has higher BMI")
    }



    // CODING CHALLENGE #2
    const x1=96;x2=108;x3=89;y1=88;y2=91;y3=110;
    function avrg(Score1,Score2,Score3){
        const avg = Score1+Score2+Score3/3;
        return avg;
    }
    console.log("Dolphin Avg Score",DolphinAvg=avrg(x1,x2,x3));
    console.log("Koalas Avg Score",KoalasAvg=avrg(y1,y2,y3));
   if(DolphinAvg > KoalasAvg){
   console.log("Dolphin Win");
   }
   else{
    console.log("Koalas Win");
   }
   

   let Bonus1=97+112+101,Bonus2=109+95+103;
    if (Bonus1>100 && Bonus1>Bonus2){
        console.log("Dolphin Win");
        }
    else if (Bonus2>100 && Bonus2>Bonus1){
        console.log("Koalas Win");
        }
   else{
        console.log("Draw");
        }
        

  // CODING CHALLENGE #3 
  const Bill= Number(prompt());
  const tip = Bill>50 && Bill<=300? Bill*0.15:Bill*0.02;
  console.log(`The Bill was ${Bill} ,the tip was ${tip} , total is ${Bill + tip}`)




