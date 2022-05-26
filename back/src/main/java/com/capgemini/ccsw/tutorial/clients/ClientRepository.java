package com.capgemini.ccsw.tutorial.clients;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.capgemini.ccsw.tutorial.clients.model.Client;

/**
* @author ccsw
*/
public interface ClientRepository extends CrudRepository<Client, Long> {
	  List<Client> findByName(String name);
}
