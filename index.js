

// let saysomething = (num) => {
//     return num * num
// }
// num = saysomething(45)
// console.log(num)

// class vehicle {

//     myVar = 'Yes'

//     constructor(par1, par2, par3) {
//         this.color = par1
//         this.name = par2
//         this.cc = par3
//     }

//     saySomething = () => {
//         console.log(this.color)
//     }
// }
// let obj1 = new vehicle('red', 'Bazaz', 125)
// let obj2 = new vehicle('Blue', 'Pulser', 150)
// let obj3 = new vehicle('Black', 'Yahmaha', 165)

// console.log(obj1, obj2, obj3)
// obj1.saySomething()


// class vehicle {

//     myVar = 'Yes'

//     constructor(par1, par2, par3) {
//         this.color = par1
//         this.name = par2
//         this.cc = par3
//     }

//     saySomething = () => {
//         console.log(this.color)
//     }
// }




// class car extends vehicle {

//     constructor(numwheel, color, name, cc) {
//         super(color, name, cc)
//         this.wheel = numwheel
//     }


// }
// let obj1 = new car(2, 'Black', 'Bazaz', 150)
// console.log(obj1)

// let a = [1, 2, 3, 4]
// let b = [5, 6, 7, 8]
// let arr = [...a, ...b, 9, 10, 11]
// console.log(arr)

// let person1 = { name: 'Tanmoy', age: '26', dist: 'Khulna' }
// let person2 = { ...person1, nationaliy: 'Bnagladeshi' }
// console.log(person1)
// console.log(person2)

// let num = (...a) => {
//     console.log(a)
// }
// num(1, 2, 3, 5)

// let arr = [1, 2, 3]
// let [a, , c] = arr
// console.log(a, c)

let numbers = [1, 2, 3, 4, 5, 6, 7]
let square = numbers.map(function (item) {
    return item * item
})
console.log(square)

let cubes = numbers.map((item => {
    return item ** 3
}))
console.log(cubes)
