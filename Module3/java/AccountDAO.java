import java.sql.*;

public class AccountDAO {
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/bank_db";
    private static final String JDBC_USER = "root";
    private static final String JDBC_PASSWORD = "password";

    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
    }
    public boolean transferMoney(int fromAccount, int toAccount, double amount) {
        Connection conn = null;
        try {
            conn = getConnection();
            conn.setAutoCommit(false);
            String debitSQL = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
            try (PreparedStatement debitStmt = conn.prepareStatement(debitSQL)) {
                debitStmt.setDouble(1, amount);
                debitStmt.setInt(2, fromAccount);
                int rowsAffected = debitStmt.executeUpdate();
                if (rowsAffected != 1) {
                    throw new RuntimeException("Failed to debit from source account");
                }
            }
            String creditSQL = "UPDATE accounts SET balance = balance + ? WHERE id = ?";
            try (PreparedStatement creditStmt = conn.prepareStatement(creditSQL)) {
                creditStmt.setDouble(1, amount);
                creditStmt.setInt(2, toAccount);
                int rowsAffected = creditStmt.executeUpdate();
                if (rowsAffected != 1) {
                    throw new RuntimeException("Failed to credit destination account");
                }
            }
            conn.commit();
            return true;

        } catch (SQLException e) {
            if (conn != null) {
                try {
                    conn.rollback();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            e.printStackTrace();
            return false;
        } finally {
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    public Account getAccount(int id) {
        String sql = "SELECT * FROM accounts WHERE id = ?";
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setInt(1, id);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return new Account(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getDouble("balance")
                    );
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}
