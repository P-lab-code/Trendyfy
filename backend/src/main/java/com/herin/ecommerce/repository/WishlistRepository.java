package com.herin.ecommerce.repository;

import com.herin.ecommerce.model.ProductEntity;
import com.herin.ecommerce.model.UserEntity;
import com.herin.ecommerce.model.WishlistEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishlistRepository extends JpaRepository<WishlistEntity, Long> {

    /**
     * Get all wishlist items of a user
     */
    List<WishlistEntity> findByUser(UserEntity user);

    /**
     * Check if product already exists in wishlist
     */
    boolean existsByUserAndProduct(UserEntity user, ProductEntity product);

    /**
     * Remove product from wishlist
     */
    void deleteByUserAndProduct(UserEntity user, ProductEntity product);

    /**
     * Count wishlist items of user
     */
    long countByUser(UserEntity user);
}