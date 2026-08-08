package com.herin.ecommerce.controller;

import com.herin.ecommerce.dto.StripeRequestDTO;
import com.herin.ecommerce.service.StripeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/stripe")
@ConditionalOnProperty(
        name = "stripe.enabled",
        havingValue = "true",
        matchIfMissing = false
)
public class StripeController {

    private final StripeService stripeService;

    @Autowired
    public StripeController(StripeService stripeService) {
        this.stripeService = stripeService;
    }

    @PostMapping("/create-checkout-session")
    public ResponseEntity<Map<String, String>> createCheckoutSession(
            @RequestBody StripeRequestDTO stripeRequestDTO) {

        try {

            List<String> productNames = stripeRequestDTO.getProductNames();
            List<Long> pricesInCents = stripeRequestDTO.getPricesInCents();
            List<Long> quantities = stripeRequestDTO.getQuantities();

            String successUrl = stripeRequestDTO.getSuccessUrl();
            String cancelUrl = stripeRequestDTO.getCancelUrl();

            String checkoutUrl = stripeService.createCheckoutSession(
                    productNames,
                    pricesInCents,
                    quantities,
                    successUrl,
                    cancelUrl
            );

            return ResponseEntity.ok(
                    Collections.singletonMap("url", checkoutUrl)
            );

        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("error", e.getMessage()));
        }
    }
}