package com.example.Course.service;

import com.example.Course.model.course;
import com.example.Course.model.courseRegistry;
import com.example.Course.repository.CourseRegistrationRepository;
import com.example.Course.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class courseService {
    @Autowired
    CourseRepository courseRepo;
    @Autowired
    CourseRegistrationRepository courseRegistryRepo;

    public List<course> availableCourse(){
            return courseRepo.findAll();
    }

    public List<courseRegistry> enrolledStudents() {
            return courseRegistryRepo.findAll();
    }


    public void enrollCourse(String name, String emailId, String courseName) {
    	courseRegistry courseRegistry=new courseRegistry(name,emailId,courseName);
        courseRegistryRepo.save(courseRegistry);
    }
}
