package com.herin.ecommerce.repository;

import com.herin.ecommerce.model.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.List;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
    long count();

    @Query("SELECT COALESCE(SUM(o.totalAmount), 0) FROM OrderEntity o")
    BigDecimal getTotalRevenue();

    List<OrderEntity> findByUserId(Long userId);
}