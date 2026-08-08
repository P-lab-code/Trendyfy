package com.herin.ecommerce.controller;

import com.herin.ecommerce.dto.DashboardResponse;
import com.herin.ecommerce.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/dashboard")
    public ResponseEntity<DashboardResponse> dashboard() {

        return ResponseEntity.ok(adminService.getDashboard());

    }

}