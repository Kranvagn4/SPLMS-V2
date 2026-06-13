package com.parking.repository;

import com.parking.entity.Vehicle;
import com.parking.entity.VehicleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    List<Vehicle> findByVehicleNumberIgnoreCase(String vehicleNumber);
}
