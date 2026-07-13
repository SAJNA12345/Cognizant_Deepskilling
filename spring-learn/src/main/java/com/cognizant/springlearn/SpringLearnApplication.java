package com.cognizant.springlearn;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {

    public static void main(String[] args) {

        System.out.println("Main Started");

        displayCountry();

        System.out.println("Main Ended");
    }

    public static void displayCountry() {

        System.out.println("Inside displayCountry()");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean("country", Country.class);

        System.out.println(country);
    }
}