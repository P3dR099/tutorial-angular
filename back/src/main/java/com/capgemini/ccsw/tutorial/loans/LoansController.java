package com.capgemini.ccsw.tutorial.loans;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.ccsw.tutorial.loans.model.LoansDto;
import com.devonfw.module.beanmapping.common.api.BeanMapper;

/**
* @author ccsw
*/
@RequestMapping(value = "/loans")
@RestController
@CrossOrigin(origins = "*")
public class LoansController {

  @Autowired
  LoansService loansService;

  @Autowired
  BeanMapper beanMapper;

  /**
  * Método para recuperar todas las {@link com.ccsw.tutorial.category.model.Category}
  * @return
  */
  @RequestMapping(path = "", method = RequestMethod.GET)
  public List<LoansDto> findAll() {

    return this.beanMapper.mapList(this.loansService.findAll(), LoansDto.class);
  }

  /**
  * Método para crear o actualizar una {@link com.ccsw.tutorial.category.model.Category}
  * @param dto
  * @return
  */
  @RequestMapping(path = { "", "/{id}" }, method = RequestMethod.PUT)
  public void save(@PathVariable(name = "id", required = false) Long id, @RequestBody LoansDto dto) {
    System.out.println(dto);
    this.loansService.save(id, dto);
  }

  /**
  * Método para borrar una {@link com.ccsw.tutorial.category.model.Category}
  * @param id
  */
  @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
  public void delete(@PathVariable("id") Long id) {

    this.loansService.delete(id);

  }
}
