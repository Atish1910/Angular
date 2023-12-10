public class LargestNumber 
{
    public static void main(String[] args) 
    {
        int[] numbers = {10, 5, 8, 20, 15};
        int largestNumber = findLargestNumber(numbers);

        System.out.println("The largest number is: " + largestNumber);
    }

    public static int findLargestNumber(int[] numbers) 
    {
        int maxNumber = Integer.MIN_VALUE;

        for (int number : numbers) 
        {
            if (number > maxNumber) 
            {
                maxNumber = number;
            }
        }

        return maxNumber;
    }
}
