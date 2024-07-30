package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Tripod {

    private int tier;  // 티어
    private int slot;  // 슬롯 번호
    private String name;  // 이름
    private String icon;  // 아이콘 이미지
    private int level;  // 레벨
    private boolean isSelected;  // 사용 여부
    private String tooltip;  // 툴팁
}
