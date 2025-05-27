import java.util.concurrent.*;
import java.util.List;

public class ExecutorServiceDemo {
    // Callable task to calculate factorial
    public static class FactorialTask implements Callable<Long> {
        private final int number;

        public FactorialTask(int number) {
            this.number = number;
        }

        @Override
        public Long call() {
            long result = 1;
            for (int i = 1; i <= number; i++) {
                result *= i;
            }
            return result;
        }
    }

    public static void main(String[] args) {
        // Create a fixed thread pool with 4 threads
        ExecutorService executor = Executors.newFixedThreadPool(4);
        
        try {
            // Submit multiple tasks
            List<Future<Long>> futures = List.of(
                executor.submit(new FactorialTask(5)),
                executor.submit(new FactorialTask(10)),
                executor.submit(new FactorialTask(15)),
                executor.submit(new FactorialTask(20))
            );
            
            // Get results from all tasks
            System.out.println("\nFactorial Results:");
            for (int i = 0; i < futures.size(); i++) {
                try {
                    long result = futures.get(i).get();
                    System.out.println("Factorial of " + (i + 5) + " = " + result);
                } catch (ExecutionException e) {
                    e.printStackTrace();
                }
            }
            
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            // Shutdown the executor
            executor.shutdown();
        }
    }
}
