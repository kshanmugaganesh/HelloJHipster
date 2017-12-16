package com.ganesh.example.jhipster.hello.cucumber.stepdefs;

import com.ganesh.example.jhipster.hello.HelloJHipsterApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = HelloJHipsterApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
