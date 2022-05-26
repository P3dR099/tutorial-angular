package com.capgemini.ccsw.tutorial.clients;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.capgemini.ccsw.tutorial.clients.model.Client;
import com.capgemini.ccsw.tutorial.clients.model.ClientDto;

/**
* @author ccsw
*
*/
@Service
public class ClientServiceImpl implements ClientService {

   @Autowired
   ClientRepository clientRepository;
   private boolean isEqual;
   //private String[] names = this.clientRepository.findAll().forEach((p) -> p.getName());

   /**
    * {@inheritDoc}
    */
   @Override
   public Client get(Long id) {

      return this.clientRepository.findById(id).orElse(null);
   }

   /**
   * {@inheritDoc}
   */
   @Override
   public List<Client> findAll() {

      return (List<Client>) this.clientRepository.findAll();
   }
   
   public List<Client> findByName(String name) {
		return (List<Client>) this.clientRepository.findByName(name);
   }

   /**
   * {@inheritDoc}
   */
   @Override
   public void save(Long id, ClientDto dto) {

      Client client = null;
      
      if (id == null)
         client = new Client();
      else
         client = this.get(id);

      client.setName(dto.getName());
	  
      if (findByName(dto.getName()).isEmpty()) {
    	  this.clientRepository.save(client);
      }
   }
   
/**
   * {@inheritDoc}
   */
   @Override
   public void delete(Long id) {

      this.clientRepository.deleteById(id);

   }
}