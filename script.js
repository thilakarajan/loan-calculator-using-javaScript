
const loanAmountInput = document.getElementById('loan-amount')
const interestRateInput = document.getElementById('interest-rate')
const loanTermInput = document.getElementById('loan-term')
const monthlyPaymentOutput = document.getElementById('monthly-payment')


function calculateMonthlyPayment() {
  const loanAmount = parseFloat(loanAmountInput.value)
  const interestRate = parseFloat(interestRateInput.value) / 100 / 12
  const loanTerm = parseInt(loanTermInput.value) * 12

  const monthlyPayment =
    (loanAmount * interestRate * (1 + interestRate) ** loanTerm) /
    ((1 + interestRate) ** loanTerm - 1)

  monthlyPaymentOutput.value = monthlyPayment.toFixed(2)
}


loanAmountInput.addEventListener('input', calculateMonthlyPayment)
interestRateInput.addEventListener('input', calculateMonthlyPayment)
loanTermInput.addEventListener('input', calculateMonthlyPayment)


calculateMonthlyPayment()
