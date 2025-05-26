import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReaderDemo {
    public static void main(String[] args) {
        try {
            // Open file for reading
            BufferedReader reader = new BufferedReader(new FileReader("output.txt"));
            
            // Read and display each line
            String line;
            System.out.println("Contents of output.txt:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            
            reader.close();
            
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file: " + e.getMessage());
        }
    }
}
