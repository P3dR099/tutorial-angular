package com.capgemini.ccsw.tutorial.clients;

import java.util.List;

import com.capgemini.ccsw.tutorial.clients.model.Client;
import com.capgemini.ccsw.tutorial.clients.model.ClientDto;
/**
* @author ccsw
*
*/
public interface ClientService {
	/**
	  * Método para recuperar todas las {@link com.ccsw.tutorial.category.model.Category}
	  * @return
	  */
	  List<Client> findAll();

	  /**
	  * Método para crear o actualizar una {@link com.ccsw.tutorial.category.model.Category}
	  * @param dto
	  * @return
	  */
	  void save(Long id, ClientDto dto);

	  /**
	  * Método para borrar una {@link com.ccsw.tutorial.category.model.Category}
	  * @param id
	  */
	  void delete(Long id);

	  Client get(Long id);

	/**
	    * {@inheritDoc}
	    */
}
