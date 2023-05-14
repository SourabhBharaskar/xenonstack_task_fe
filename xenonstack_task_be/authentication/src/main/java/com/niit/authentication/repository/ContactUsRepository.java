package com.niit.authentication.repository;

import com.niit.authentication.domain.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactUsRepository extends JpaRepository<ContactUs,String> {
}
