type PaymentMethod = 'card' | 'paypal' | 'transfer';

function executeTransaction(params: { amount: number; currency: string; method: PaymentMethod }) {
    return { success: true, transactionId: 'mock-id' };
}

export function processPayment(amount: number, currency: string, method: PaymentMethod) {
    if (amount <= 0) throw new Error('Amount must be positive');
    const fee = calculateFee(amount, method);
    return executeTransaction({ amount: amount + fee, currency, method });

}


function calculateFee(amount: number, method: PaymentMethod): number {
    const rates: Record<PaymentMethod, number> = { card: 0.029, paypal: 0.034, transfer: 0 };
    return amount * rates[method];
}