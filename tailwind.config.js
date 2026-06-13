package com.parking.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "pricing_rules")
public class PricingRule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ruleId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private VehicleType vehicleType;

    @Column(nullable = false)
    private BigDecimal firstHourRate;

    @Column(nullable = false)
    private BigDecimal additionalHourRate;
}
