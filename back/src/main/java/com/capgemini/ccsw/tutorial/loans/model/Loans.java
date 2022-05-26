package com.capgemini.ccsw.tutorial.loans.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
* @author ccsw
*/
@Entity
@Table(name = "Loans")
public class Loans {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "name_game", nullable = false)
  private String name_game;
  
  @Column(name = "name_client", nullable = false)
  private String name_client;
  
  @Column(name = "loan_date", nullable = false)
  private String loan_date;
  
  @Column(name = "return_date", nullable = false)
  private String return_date;
  
  /**
  * @return id
  */
  public Long getId() {

    return this.id;
  }

  /**
  * @param id new value of {@link #getId}.
  */
  public void setId(Long id) {

    this.id = id;
  }

  /**
  * @return name
  */
  public String getNameGame() {

    return this.name_game;
  }

  /**
  * @param name new value of {@link #getName}.
  */
  public void setNameGame(String name_game) {

    this.name_game = name_game;
  }
  
  public String getNameClient() {

    return this.name_client;
  }

	  /**
	  * @param name new value of {@link #getName}.
	  */
  public void setNameClient(String name_client) {
    
	  this.name_client = name_client;
  }
  
  public String getLoanDate() {

	    return this.loan_date;
  }

		  /**
		  * @param name new value of {@link #getName}.
		  */
  public void setLoanDate(String loan_date) {
	    
	  this.loan_date = loan_date;
  }
  
  
  public String getReturnDate() {

	    return this.return_date;
  }
		  /**
		  * @param name new value of {@link #getName}.
		  */
  public void setReturnDate(String return_date) {
	    
	  this.return_date = return_date;
  }

}
