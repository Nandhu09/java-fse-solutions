public class BytecodeExample {
    private int counter;

    public void increment() {
        counter++;
    }

    public int getCounter() {
        return counter;
    }

    public static void main(String[] args) {
        BytecodeExample example = new BytecodeExample();
        example.increment();
        System.out.println("Counter: " + example.getCounter());
    }
}
