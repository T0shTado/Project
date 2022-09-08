package com.tosh.projeto.salesmetas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tosh.projeto.salesmetas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	

}
