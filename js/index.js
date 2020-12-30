import { colorCodes, deviceType, randomCellGenerator } from './helper';


window.onload = function () {
    console.log('page loaded');
    console.log(colorCodes, deviceType());

    //select first 2 tiles randomly
    let firstTile = randomCellGenerator();
    let secondTile = randomCellGenerator();

    //console.log(firstTile, secondTile);

    if (secondTile === firstTile) {
        while (secondTile === firstTile)
            secondTile = randomCellGenerator();

    }

    console.log(firstTile, secondTile);
    let initialBlock = colorCodes.find(number => number.value === 2);
    let tileOne = document.querySelector(`#cell-${firstTile}`);
    let tileTwo = document.querySelector(`#cell-${secondTile}`);
    tileOne.innerHTML = initialBlock.value;
    tileTwo.innerHTML = initialBlock.value;

    tileOne.style.cssText = `color:${initialBlock.color};background-color:${initialBlock.backgroundColor}`;
    tileTwo.style.cssText = `color:${initialBlock.color};background-color:${initialBlock.backgroundColor}`;


    console.log(initialBlock);

};