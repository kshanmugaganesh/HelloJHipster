package com.ganesh.example.jhipster.hello.repository;

import com.ganesh.example.jhipster.hello.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
