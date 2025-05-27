public class MethodOverloadingDemo {
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
        System.out.println("Sum of 5 and 3: " + add(5, 3));
        System.out.println("Sum of 2.5 and 3.7: " + add(2.5, 3.7));
        System.out.println("Sum of 2, 3, and 4: " + add(2, 3, 4));
    }
}
