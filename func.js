function squareNumber(num){

    num = num*num;

    document.getElementById('squareNumber').innerText=num;

    return num;

};

function halfNumber(num){

    num = num/2;

    document.getElementById('halfNumber').innerText=num;

    return num;

};

function percentOf(num1, num2) {

    var newNum = (num1/num2) * 100;

    document.getElementById('percentOf').innerText=newNum;

    return newNum;

};

function areaOfCircle(r) {

    var area = (3.14159*(r*r)).toFixed(2);

    document.getElementById('areaOfCircle').innerText=area;

    return area;

};

function multiOp(num) {

    var one, two, three, four;

    one = num/2;
    two = one*one;
    three = (3.14159*(two*two)).toFixed(2);
    four = ((three/(three*three)) * 100).toFixed(2);

    document.getElementById('multiOp').innerText=(one.toString() + " " + two.toString() + " " + three.toString() + " " + four.toString());

    return four;

}