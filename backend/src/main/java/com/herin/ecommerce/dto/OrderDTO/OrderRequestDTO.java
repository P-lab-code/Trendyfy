package com.herin.ecommerce.dto.OrderDTO;

public class OrderRequestDTO {

    private String paymentMethod;

    public OrderRequestDTO() {
    }

    public OrderRequestDTO(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
}