function calculateArea(radius: number): number {
    const Pi: number = 3.14;
    const area: number = Pi * radius * radius;
    return area;
}

// Example usage
const userRadius: number = 5; // You can accept this value from the user via input or any other means

const circleArea: number = calculateArea(userRadius);
console.log(`The area of the circle with radius ${userRadius} is: ${circleArea}`);
