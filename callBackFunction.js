function explain_callback(name,age,task) {
    console.log('Hello',name)
    console.log('Your age',age)
    task();
}
 function girlfriend(){
     console.log('Waiting for girlfriend, to go home')
 }
 function big_daddy(){
    console.log('Waiting for big-daddy')
}
function wedding(){
    console.log('Waiting for the wedding day')
}

explain_callback('Mahbub',23,girlfriend)
explain_callback('Justin',23,big_daddy)
explain_callback('Najmul',28,wedding)