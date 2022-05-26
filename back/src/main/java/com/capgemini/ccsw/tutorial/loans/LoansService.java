package com.capgemini.ccsw.tutorial.loans;

import java.util.List;

import com.capgemini.ccsw.tutorial.loans.model.Loans;
import com.capgemini.ccsw.tutorial.loans.model.LoansDto;

/**
* @author ccsw
*
*/
public interface LoansService {

  /**
  * Método para recuperar todas las {@link com.ccsw.tutorial.category.model.Loans}
  * @return
  */
  List<Loans> findAll();

  /**
  * Método para crear o actualizar una {@link com.ccsw.tutorial.category.model.Loans}
  * @param dto
  * @return
  */
  void save(Long id, LoansDto dto);

  /**
  * Método para borrar una {@link com.ccsw.tutorial.category.model.Loans}
  * @param id
  */
  void delete(Long id);

  Loans get(Long id);

/**
    * {@inheritDoc}
    */
}
