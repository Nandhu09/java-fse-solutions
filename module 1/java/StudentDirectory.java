import java.util.HashMap;
import java.util.Scanner;

public class StudentDirectory {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        HashMap<Integer, String> students = new HashMap<>();
        
        // Add students to directory
        System.out.println("Enter student details:");
        for (int i = 0; i < 3; i++) {
            System.out.print("Enter student ID: ");
            int id = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            
            System.out.print("Enter student name: ");
            String name = scanner.nextLine();
            
            students.put(id, name);
        }
        
        // Look up student by ID
        System.out.print("\nEnter student ID to look up: ");
        int lookupId = scanner.nextInt();
        
        String studentName = students.get(lookupId);
        if (studentName != null) {
            System.out.println("Student found: " + studentName);
        } else {
            System.out.println("No student found with ID " + lookupId);
        }
        
        scanner.close();
    }
}
