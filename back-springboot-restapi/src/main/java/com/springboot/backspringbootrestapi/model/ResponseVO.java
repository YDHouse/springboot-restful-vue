package com.springboot.backspringbootrestapi.model;

import lombok.Data;

@Data
public class ResponseVo<T> {

    private String message;
    private boolean check = true;
    private T response;
    
}