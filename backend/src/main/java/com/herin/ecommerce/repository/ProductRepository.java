package com.herin.ecommerce.repository;

import com.herin.ecommerce.model.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    long count();
    Optional<ProductEntity> findById(Long productId);

    /**
     * Find all products with pagination
     */
    Page<ProductEntity> findAll(Pageable pageable);

    /**
     * Find products by category
     */
    Page<ProductEntity> findByCategoryIgnoreCase(String category, Pageable pageable);

    /**
     * Find products by name, description or category
     */
    Page<ProductEntity> findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrCategoryContainingIgnoreCase(
            String name,
            String description,
            String category,
            Pageable pageable
    );

    /**
     * Find products by image URL
     */
    Page<ProductEntity> findByImageUrlContainingIgnoreCase(String imageUrl, Pageable pageable);
}