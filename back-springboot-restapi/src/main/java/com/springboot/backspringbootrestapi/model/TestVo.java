package com.springboot.backspringbootrestapi.model;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@SuperBuilder
@Valid
public class TestVo extends UserVo {

    /** 기타1 */
    @Valid
    @NotBlank(message = "널은안되유...")
    @NonNull
    private String etc1;

    /** 기타2 */
    @JsonIgnore
    private String etc2;
}
