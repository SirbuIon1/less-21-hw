/* eslint-disable no-undef */
function getText(e) {
    console.log('event: ', e.target);

    switch (e.target.className) {
    case 'four':
        five.onclick = document.getElementById('eventDeleg').innerHTML = ('You clicked on : First button');
        break;

    case 'five':
        five.onclick = document.getElementById('eventDeleg').innerHTML = ('You clicked on : Second button');
        break;

    case 'six':
        six.onclick = document.getElementById('eventDeleg').innerHTML = ('You clicked on : Third button');
        break;
    default:
        document.getElementById('eventDeleg').innerHTML = ('You clicked on : something else');
    }
}

document.getElementById('delegation').addEventListener('click', getText);

function showTextOne() {
    document.getElementById('out').innerHTML = ('You entered: First button');
}
function showTextTwo() {
    document.getElementById('out').innerHTML = ('You entered: Second button');
}
function showTextThree() {
    document.getElementById('out').innerHTML = ('You entered: Third button');
}
document.getElementById('button-1').addEventListener('click', showTextOne);
document.getElementById('button-2').addEventListener('click', showTextTwo);
document.getElementById('button-3').addEventListener('click', showTextThree);
