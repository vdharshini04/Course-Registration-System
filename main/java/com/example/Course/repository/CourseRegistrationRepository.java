package com.example.Course.repository;

import com.example.Course.model.courseRegistry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface CourseRegistrationRepository extends JpaRepository<courseRegistry,String> {

}
