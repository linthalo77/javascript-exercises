const findTheOldest = function(peopleArr) {
    const currentYear = 2025;
    let oldestAge = 0;
    let oldestPerson;

    peopleArr.map((person) => {
        let age;
        if("yearOfDeath" in person) 
            age = person.yearOfDeath - person.yearOfBirth;
        else 
            age = currentYear - person.yearOfBirth;

        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    })

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
