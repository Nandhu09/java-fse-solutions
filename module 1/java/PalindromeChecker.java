import java.util.Scanner;

public class PalindromeChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Get input from user
        System.out.print("Enter a string to check if it's a palindrome: ");
        String input = scanner.nextLine();
        
        // Remove non-alphanumeric characters and convert to lowercase
        String cleaned = input.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        
        // Reverse the cleaned string
        String reversed = new StringBuilder(cleaned).reverse().toString();
        
        // Check if it's a palindrome
        boolean isPalindrome = cleaned.equals(reversed);
        
        // Display result
        if (isPalindrome) {
            System.out.println("'" + input + "' is a palindrome!");
        } else {
            System.out.println("'" + input + "' is not a palindrome.");
        }
        
        scanner.close();
    }
}
