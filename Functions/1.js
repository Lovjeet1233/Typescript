//lecture for functions
function greet(name) {
    console.log("hello ".concat(name));
}
greet("Lovjeet singh");
var names = ["alice", "bob", "jack"];
names.forEach(function (s) {
    console.log(s);
});
function Cordi(pt) {
    console.log("x cordinate is ".concat(pt.x, " and y cordinate is ").concat(pt.y));
}
Cordi({ x: 7, y: 8 });
function Cordii(pt) {
    console.log("x cordinate is ".concat(pt.x, " and y cordinate is ").concat(pt.y));
}
Cordii({ x: 7, y: 8 });
// Defining the `getStudent` function
function getStudent() {
    return {
        name: "John Doe",
        course: "Mathematics",
        marks: 95
    };
}
// Using the function
var detail = getStudent();
console.log(detail.name);
var req = { url: "https://example.com", method: "GET" };
// Change 2
handleRequest(req.url, req.method);
console.log(handleRequest);
