function getAlphaOmega(num) {
    if (num % 15 === 0) return "AlphaOmega";
    if (num % 3 === 0) return "Alpha";
    if (num % 5 === 0) return "Omega";
    return "NoSymbol";
}

// Apply the function to numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(`${i}: ${getAlphaOmega(i)}`);
}
