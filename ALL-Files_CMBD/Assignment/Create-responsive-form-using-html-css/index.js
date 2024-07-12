function main(input) {
  const n = parseInt(input);

  if (n == 1) {
    console.log("1 is a prime number.");
  } else {
    let isPrime = true;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
    console.log(
      isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`
    );
  }
}
