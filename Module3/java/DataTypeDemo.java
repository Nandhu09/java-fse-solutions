public class DataTypeDemo {
    public static void main(String[] args) {
        
        int age = 25;
        System.out.println("Integer (int): " + age);
        float height = 5.7f;
        double salary = 50000.50;
        System.out.println("Float: " + height);
        System.out.println("Double: " + salary);
        char grade = 'A';
        System.out.println("Character (char): " + grade);
        boolean isStudent = true;
        System.out.println("Boolean: " + isStudent);
        System.out.println("\nType Sizes:");
        System.out.println("int: " + Integer.BYTES + " bytes");
        System.out.println("float: " + Float.BYTES + " bytes");
        System.out.println("double: " + Double.BYTES + " bytes");
        System.out.println("char: " + Character.BYTES + " bytes");
        System.out.println("boolean: " + Byte.BYTES + " bytes");
    }
}
