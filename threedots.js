//1. old method of include all array in one
const ages1 = [12, 14, 17, 19]
const ages2 = [25, 27, 29]
const ages3 = [37, 39, 35, 33]

const Allages = ages1.concat(ages2).concat ([7]).concat(ages3)
// console.log(Allages)

// 2. new method of include all array in one

const Allages2 = [...ages1,...ages2, 7, ...ages3 ]
console.log(Allages2)

// find maximum number 
const business = 950
const job = 550
const politics = 850
const Takapoisha = [460, 670, 980]


const maximum = Math.max(business, job, politics)
console.log(maximum)

const maximum2 = Math.max(...Takapoisha)
console.log(maximum2)



