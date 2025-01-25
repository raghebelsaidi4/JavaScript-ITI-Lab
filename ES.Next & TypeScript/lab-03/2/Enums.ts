enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED",
}

function getStatusMessage(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return "Your order is pending.";
        case OrderStatus.Shipped:
            return "Your order has been shipped.";
        case OrderStatus.Delivered:
            return "Your order has been delivered.";
        case OrderStatus.Cancelled:
            return "Your order was cancelled.";
        default:
            return "Unknown status.";
    }
}

// Test
console.log(getStatusMessage(OrderStatus.Pending));