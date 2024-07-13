package com.kharcha.kharcha.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


import java.util.Date;

@Entity
@Data

public class Expenses {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Integer expenseId;
    private Integer amount;
    private Date date;
    private String title;

}
