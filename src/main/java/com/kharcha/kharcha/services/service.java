package com.kharcha.kharcha.services;

import com.kharcha.kharcha.Entities.Expenses;
import com.kharcha.kharcha.repositry.myRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class service {
    @Autowired
    myRepositry myrepo;

    public List<Expenses> getData(){
        return myrepo.findAll();
    }


    public ResponseEntity<Expenses> addExpense(Expenses expenses) {
            myrepo.save(expenses);
        return new ResponseEntity("success", HttpStatus.CREATED);
    }

    public void deleteById(int id) {
        myrepo.deleteById(id);
    }
}
