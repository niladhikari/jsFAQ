const normalPerson = {
  ////////////////////////////
  firstName: "Hridoy",
  lastName: "Adhikari",
  salary: 17000,
  getFullName: function () {
    //this is the methid
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount,tips,tax) {
    //this is the methid
    console.log(this);
    this.salary = this.salary - amount-tips-tax;
    return this.salary; // this is the call back method return
  },
}; ///////////////////////////////////////// this is the object

const heroPerson = {
  firstName: "Hero",
  lastName: "Kalam",
  salary: 27000,
};

const Bilan = {
  firstName: "Bilan",
  lastName: "Korim",
  salary: 28000,
};

// const heroChangeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChangeBill(2000,100,10);                      //bind using for the another object method use the own object method.
// heroChangeBill(3000,200,20);                     // there create a funciton for calling the another object method
// console.log(heroPerson.salary);

normalPerson.chargeBill.call(Bilan, 900,300,30); // call function using for the use another object method directlyt.
console.log(Bilan.salary);                // there are don't create any function for call method


normalPerson.chargeBill.apply(heroPerson, [900,250,25]); // apply function using for the use another object method directlyt.
console.log(heroPerson.salary);                  // when the paramether pass must using the array formate