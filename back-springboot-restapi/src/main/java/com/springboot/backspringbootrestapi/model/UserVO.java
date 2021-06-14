package com.springboot.backspringbootrestapi.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@SuperBuilder
public class UserVo {

	private String name;
    private String phone;
    private List<?> hobby;

    public UserVo(String name, String phone) {
        this.name = name;
        this.phone = phone;
    }
}