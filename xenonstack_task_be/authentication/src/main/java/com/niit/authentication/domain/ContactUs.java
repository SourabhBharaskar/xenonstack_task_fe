package com.niit.authentication.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ContactUs {
    @Id
    private String email;

    private long phone;

    private String description;


    public ContactUs(String email, long phone, String description){
        this.email = email;
        this.phone = phone;
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String toString() {
        return "ContactUs{" +
                "email='" + email + '\'' +
                ", phone=" + phone +
                ", description='" + description + '\'' +
                '}';
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
