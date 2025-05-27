# JDBC Example Setup Instructions

## Prerequisites
- MySQL Server installed
- MySQL JDBC Driver (mysql-connector-java) added to classpath

## Setup Steps

1. Create the database and table:
```sql
source create_database.sql
```

2. Update the database credentials in StudentDAO.java:
```java
private static final String JDBC_URL = "jdbc:mysql://localhost:3306/school_db";
private static final String JDBC_USER = "root";
private static final String JDBC_PASSWORD = "your_password_here";
```

3. Add MySQL JDBC driver to your project:
- Download from: https://dev.mysql.com/downloads/connector/j/
- Add the JAR file to your project's classpath

## Running the Example
1. Compile the Java files:
```bash
javac *.java
```

2. Run the demo:
```bash
java JDBCDemo
```
