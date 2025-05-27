public class TypeCastingDemo {
    public static void main(String[] args) {
        double price = 199.99;
        System.out.println("Original double value: " + price);
        int priceInt = (int) price;
        System.out.println("After casting to int: " + priceInt);
        int quantity = 5;
        System.out.println("\nOriginal int value: " + quantity);
        double quantityDouble = (double) quantity;
        System.out.println("After casting to double: " + quantityDouble);
        double preciseValue = 123.456789;
        System.out.println("\nOriginal double value: " + preciseValue);
        int truncatedValue = (int) preciseValue;
        System.out.println("After casting to int: " + truncatedValue);
        double recoveredValue = (double) truncatedValue;
        System.out.println("After casting back to double: " + recoveredValue);
    }
}
