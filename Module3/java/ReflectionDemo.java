import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

public class ReflectionDemo {
    public static void main(String[] args) {
        try {
            // Load the Calculator class using reflection
            Class<?> calculatorClass = Class.forName("Calculator");
            
            // Create an instance of Calculator
            Object calculator = calculatorClass.getDeclaredConstructor().newInstance();
            
            // Get all declared methods
            Method[] methods = calculatorClass.getDeclaredMethods();
            
            System.out.println("Methods in Calculator class:");
            for (Method method : methods) {
                // Print method name and return type
                System.out.println("\nMethod: " + method.getName());
                System.out.println("Return Type: " + method.getReturnType().getName());
                
                // Print parameters
                Parameter[] parameters = method.getParameters();
                System.out.print("Parameters: ");
                for (Parameter param : parameters) {
                    System.out.print(param.getType().getName() + " " + param.getName() + ", ");
                }
                System.out.println();
                
                // Invoke the method with sample values
                if (method.getName().equals("add")) {
                    Object result = method.invoke(calculator, 5, 3);
                    System.out.println("Result of add(5, 3): " + result);
                } else if (method.getName().equals("divide")) {
                    Object result = method.invoke(calculator, 10.0, 2.0);
                    System.out.println("Result of divide(10.0, 2.0): " + result);
                }
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
