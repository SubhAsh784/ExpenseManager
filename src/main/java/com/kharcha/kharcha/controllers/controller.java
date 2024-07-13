package com.kharcha.kharcha.controllers;

import com.kharcha.kharcha.Entities.Expenses;
import com.kharcha.kharcha.services.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class controller {
    @Autowired
    service ser;


    @GetMapping (value = "/getExpense")
    public List<Expenses> getData(){
        return ser.getData();
    }

    
    @PostMapping(value="/addExpense")
    public ResponseEntity<Expenses>putData(@RequestBody  Expenses expenses){
        return ser.addExpense( expenses);
    }

    @DeleteMapping("/delete/{Id}")
    public String deleteById(@PathVariable int Id){
        ser.deleteById(Id);
        return "success";
    }
}
