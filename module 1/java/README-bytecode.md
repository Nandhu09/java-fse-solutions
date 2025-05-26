# HTTP Client and Bytecode Analysis

## HTTP Client Example

### Prerequisites
- Java 11 or higher
- Gson library (for JSON parsing)

### Setup
1. Add Gson dependency to your project:
```xml
<!-- Maven -->
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>
```

2. Compile and run:
```bash
javac GitHubAPI.java
java GitHubAPI
```

## Bytecode Inspection

### Compile and Inspect
1. Compile the BytecodeExample:
```bash
javac BytecodeExample.java
```

2. Inspect bytecode:
```bash
javap -c BytecodeExample
```

### Bytecode Analysis
The bytecode will show:
- Method signatures
- Local variable table
- Stack size
- Instructions for each method
- Constant pool

### Decompilation
1. First, compile the class:
```bash
javac BytecodeExample.java
```

2. Use a decompiler (JD-GUI or CFR):
- Download JD-GUI: https://github.com/java-decompiler/jd-gui/releases
- Open BytecodeExample.class in JD-GUI
- Analyze the decompiled source code

## Expected Output

### HTTP Client Output
```plaintext
Status code: 200

User Information:
Name: The Octocat
Bio: The Octocat is a GitHub mascot.
Followers: 100000
Following: 100000
Public Repos: 100000
```

### Bytecode Output
```plaintext
Compiled from "BytecodeExample.java"
public class BytecodeExample {
  public BytecodeExample();
    Code:
       0: aload_0
       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
       4: return

  public void increment();
    Code:
       0: aload_0
       1: dup
       2: getfield      #2                  // Field counter:I
       5: iconst_1
       6: iadd
       7: putfield      #2                  // Field counter:I
      10: return

  public int getCounter();
    Code:
       0: aload_0
       1: getfield      #2                  // Field counter:I
       4: ireturn

  public static void main(java.lang.String[]);
    Code:
       0: new           #3                  // class BytecodeExample
       3: dup
       4: invokespecial #4                  // Method "<init>":()V
       7: astore_1
       8: aload_1
       9: invokevirtual #5                  // Method increment:()V
      12: getstatic     #6                  // Field java/lang/System.out:Ljava/io/PrintStream;
      15: new           #7                  // class java/lang/StringBuilder
      18: dup
      19: invokespecial #8                  // Method java/lang/StringBuilder."<init>":()V
      22: ldc           #9                  // String Counter: 
      24: invokevirtual #10                 // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
      27: aload_1
      28: invokevirtual #11                 // Method getCounter:()I
      31: invokevirtual #12                 // Method java/lang/StringBuilder.append:(I)Ljava/lang/StringBuilder;
      34: invokevirtual #13                 // Method java/lang/StringBuilder.toString:()Ljava/lang/String;
      37: invokevirtual #14                 // Method java/io/PrintStream.println:(Ljava/lang/String;)V
      40: return
}
```
