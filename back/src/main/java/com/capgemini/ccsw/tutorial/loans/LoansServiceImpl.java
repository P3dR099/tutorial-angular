package com.capgemini.ccsw.tutorial.loans;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.ccsw.tutorial.loans.model.Loans;
import com.capgemini.ccsw.tutorial.loans.model.LoansDto;

/**
* @author ccsw
*
*/
@Service
public class LoansServiceImpl implements LoansService {

   @Autowired
   LoansRepository loansRepository;

   /**
    * {@inheritDoc}
    */
   @Override
   public Loans get(Long id) {

      return this.loansRepository.findById(id).orElse(null);
   }

   /**
   * {@inheritDoc}
   */
   @Override
   public List<Loans> findAll() {
	  
	  this.loansRepository.findAll().forEach((el) -> System.out.println(el));
      return (List<Loans>) this.loansRepository.findAll();
   }

   /**
   * {@inheritDoc}
   */
   @Override
   public void save(Long id, LoansDto dto) {

      Loans loans = null;

      if (id == null)
         loans = new Loans();
      else
         loans = this.get(id);

      loans.setNameGame(dto.getNameGame());
      loans.setNameClient(dto.getNameClient());
      loans.setLoanDate(dto.getLoanDate());
      loans.setReturnDate(dto.getReturnDate());
      
      this.loansRepository.save(loans);
   }

   /**
   * {@inheritDoc}
   */
   @Override
   public void delete(Long id) {

      this.loansRepository.deleteById(id);

   }
}