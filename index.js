let reaction = 0;
let memory = 0;
let verbal = 0;
let visual = 0;
let totalPercentage = 0;
function calculate () {
    getvalue();
    calculateresult();
    compair();
}
function getvalue () {
    reaction = Number(document.querySelector('.js-input-reaction').value);
    memory = Number(document.querySelector('.js-input-memory').value);
    verbal = Number(document.querySelector('.js-input-verbal').value);
    visual = Number(document.querySelector('.js-input-visual').value);
}
function calculateresult () {
    let addition = reaction + memory + verbal + visual;
    totalPercentage = Math.round(addition / 400 * 100 * 100) / 100;
    document.querySelector('.js-obtained-marks').innerText = totalPercentage;
}
function compair () {
    if (totalPercentage <= 20) {
        document.querySelector('.js-how-was-score').innerText = 'Very Bad';
        compairWithOthers();
    } else if ( 20 < totalPercentage && totalPercentage <= 50) {
        document.querySelector('.js-how-was-score').innerText = 'Not Bad';
        compairWithOthers();
    } else if ( 50 < totalPercentage && totalPercentage <= 60) {
        document.querySelector('.js-how-was-score').innerText = 'Good';
        compairWithOthers();
    } else if ( 60 < totalPercentage && totalPercentage <= 70) {
        document.querySelector('.js-how-was-score').innerText = 'Very Good';
        compairWithOthers();
    } else if ( 70 < totalPercentage && totalPercentage <= 90) {
        document.querySelector('.js-how-was-score').innerText = 'Better Than most';
        compairWithOthers();
    } else if ( 90 < totalPercentage && totalPercentage <= 100) {
        document.querySelector('.js-how-was-score').innerText = 'INSANE';
        compairWithOthers();
    }
}
function compairWithOthers () {
    document.querySelector('.js-compair-score').innerText = `You scored higher than ${Math.round(totalPercentage)}% of the people who have taken these tests.`;
}