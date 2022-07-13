'use strict';

function friendNumb(x, y) {
    let sumF = 0, sumS = 0;

    if (x > 0 && y > 0) {
        for (let i = 0; i <= x; i++) {
            if (x % i == 0) {
                sumF += i;
            }
        }
        for (let i = 0; i <= y; i++) {
            if (y % i == 0) {
                sumS += i;
            }
        }
        if (sumF == sumS) {
            console.log('Dost ədəddirlər')
        } else {
            console.log('Dost ədəd deyillər');
        }
    } else {
        console.log('Zəhmət olmasa müsbət ədədlər daxil edin.')
    }
}
friendNumb(2, -10);