let i = 1;

while(i <= 100) {
    if(i % 3 === 0 && i % 4 === 0) {
        console.log('Bish-Bosh');
    } else if(i % 3 === 0) {
        console.log('Bish');
    } else if(i % 4 === 0) {
        console.log('Bosh');
    } else {
        console.log(i);
    }
    i++;
}