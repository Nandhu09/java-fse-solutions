import java.io.*;
import java.net.*;
import java.util.*;

public class ChatServer {
    private static final int PORT = 12345;
    private static Set<PrintWriter> writers = new HashSet<>();

    public static void main(String[] args) {
        System.out.println("Chat Server is starting...");
        
        try (ServerSocket serverSocket = new ServerSocket(PORT)) {
            System.out.println("Chat Server is listening on port " + PORT);
            
            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("New client connected");
                new ClientHandler(clientSocket).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static class ClientHandler extends Thread {
        private Socket socket;
        private BufferedReader reader;
        private PrintWriter writer;
        private String clientName;

        public ClientHandler(Socket socket) {
            this.socket = socket;
        }

        public void run() {
            try {
                // Set up input and output streams
                reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                writer = new PrintWriter(socket.getOutputStream(), true);

                // Add this client's writer to the set
                writers.add(writer);

                // Read client's name
                clientName = reader.readLine();
                broadcast("[" + clientName + "] has joined the chat");

                // Handle messages from this client
                String message;
                while ((message = reader.readLine()) != null) {
                    if (message.equalsIgnoreCase("/quit")) {
                        break;
                    }
                    broadcast("[" + clientName + "]: " + message);
                }

                // Client disconnected
                writers.remove(writer);
                broadcast("[" + clientName + "] has left the chat");

            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        private void broadcast(String message) {
            for (PrintWriter writer : writers) {
                writer.println(message);
            }
        }
    }
}
