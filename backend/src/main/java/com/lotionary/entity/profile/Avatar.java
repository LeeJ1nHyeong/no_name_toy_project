package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Avatar {

    private String type;  // 타입
    private String name;  // 이름
    private String icon;  // 아이콘 이미지
    private boolean isSet;  // 세트 여부
    private boolean isInner;  // 내부 착용 여부
    private String tooltip;  // 툴팁
}
