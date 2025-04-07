function test(a) {
    console.log("test");
    a()
}
function test1(b) {
    console.log("test 1");
    b()
}
function test2(c) {
    console.log("test2");
    c()
}function test3(d) {   
    console.log("test3");
    d()
}
test (()=>{test1 (()=>{test2 (()=>{test3 (()=>{console.log("final")})})})})