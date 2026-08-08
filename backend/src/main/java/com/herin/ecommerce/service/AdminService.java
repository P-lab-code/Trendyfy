package com.herin.ecommerce.service;

import com.herin.ecommerce.dto.DashboardResponse;
import com.herin.ecommerce.repository.OrderRepository;
import com.herin.ecommerce.repository.ProductRepository;
import com.herin.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    public DashboardResponse getDashboard() {

        return new DashboardResponse(

                productRepository.count(),

                orderRepository.count(),

                userRepository.count(),

                orderRepository.getTotalRevenue()

        );

    }

}