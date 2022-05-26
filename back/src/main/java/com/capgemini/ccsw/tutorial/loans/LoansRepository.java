package com.capgemini.ccsw.tutorial.loans;

import org.springframework.data.repository.CrudRepository;

import com.capgemini.ccsw.tutorial.loans.model.Loans;

/**
* @author ccsw
*/
public interface LoansRepository extends CrudRepository<Loans, Long> {

}
