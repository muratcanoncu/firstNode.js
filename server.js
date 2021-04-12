const myDataObject = require("./myNode");
console.log(myDataObject);

console.log(
  myDataObject.introduction(
    myDataObject.myName,
    myDataObject.muratData.surName,
    myDataObject.ageCalculator(2021, myDataObject.muratData.born),
    myDataObject.muratData.job[0],
    myDataObject.muratData.city
  )
);
