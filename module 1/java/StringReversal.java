import java.util.Scanner;

public class StringReversal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();
        
        // Using StringBuilder to reverse the string
        StringBuilder reversed = new StringBuilder(input);
        String result = reversed.reverse().toString();
        
        System.out.println("Reversed string: " + result);
        
        scanner.close();
    }
}
