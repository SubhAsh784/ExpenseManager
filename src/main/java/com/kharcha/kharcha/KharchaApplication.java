package com.kharcha.kharcha;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KharchaApplication {

	public static void main(String[] args) {
		SpringApplication.run(KharchaApplication.class, args);
		System.out.println("connected");
	}

}
