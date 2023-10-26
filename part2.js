    //FUNCTIONS

     /* function car(blue,green){
         const want = console.log(`i want ${blue} blue and ${green} green car`);
         return want;
     }
     const cars = car(23,6);
     console.log(cars); */
    //use strict mode helps to identifying errors



    //FUNCTION DECLARATION
    /* const Age1 = calcage(16); //we can pass the arguments before the function
    function calcage(age){
        console.log(age);
    }
    console.log(Age1);
 */
    //FUNCTION EXPRESSION
   /*  const calcage2=function(age2){
        console.log(age2);
    }
    const Age2 = calcage2(123); //we cannot pass the arguments before the function
    console.log(Age2);
 */


    //ARROW FUNCTION
    /* const calcAge3 = age3 => age3;    //no need to write return 
    const Age3 = calcAge3(90);
    console.log(Age3);
    const Calculate = currentage => {
        const newage=60;
        return currentage-newage;
    }
    const calci = Calculate(99);
    console.log(calci);
 */

    // FUNCTION CALLING OTHER FUNCTION
   /*  function cutfruit(fruit){
        return fruit*5
    } 
    function Fruit(apple,orange){
        const cutapple = cutfruit(apple);
        const cutorange = cutfruit(orange);
        const juice = `juice with ${cutapple} pieces of apple and ${cutorange} pieces of oranges`;
        return juice;
    }
    console.log(Fruit(7,9))
 */

    // ARRAY
    /* const Fruits =['Apple',2,'Mango'];
    const Veggies = new Array('potato','garlic');
    console.log(Fruits[0]) //console the first element in array
    console.log(Fruits.length) //shows the size of array
    console.log(Veggies[Veggies.length -1]) //shows the last element in array
    const jonas =['age','height',Fruits];
    console.log(jonas.length) //3
    console.log(jonas) */

    // METHODS IN ARRAY

       //ADDS ELEMENT TO THE ARRAY)
        /* const Data=[12,14,78,9];
       Data.push(15);   //adds element to the last of the array
       console.log(Data);
       Data.unshift(12);   //adds element to the first of the array
       console.log(Data);
       
       //DELETING ELEMENTS TO THE ARRAY
       const Friends = new Array('john','Monica','joey')
       Friends.pop();   //delete the last element of the array 
       console.log(Friends);
       Friends.shift();   //delete the first element of the array
       console.log(Friends);
       //FINDING INDEX OF THE ELEMENT IN ARRAY
       console.log(Friends.indexOf('Monica'));
       console.log(Friends.indexOf('Bob')); //returns -1 due to absence of this element
       //CHECKING PRESENCE OF ELEMENT
       console.log(Friends.includes('Monica')); //returns true if present and false if absent
       if(Friends.includes('Monica')) console.log("hi i'm monica")   */


    // INTRO TO OBJECTS
    /* const RamArray = [ 'ram',
    2102-12,
    'Basketball'
     ];

     const Ram = {
        firstName:'Ram',
        Age: 20,
        Sport:'Basketball'
     }
     console.log(Ram.Age);
     console.log(Ram['Age']);
     const nameKey = 'Name';
     //console.log(Ram['first'+ namekey])
     const toKnow =prompt('What you want to know? Choose between firstName,Age,Sport.');
     if (Ram[toKnow]){
     console.log(Ram[toKnow])}
     else{
        console.log('it does not exist')
     }
    Ram.twitter = 'heyitsram';
    Ram['location']= 'Delhi'; 
    console.log(Ram); */

    //OBJECT METHODS
     /* const Anshika ={
        Name: 'anshika',
        Age: 21,
        CalcAge: function(Birthyear){
            return Birthyear;
        }    
     }
     //console.log(Anshika.CalcAge(12));
     console.log(this.Age);
     console.log(this);
     console.log(Anshika['CalcAge'](12))


    //  ITERATION THE FOR LOOP
    for(let rep=1;rep<=4;rep++){
        console.log(`hey there user ${rep}`)
    } */


    //LOOPING THE ARRAYS
   /*  for(let i=0;i<RamArray.length;i++){
        console.log(i+":"+RamArray[i])
    }
    const types =[]
    for(let k=0;k<RamArray.length;k++){
       // types[k]= typeof RamArray[k]
       types.push(RamArray[k])
    }
    console.log(types);
 */

    //break and continue
    /*  const Nemo = new Array('fish',19,'movie',['hi','hello','hey'],'good');
    console.log(typeof Nemo);
    console.log('-----ONLY STRINGS-----');
    for(let si=0;si<Nemo.length;si++){
        if(typeof Nemo[si] !== 'string') continue;
        console.log(Nemo[si])
    }
    console.log('-----ONLY NUMBERS-----');
    for(let di=0;di<Nemo.length;di++){
        if(typeof Nemo[di] == 'number') break;
        console.log(Nemo[di])
        
    }  */


    //LOOP IN LOOP
    /* for(let exercise=0;exercise<=2;exercise++){
        console.log(`Starting exercise${exercise}`);
        for(let repitition=0;repitition<=3;repitition++){
            console.log(`Exercise:${exercise} and repitation is ${repitition}`);
        }
    } */


    //THE WHILE LOOP
 /* let i=0;
    while(i<3){
        console.log('value is',i);
        i++
    }  */
    /* let dice = Math.trunc((Math.random()*6) +1);
    while(dice!==6){
        console.log(`you rolled a dice ${dice}`);
        dice = Math.trunc((Math.random()*6) +1);
        if(dice==6) {
            console.log("Loop stops")
        }
    } 
     */
    


    


       





