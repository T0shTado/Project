package com.tosh.projeto.salesmetas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tosh.projeto.salesmetas.entities.Sale;
import com.tosh.projeto.salesmetas.repositories.SaleRepository;

@Service
public class SaleService {
	
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
		
	}
	

}
