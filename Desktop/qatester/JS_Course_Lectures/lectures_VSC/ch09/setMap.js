/*
Set()
WeakSet()
Map()
WeakMap()
*/

const u1 = {name: "Cynthia"};
const u2 = {name: "Jackson"};
const u3 = {name: "Olive"};
const u4 = {name: "James"};

const userRoles = new Map();

const arr =  new Array();


userRoles.set(u1, "User");
userRoles.set(u2, "Admin");
userRoles.set(u3, "User");

console.log(userRoles);

userRoles.clear();

console.log(userRoles);

userRoles
    .set(u1, "User")
    .set(u2, "Admin")
    .set(u3, "User")

console.log(userRoles);

const userRoles2 = new Map([
    [u1, "User"],
    [u2, "Admin"],
    [u3, "User"],
]);

userRoles.set(u4, );

console.log(userRoles);

// get()

console.log(userRoles2.get(u2));

// has

console.log(userRoles2.get(u1));
console.log(userRoles2.has(u1));
console.log(userRoles2.get(u4));
console.log(userRoles2.has(u4));

userRoles.set(u3, "Admin");

console.log(userRoles);

console.log(userRoles.size);


console.log("**************************")
// keys()
// values()
// enties()


for( let u of userRoles2.keys()) {
    console.log(u.name);
    // console.log(u);
}


for( let r of userRoles2.values()) {
    console.log(r);
}


for( let ur of userRoles2.entries()) {
    console.log(`${ur[0].name} : ${ur[1]}`);
}


for( let [u, r] of userRoles2.entries()) {
    console.log(`${u.name} : ${r}`);
}

console.log(userRoles2.entries());

console.log([...userRoles2.values()]);

console.log(userRoles2.delete(u2));

console.log(userRoles2.delete(u2));
console.log(userRoles2.size);

console.log(userRoles2);

userRoles2.set(u2, "Admin");
userRoles2.set(u2, "Admin");

console.log(userRoles2);
// userRoles2.clear();
// console.log(userRoles2);