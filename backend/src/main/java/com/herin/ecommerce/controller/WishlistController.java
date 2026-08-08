package com.herin.ecommerce.controller;

import com.herin.ecommerce.dto.WishlistDTO.WishlistResponseDTO;
import com.herin.ecommerce.service.WishlistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    /**
     * Add Product to Wishlist
     */
    @PostMapping("/{productId}")
    public ResponseEntity<String> addToWishlist(@PathVariable Long productId) {
        wishlistService.addToWishlist(productId);
        return ResponseEntity.ok("Product added to wishlist");
    }

    /**
     * Get Logged-in User Wishlist
     */
    @GetMapping
    public ResponseEntity<List<WishlistResponseDTO>> getWishlist() {
        System.out.println("GET WISHLIST CALLED"); // Debug line added here
        return ResponseEntity.ok(wishlistService.getWishlist());
    }

    /**
     * Remove Product from Wishlist
     */
    @DeleteMapping("/{productId}")
    public ResponseEntity<String> removeWishlist(@PathVariable Long productId) {
        wishlistService.removeWishlist(productId);
        return ResponseEntity.ok("Product removed from wishlist");
    }
}