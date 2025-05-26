import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ModernJavaDemo {
    public static void main(String[] args) {
        // Create person records
        Person person1 = new Person("John", 30);
        Person person2 = new Person("Alice", 25);
        Person person3 = new Person("Bob", 35);
        
        // Create list of people
        List<Person> people = new ArrayList<>();
        people.add(person1);
        people.add(person2);
        people.add(person3);
        
        // Use Stream API with records
        List<Person> adults = people.stream()
            .filter(p -> p.age() >= 18)
            .collect(Collectors.toList());
        
        System.out.println("Adults:");
        adults.forEach(System.out::println);
        
        // Test pattern matching with different objects
        System.out.println("\nTesting pattern matching:");
        testObject(person1);
        testObject(42);
        testObject("Hello");
        testObject(3.14);
    }
    
    // Method using instanceof with switch
    public static void testObject(Object obj) {
        if (obj instanceof Integer i) {
            System.out.println("Integer: " + i);
        } else if (obj instanceof String s) {
            System.out.println("String: " + s);
        } else if (obj instanceof Double d) {
            System.out.println("Double: " + d);
        } else if (obj instanceof Person p) {
            System.out.println("Person: " + p.name() + " (age: " + p.age() + ")");
        } else {
            System.out.println("Unknown type");
        }
    }
}
