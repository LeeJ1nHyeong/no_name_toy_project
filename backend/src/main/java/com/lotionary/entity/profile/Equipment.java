package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Equipment {

    private String type;  // 타입
    private String name;  // 이름
    private String icon;  // 아이콘 이미지
    private String grade;  // 등급
    private String tooltip;  // 툴팁
}
