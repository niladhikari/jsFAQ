const normalPerson = {////////////////////////////
    firstName:'Hridoy',
    lastName: 'Adhikari',
    salary:17000,
    getFullName:function () {        //this is the methid
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function (amount) {  //this is the methid
       
         this.salary = this.salary - amount;
        return this.salary;     // this is the call back method return
    }
} ///////////////////////////////////////// this is the object
 normalPerson.chargeBill(500);
 console.log(normalPerson.salary);
