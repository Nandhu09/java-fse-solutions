public class VirtualThreadsDemo {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        
        // Create 100,000 virtual threads
        for (int i = 0; i < 100000; i++) {
            Thread.startVirtualThread(() -> {
                System.out.println("Hello from virtual thread " + Thread.currentThread().getName());
            });
        }
        
        // Wait for all virtual threads to complete
        Thread.onSpinWait();
        
        long endTime = System.currentTimeMillis();
        System.out.println("\nTime taken with virtual threads: " + (endTime - startTime) + " ms");
        
        // Compare with traditional threads
        startTime = System.currentTimeMillis();
        
        // Create 100,000 traditional threads
        Thread[] threads = new Thread[100000];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                System.out.println("Hello from traditional thread " + Thread.currentThread().getName());
            });
            threads[i].start();
        }
        
        // Wait for all threads to complete
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        endTime = System.currentTimeMillis();
        System.out.println("\nTime taken with traditional threads: " + (endTime - startTime) + " ms");
    }
}
