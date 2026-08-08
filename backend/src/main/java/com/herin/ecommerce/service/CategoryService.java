package com.herin.ecommerce.service;

import com.herin.ecommerce.model.CategoryEntity;
import com.herin.ecommerce.repository.CategoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // Get all categories
    public List<CategoryEntity> getAllCategories() {
        return categoryRepository.findAll();
    }

    // Get category by ID
    public CategoryEntity getCategoryById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Category not found"
                        )
                );
    }

    // Add category
    public CategoryEntity addCategory(CategoryEntity category) {

        if (category.getName() == null || category.getName().isBlank()) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Category name is required"
            );
        }

        if (categoryRepository.existsByNameIgnoreCase(category.getName())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Category already exists"
            );
        }

        return categoryRepository.save(category);
    }

    // Update category
    public CategoryEntity updateCategory(Long id, CategoryEntity category) {

        CategoryEntity existing = getCategoryById(id);

        if (category.getName() == null || category.getName().isBlank()) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Category name is required"
            );
        }

        if (!existing.getName().equalsIgnoreCase(category.getName())
                && categoryRepository.existsByNameIgnoreCase(category.getName())) {

            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Category already exists"
            );
        }

        existing.setName(category.getName());
        existing.setImageUrl(category.getImageUrl());

        return categoryRepository.save(existing);
    }

    // Delete category
    public void deleteCategory(Long id) {

        CategoryEntity existing = getCategoryById(id);

        categoryRepository.delete(existing);
    }
}