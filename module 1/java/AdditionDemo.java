public class AdditionDemo {
    // Method that takes two integers
    public static int add(int a, int b) {
        return a + b;
    }

    // Method that takes two doubles
    public static double add(double a, double b) {
        return a + b;
    }

    // Method that takes three integers
    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        // Test the overloaded methods
        System.out.println("Adding two integers (5 + 3): " + add(5, 3));
        System.out.println("Adding two doubles (2.5 + 3.7): " + add(2.5, 3.7));
        System.out.println("Adding three integers (2 + 3 + 4): " + add(2, 3, 4));
    }
}
