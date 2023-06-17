// Write your solution in this file!
let employee = {
    name:'Sam',
    streetAddress: 'Popo Road'
}
function updateEmployeeWithKeyAndValue(employee , key, value){
    return {...employee, [key]:value }
}
updateEmployeeWithKeyAndValue(employee , key, value)

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    
    employee ['streetAddress'] = '12 Broadway'
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)

function  deleteFromEmployeeByKey(employee, key, value){
   const newEmployee = {... employee};
   delete newEmployee['name'];
   return newEmployee;

}
deleteFromEmployeeByKey(employee, key, value)

function destructivelyDeleteFromEmployeeByKey (employee,key,value){
delete employee['name'];
return employee;
}

console.log (employee);
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress')
console.log (employee)
