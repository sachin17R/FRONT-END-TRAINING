class baseClass{

    data1 = "jsakjkajsak";
    data2 = 45454;
    constructor(){
        console.log("this is base class objrect")
    }

     toString = () => `${this.data1} and ${this.data2}`;
  

    sachin = () => console.log("this is sachin function")
}

class childClass extends baseClass{
    data3= "jkajkajkjskajskjasa";

    pavan = () =>{ console.log("this is pavan function")
    }
    toString(){
        const it = super.toString();
        it += this.data3;
        return;
        
    }

}

const data = new childClass();
data.pavan();
data.sachin();
console.log(baseClass.toString());


const sachin = {};
sachin.age = 22;
sachin.ph = 9743;
sachin.heigth = 175;

 data5 = JSON.stringify(sachin);

 document.write(data5)



