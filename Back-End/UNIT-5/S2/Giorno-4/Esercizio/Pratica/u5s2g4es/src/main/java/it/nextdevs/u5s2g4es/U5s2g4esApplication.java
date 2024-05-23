package it.nextdevs.u5s2g4es;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("application.properties")
public class U5s2g4esApplication {

	public static void main(String[] args) {
		SpringApplication.run(U5s2g4esApplication.class, args);
	}

}
