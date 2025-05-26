public class InstrumentDemo {
    public static void main(String[] args) {
        // Create instruments
        Playable guitar = new Guitar();
        Playable piano = new Piano();
        
        // Play instruments
        System.out.println("Playing instruments:");
        guitar.play();
        piano.play();
    }
}
