package com.springboot.backspringbootrestapi.controller;


import java.util.Date;

import javax.validation.Valid;

import com.springboot.backspringbootrestapi.model.TestVo;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import lombok.extern.slf4j.Slf4j;

@Slf4j
class MyTest {

    @BeforeEach
    void beforeEach() {
        TestVo tvo1 = new TestVo();
        tvo1.setName("홍길동");
        tvo1.setPhone("010-1234-1234");
        tvo1.setEtc1("가가가가가");
        tvo1.setEtc2("AAAA");
    }

    @Test
    void myTest1() throws Exception {
        @Valid TestVo tvo1 = new TestVo();
        tvo1.setName("홍길동");
        tvo1.setPhone("010-1234-1234");
        // tvo1.setEtc1("가가가가가");
        tvo1.setEtc2("AAAA");
        log.debug("---> " + tvo1);

        TestVo tvo2 = TestVo.builder()
                .name("홍길동")
                .phone("010-1234-1234")
                .etc1("가가")
                .etc2("BBB")
                .build();
        log.debug("---> " + tvo2);
    }

    @Test
    void myTest2() throws Exception {
        Date myDate = new Date();
        log.debug("getTime() --> " + myDate.getTime());
        log.debug("Integer.MAX_VALUE --> " + Integer.MAX_VALUE);
        log.debug("Integer.MIN_VALUE --> " + Integer.MIN_VALUE);
    }
}
