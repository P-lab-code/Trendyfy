package com.herin.ecommerce.controller;

import com.herin.ecommerce.model.CategoryEntity;
import com.herin.ecommerce.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/categories")
@PreAuthorize("hasRole('ADMIN')")
public class AdminCategoryController {

    private final CategoryService categoryService;

    public AdminCategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // Get all categories
    @GetMapping
    public ResponseEntity<List<CategoryEntity>> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

    // Get category by ID
    @GetMapping("/{id}")
    public ResponseEntity<CategoryEntity> getCategoryById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(categoryService.getCategoryById(id));
    }

    // Add category
    @PostMapping
    public ResponseEntity<CategoryEntity> addCategory(
            @RequestBody CategoryEntity category
    ) {
        return ResponseEntity.ok(categoryService.addCategory(category));
    }

    // Update category
    @PutMapping("/{id}")
    public ResponseEntity<CategoryEntity> updateCategory(
            @PathVariable Long id,
            @RequestBody CategoryEntity category
    ) {
        return ResponseEntity.ok(
                categoryService.updateCategory(id, category)
        );
    }

    // Delete category
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(
            @PathVariable Long id
    ) {
        categoryService.deleteCategory(id);
        return ResponseEntity.noContent().build();
    }
}