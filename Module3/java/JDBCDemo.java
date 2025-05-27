public class JDBCDemo {
    public static void main(String[] args) {
        StudentDAO studentDAO = new StudentDAO();
        
        // Add a new student
        Student newStudent = new Student(0, "John Doe", "john@example.com", 20);
        studentDAO.addStudent(newStudent);
        System.out.println("New student added.");
        
        // Get all students and display
        System.out.println("\nAll students:");
        List<Student> students = studentDAO.getAllStudents();
        for (Student student : students) {
            System.out.println(student);
        }
        
        // Update a student
        Student updatedStudent = new Student(1, "Jane Smith", "jane@example.com", 21);
        studentDAO.updateStudent(updatedStudent);
        System.out.println("\nStudent updated.");
        
        // Display updated list
        System.out.println("\nUpdated list of students:");
        students = studentDAO.getAllStudents();
        for (Student student : students) {
            System.out.println(student);
        }
    }
}
