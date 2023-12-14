function findSecondLargest(arr: number[]): number 
{

    let firstMax: number = 0;
    let secondMax: number = 0;

    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] > firstMax) 
        {
            secondMax = firstMax;
            firstMax = arr[i];
        } 
        else if (arr[i] > secondMax && arr[i] !== firstMax) 
        {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

// Example usage
const numbers: number[] = [10, 5, 8, 20, 15];
try 
{
    const secondLargest: number = findSecondLargest(numbers);
    console.log("The second largest number is: " + secondLargest);
} 
