// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// accessing object of object of object .....
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // two obj in one
// const obj3 = Object.assign({}, obj1, obj2, obj4) // one obj

// const obj3 = {...obj1, ...obj2} // one obj
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 1,
        email: "h2@gmail.com"
    },
    {
        id: 1,
        email: "h3@gmail.com"
    },
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // keys
// console.log(Object.values(tinderUser)); // values
// console.log(Object.entries(tinderUser)); // keys and value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor); // hitesh

// instructor has courseInstructor value
// directly accessible

// not accessible directly
console.log(courseInstructor);

// const {courseInstructor: instructor} = course

// directly accessible
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

