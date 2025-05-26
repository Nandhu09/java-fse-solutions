import java.io.*;
import java.net.*;
import java.util.Scanner;

public class ChatClient {
    private static final String SERVER_HOST = "localhost";
    private static final int SERVER_PORT = 12345;

    public static void main(String[] args) {
        try {
            // Connect to server
            Socket socket = new Socket(SERVER_HOST, SERVER_PORT);
            BufferedReader serverReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter serverWriter = new PrintWriter(socket.getOutputStream(), true);
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter your name: ");
            String name = scanner.nextLine();
            serverWriter.println(name);
            Thread readThread = new Thread(() -> {
                try {
                    String message;
                    while ((message = serverReader.readLine()) != null) {
                        System.out.println(message);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
            readThread.start();
            System.out.println("Type '/quit' to exit");
            while (true) {
                String message = scanner.nextLine();
                if (message.equalsIgnoreCase("/quit")) {
                    break;
                }
                serverWriter.println(message);
            }
            scanner.close();
            serverWriter.close();
            serverReader.close();
            socket.close();
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
