let a1 = 0, a2 = 1, sum = 0;

for (i = 0; i < 20; i++) {
    sum = a1 + a2;
    a1 = a2;
    a2 = sum;

    console.log(sum)
}



