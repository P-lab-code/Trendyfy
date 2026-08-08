package com.herin.ecommerce.service;

import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@ConditionalOnProperty(name = "stripe.enabled", havingValue = "true")
public class StripeService {
    @Value("${stripe.secret.key:dummy_key}")
    private String stripeApiKey;

    @PostConstruct
    public void init() {
        // Initialize Stripe with the API key if enabled
        Stripe.apiKey = stripeApiKey;
    }

    public String createCheckoutSession(
            List<String> productNames,
            List<Long> pricesInCents,
            List<Long> quantities,
            String successUrl,
            String cancelUrl
    ) throws Exception {
        if (productNames == null || productNames.isEmpty() || pricesInCents == null || pricesInCents.isEmpty()) {
            throw new IllegalArgumentException("Product names and prices must not be empty.");
        }
        if (productNames.size() != pricesInCents.size()) {
            throw new IllegalArgumentException("Product names and prices must have the same number of items.");
        }

        SessionCreateParams.Builder builder = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl(successUrl)
                .setCancelUrl(cancelUrl);

        for (int i = 0; i < productNames.size(); i++) {
            SessionCreateParams.LineItem.PriceData.ProductData productData =
                    SessionCreateParams.LineItem.PriceData.ProductData.builder()
                            .setName(productNames.get(i))
                            .build();
            SessionCreateParams.LineItem.PriceData priceData =
                    SessionCreateParams.LineItem.PriceData.builder()
                            .setCurrency("cad")
                            .setUnitAmount(pricesInCents.get(i))
                            .setProductData(productData)
                            .build();
            SessionCreateParams.LineItem lineItem =
                    SessionCreateParams.LineItem.builder()
                            .setPriceData(priceData)
                            .setQuantity(quantities.get(i))
                            .build();
            builder.addLineItem(lineItem);
        }

        SessionCreateParams params = builder.build();
        Session session = Session.create(params);

        return session.getUrl();
    }
}