exports.myName = "Murat Can";
exports.muratData = {
  key: 1,
  surName: "Öncü",
  born: 1992,
  job: ["Web Developer", "Footballer", "Finance Expert"],
  city: "Berlin",
};
exports.ageCalculator = (currentYear, born) => {
  return currentYear - born;
};
exports.introduction = (name, surName, age, job, city) => {
  return `My name is ${name} ${surName} and I am ${age} years old.I work in ${city} as a/an ${job}`;
};

//! Second way
// module.exports = { myName, muratData, ageCalculator, introduction };
