package com.parking.repository;

import com.parking.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface ParkingSpotRepository extends JpaRepository<ParkingSpot, Long> {

    List<ParkingSpot> findBySpotTypeAndStatusOrderByFloor_FloorNumberAscSpotNumberAsc(
        VehicleType spotType, SpotStatus status);

    Optional<ParkingSpot> findFirstBySpotTypeAndStatusOrderByFloor_FloorNumberAscSpotNumberAsc(
        VehicleType spotType, SpotStatus status);

    @Query("SELECT ps.floor.floorNumber, COUNT(ps) FROM ParkingSpot ps WHERE ps.status = 'AVAILABLE' GROUP BY ps.floor.floorNumber ORDER BY ps.floor.floorNumber")
    List<Object[]> countAvailableByFloor();

    @Query("SELECT ps.spotType, COUNT(ps) FROM ParkingSpot ps WHERE ps.status = 'AVAILABLE' GROUP BY ps.spotType")
    List<Object[]> countAvailableByType();

    @Query("SELECT ps.floor.floorNumber, COUNT(ps) FROM ParkingSpot ps GROUP BY ps.floor.floorNumber ORDER BY ps.floor.floorNumber")
    List<Object[]> countTotalByFloor();

    long countBySpotTypeAndStatus(VehicleType spotType, SpotStatus status);

    long countByStatus(SpotStatus status);
}
