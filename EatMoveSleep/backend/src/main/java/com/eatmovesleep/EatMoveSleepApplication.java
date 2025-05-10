package com.eatmovesleep;
import org.h2.server.web.JakartaWebServlet;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@EntityScan("com.your.other.entity.package")
@SpringBootApplication
@RestController
public class EatMoveSleepApplication {

	public static void main(String[] args) {

		SpringApplication.run(EatMoveSleepApplication.class, args);
	}

	@Bean
	public ServletRegistrationBean<JakartaWebServlet> h2ConsoleServletRegistration() {
		ServletRegistrationBean<JakartaWebServlet> registration =
				new ServletRegistrationBean<>(new JakartaWebServlet());
		registration.addUrlMappings("/a/*");
		return registration;
	}

	@GetMapping("/home")
	public String home(){
		return "EatMoveSleep";
	}

}

