function checkPrime(value: number): boolean 
{
    if (value <= 1) 
    {
        return false;
    }

    // Check for factors other than 1 and the number itself
    for (let i = 2; i <= (value/2); i++) 
    {
        if (value % i === 0) 
        {
            return false;
        }
    }
    
    return true;
}

// Example usage
const inputValue: number = 37; // You can change this value to test different inputs

const isPrime: boolean = checkPrime(inputValue);
console.log(`Is ${inputValue} a prime number? ${isPrime}`);
