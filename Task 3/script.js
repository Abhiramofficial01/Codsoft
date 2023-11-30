class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }
  
    checkBalance() {
      return this.balance;
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return true;
      } else {
        return false;
      }
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        return true;
      } else {
        return false;
      }
    }
  }
  
  const account = new BankAccount(1000);
  
  function checkBalance() {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = `Balance: $${account.checkBalance()}`;
  }
  
  function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    const messageElement = document.getElementById('message');
    const errorMessageElement = document.getElementById('error-message');
  
    if (!isNaN(amount)) {
      const success = account.withdraw(amount);
      if (success) {
        messageElement.textContent = `Withdrawal successful. New balance: $${account.checkBalance()}`;
        errorMessageElement.textContent = '';
      } else {
        errorMessageElement.textContent = 'Insufficient funds';
        messageElement.textContent = '';
      }
    } else {
      errorMessageElement.textContent = 'Invalid amount';
      messageElement.textContent = '';
    }
  }
  
  function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    const messageElement = document.getElementById('message');
    const errorMessageElement = document.getElementById('error-message');
  
    if (!isNaN(amount)) {
      const success = account.deposit(amount);
      if (success) {
        messageElement.textContent = `Deposit successful. New balance: $${account.checkBalance()}`;
        errorMessageElement.textContent = '';
      } else {
        errorMessageElement.textContent = 'Invalid deposit amount';
        messageElement.textContent = '';
      }
    } else {
      errorMessageElement.textContent = 'Invalid amount';
      messageElement.textContent = '';
    }
  }
  