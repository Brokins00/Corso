package it.nextdevs.u5s1g1l;

import it.nextdevs.u5s1g1l.appConfig.AppConfig;
import it.nextdevs.u5s1g1l.bean.Studente;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class U5s1g1lApplication {

	public static void main(String[] args) {
		SpringApplication.run(U5s1g1lApplication.class, args);
		ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);

		Studente st = ctx.getBean(Studente.class);
		System.out.println(st);
	}

}
