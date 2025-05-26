import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        // Generate a random number between 1 and 100
        int secretNumber = random.nextInt(100) + 1;
        int attempts = 0;
        int guess;
        
        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("I've picked a number between 1 and 100. Try to guess it!");
        
        // Loop until the user guesses correctly
        do {
            System.out.print("Enter your guess: ");
            guess = scanner.nextInt();
            attempts++;
            
            if (guess < secretNumber) {
                System.out.println("Too low! Try again.");
            } else if (guess > secretNumber) {
                System.out.println("Too high! Try again.");
            }
        } while (guess != secretNumber);
        
        // When the loop exits, the user has guessed correctly
        System.out.println("Congratulations! You guessed the number " + secretNumber + " correctly!");
        System.out.println("You took " + attempts + " attempts to guess correctly.");
        
        scanner.close();
    }
}
