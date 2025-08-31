package com.example;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // disable CSRF for APIs
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() // allow all requests
            )
            .httpBasic(httpBasic -> httpBasic.disable()) // disable basic auth popup
            .formLogin(form -> form.disable()); // disable form login
        return http.build();
    }
}
