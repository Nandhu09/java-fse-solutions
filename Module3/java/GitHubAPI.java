import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.io.IOException;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class GitHubAPI {
    private static final String API_URL = "https://api.github.com/users/";
    private static final Gson gson = new Gson();

    public static void main(String[] args) {
        // Create HttpClient
        HttpClient client = HttpClient.newHttpClient();

        // Create HttpRequest
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(API_URL + "octocat"))
            .header("Accept", "application/json")
            .build();

        try {
            // Send request and get response
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // Print response status
            System.out.println("Status code: " + response.statusCode());

            // Parse and print JSON response
            JsonObject json = gson.fromJson(response.body(), JsonObject.class);
            System.out.println("\nUser Information:");
            System.out.println("Name: " + json.get("name").getAsString());
            System.out.println("Bio: " + json.get("bio").getAsString());
            System.out.println("Followers: " + json.get("followers").getAsInt());
            System.out.println("Following: " + json.get("following").getAsInt());
            System.out.println("Public Repos: " + json.get("public_repos").getAsInt());

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
