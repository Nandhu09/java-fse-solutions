public class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
    public static void main(String[] args) {
        Animal genericAnimal = new Animal();
        System.out.println("Generic Animal:");
        genericAnimal.makeSound();
        Dog dog = new Dog();
        System.out.println("\nDog:");
        dog.makeSound();
    }
}
