import java.util.ArrayList;
import java.util.Scanner;

public class StudentList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> students = new ArrayList<>();
        
        // Get number of students
        System.out.print("Enter number of students: ");
        int numStudents = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        
        // Add students to list
        System.out.println("Enter student names:");
        for (int i = 0; i < numStudents; i++) {
            System.out.print("Student " + (i + 1) + ": ");
            String name = scanner.nextLine();
            students.add(name);
        }
        
        // Display all students
        System.out.println("\nList of students:");
        for (int i = 0; i < students.size(); i++) {
            System.out.println((i + 1) + ". " + students.get(i));
        }
        
        scanner.close();
    }
}
