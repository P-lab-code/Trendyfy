package com.herin.ecommerce.controller;

import com.herin.ecommerce.model.UserPrincipal;
import com.herin.ecommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/place")
    public ResponseEntity<String> placeOrder(
            @AuthenticationPrincipal UserPrincipal principal) {

        orderService.placeOrder(principal.getUser().getId());

        return ResponseEntity.ok("Order placed successfully");
    }
}