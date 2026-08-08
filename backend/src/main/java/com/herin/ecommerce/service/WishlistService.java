package com.herin.ecommerce.service;

import com.herin.ecommerce.dto.WishlistDTO.WishlistResponseDTO;
import com.herin.ecommerce.exception.BadRequestException;
import com.herin.ecommerce.model.ProductEntity;
import com.herin.ecommerce.model.UserEntity;
import com.herin.ecommerce.model.WishlistEntity;
import com.herin.ecommerce.repository.ProductRepository;
import com.herin.ecommerce.repository.UserRepository;
import com.herin.ecommerce.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WishlistService {

    private final WishlistRepository wishlistRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Autowired
    public WishlistService(
            WishlistRepository wishlistRepository,
            ProductRepository productRepository,
            UserRepository userRepository
    ) {
        this.wishlistRepository = wishlistRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    private UserEntity getCurrentUser() {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String username = authentication.getName();

        return userRepository.findByUsername(username)
                .orElseThrow(() -> new BadRequestException("User not found"));
    }

    @Transactional
    public void addToWishlist(Long productId) {
        UserEntity user = getCurrentUser();

        ProductEntity product = productRepository.findById(productId)
                .orElseThrow(() -> new BadRequestException("Product not found"));

        if (wishlistRepository.existsByUserAndProduct(user, product)) {
            throw new BadRequestException("Product already in wishlist");
        }

        WishlistEntity wishlist = new WishlistEntity();
        wishlist.setUser(user);
        wishlist.setProduct(product);

        wishlistRepository.save(wishlist);
    }

    public List<WishlistResponseDTO> getWishlist() {
        UserEntity user = getCurrentUser();
        List<WishlistEntity> wishlists = wishlistRepository.findByUser(user);

        return wishlists.stream().map(wishlist -> {
            ProductEntity product = wishlist.getProduct();

            // Safely convert BigDecimal price to double (or handle if null)
            BigDecimal rawPrice = product.getPrice();
            double priceValue = rawPrice != null ? rawPrice.doubleValue() : 0.0;

            return new WishlistResponseDTO(
                    wishlist.getId(),
                    product.getId(),
                    product.getName(),
                    priceValue,
                    product.getImageUrl()
            );
        }).collect(Collectors.toList());
    }

    @Transactional
    public void removeWishlist(Long productId) {
        UserEntity user = getCurrentUser();

        ProductEntity product = productRepository.findById(productId)
                .orElseThrow(() -> new BadRequestException("Product not found"));

        if (!wishlistRepository.existsByUserAndProduct(user, product)) {
            throw new BadRequestException("Product not found in wishlist");
        }

        wishlistRepository.deleteByUserAndProduct(user, product);
    }

    public long getWishlistCount() {
        UserEntity user = getCurrentUser();
        return wishlistRepository.countByUser(user);
    }
}