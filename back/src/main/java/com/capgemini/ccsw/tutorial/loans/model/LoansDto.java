package com.capgemini.ccsw.tutorial.loans.model;

/**
* @author ccsw
*/
public class LoansDto {
  private Long id;
  
  private String name_game;
  
  private String name_client;
  
  private String loan_date;
  
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
