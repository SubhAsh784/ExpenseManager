package com.kharcha.kharcha.repositry;

import com.kharcha.kharcha.Entities.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface myRepositry extends JpaRepository<Expenses,Integer>{


}
