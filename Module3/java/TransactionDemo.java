public class TransactionDemo {
    public static void main(String[] args) {
        AccountDAO accountDAO = new AccountDAO();
        
        // Get initial balances
        System.out.println("Initial balances:");
        Account source = accountDAO.getAccount(1);
        Account destination = accountDAO.getAccount(2);
        System.out.println("Source account: " + source);
        System.out.println("Destination account: " + destination);
        
        // Transfer money
        double amount = 100.0;
        boolean success = accountDAO.transferMoney(1, 2, amount);
        
        if (success) {
            System.out.println("\nTransfer successful!");
            System.out.println("Updated balances:");
            source = accountDAO.getAccount(1);
            destination = accountDAO.getAccount(2);
            System.out.println("Source account: " + source);
            System.out.println("Destination account: " + destination);
        } else {
            System.out.println("\nTransfer failed. Transaction rolled back.");
        }
    }
}
