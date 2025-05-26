public class MessagePrinter extends Thread {
    private String message;
    
    public MessagePrinter(String message) {
        this.message = message;
    }
    
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(message + " - " + i);
            try {
                Thread.sleep(100); // Small delay to see interleaving
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
