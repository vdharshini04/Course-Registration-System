package com.example.Course.controller;

import com.example.Course.model.course;
import com.example.Course.model.courseRegistry;
import com.example.Course.service.courseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/courses")
public class courseController {

    @Autowired
    private courseService courseService;

    // Get all available courses
    @GetMapping
    public List<course> getCourses() {
        return courseService.availableCourse();
    }

    // Get all enrolled students
    @GetMapping("/enrolled")
    public List<courseRegistry> getEnrolledStudents() {
        return courseService.enrolledStudents();
    }

    // Register a student for a course
    @PostMapping("/register")
    public String enrollCourse(
            @RequestParam String name,
            @RequestParam String emailId,
            @RequestParam String courseName) {
        
        courseService.enrollCourse(name, emailId, courseName);
        return "Congratulations! " + name + " Enrollment Successful for " + courseName;
    }
}
