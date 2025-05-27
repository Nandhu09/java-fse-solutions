import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ConcurrencyDemo {
    public static void main(String[] args) {
        MessagePrinter thread1 = new MessagePrinter("Thread 1");
        MessagePrinter thread2 = new MessagePrinter("Thread 2");
        
        thread1.start();
        thread2.start();
        List<String> words = new ArrayList<>();
        words.add("Java");
        words.add("Python");
        words.add("C++");
        words.add("JavaScript");
        
        System.out.println("\nOriginal list:");
        System.out.println(words);
        Collections.sort(words, (a, b) -> a.compareTo(b));
        
        System.out.println("\nSorted list:");
        System.out.println(words);
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
