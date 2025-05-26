public class OperatorPrecedenceDemo {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        System.out.println("10 + 5 * 2 = " + result1);

        int result2 = (10 + 5) * 2;
        System.out.println("(10 + 5) * 2 = " + result2);

        int result3 = 10 + 5 * 2 - 4 / 2;
        System.out.println("10 + 5 * 2 - 4 / 2 = " + result3);

        int result4 = 10 * 5 + 2 / 4 - 1;
        System.out.println("10 * 5 + 2 / 4 - 1 = " + result4);

        int result5 = 20 / 2 * 5 - 10 + 5;
        System.out.println("20 / 2 * 5 - 10 + 5 = " + result5);
    }
}
