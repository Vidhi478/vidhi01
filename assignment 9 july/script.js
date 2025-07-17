const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') return;

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  updateLocalStorage();
  renderTransactions();
  text.value = '';
  amount.value = '';
}

function deleteTransaction(id) {
  transactions = transactions.filter(txn => txn.id !== id);
  updateLocalStorage();
  renderTransactions();
}

function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function renderTransactions() {
  list.innerHTML = '';
  let total = 0, inc = 0, exp = 0;

  transactions.forEach(txn => {
    const sign = txn.amount < 0 ? '-' : '+';
    const li = document.createElement('li');
    li.className = txn.amount < 0 ? 'minus' : 'plus';
    li.innerHTML = `
      ${txn.text} <span>${sign}₹${Math.abs(txn.amount)}</span>
      <button class="delete-btn" onclick="deleteTransaction(${txn.id})">❌</button>
    `;
    list.appendChild(li);

    total += txn.amount;
    if (txn.amount > 0) inc += txn.amount;
    else exp += txn.amount;
  });

  balance.textContent = `₹${total.toFixed(2)}`;
  income.textContent = `₹${inc.toFixed(2)}`;
  expense.textContent = `₹${Math.abs(exp).toFixed(2)}`;
}

form.addEventListener('submit', addTransaction);

renderTransactions();
