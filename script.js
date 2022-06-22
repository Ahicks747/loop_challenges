// --- Print odds 1-20 ---
for (var i=1; i<21; i++) {
    if (i%2 !=0){
        console.log(i)
    }
}

// --- Decreasing Multiples of 3 ---
for (var i = 100; i >=0; i--) {
    if (i % 3 ==0) {
        console.log(i)
    }
}

// --- Print the sequence ---
for (var i = 4; i >=-4; i-=1.5 ) {
    console.log(i);
}

// --- Sigma ---
var sum = 0;
var c = 1;
while (c < 101) {
    sum += c;
    c++;
}
console.log(sum);

// --- Factorial ---
var product = 1;
var c = 1;
while (c < 13) {
    product *= c;
    c++;
}
console.log(product);