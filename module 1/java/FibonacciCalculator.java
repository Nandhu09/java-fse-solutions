import java.util.Scanner;

public class FibonacciCalculator {
    // Recursive method to calculate Fibonacci number
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter a positive integer: ");
        int number = scanner.nextInt();
        
        if (number < 0) {
            System.out.println("Please enter a positive integer.");
            return;
        }
        
        System.out.println("Fibonacci number at position " + number + " is: " + fibonacci(number));
        scanner.close();
    }
}
