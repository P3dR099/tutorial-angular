package com.capgemini.ccsw.tutorial.clients;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.ccsw.tutorial.clients.model.ClientDto;
import com.capgemini.ccsw.tutorial.config.mapper.BeanMapper;

/**
* @author ccsw
*/
@RequestMapping(value = "/client")
@RestController
@CrossOrigin(origins = "*")
public class ClientController {

	  @Autowired
	  ClientService clientService;

	  @Autowired
	  BeanMapper beanMapper;


	  /**
	  * Método para recuperar todas las {@link com.Loans.tutorial.client.model.Client}
	  * @return
	  */
	  @RequestMapping(path = "", method = RequestMethod.GET)
	  public List<ClientDto> findAll() {

	    return this.beanMapper.mapList(this.clientService.findAll(), ClientDto.class);
	  }
	  	  
	  /**
	   * Método para crear o actualizar una {@link com.ccsw.tutorial.category.model.Category}
	   * @param dto
	   * @return
	   */
	   @RequestMapping(path = { "", "/{id}" }, method = RequestMethod.PUT)
	   public void save(@PathVariable(name = "id", required = false) Long id, @RequestBody ClientDto dto) {
		 
	     this.clientService.save(id, dto);
	   }

	  
	  /**
	   * Método para borrar una {@link com.ccsw.tutorial.category.model.Category}
	   * @param id
	   */
	   @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	   public void delete(@PathVariable("id") Long id) {

	     this.clientService.delete(id);
	   }

}
