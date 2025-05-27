import java.util.Scanner;
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        try {
            // Get user input
            System.out.print("Enter text to write to file: ");
            String text = scanner.nextLine();
            
            // Write to file
            FileWriter writer = new FileWriter("output.txt");
            writer.write(text);
            writer.close();
            
            System.out.println("Text has been written to output.txt");
            
        } catch (IOException e) {
            System.out.println("An error occurred while writing to file: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}
