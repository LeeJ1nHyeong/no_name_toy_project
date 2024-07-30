package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MountedCard {

    private int slot;  // 슬롯 번호
    private String name;  // 이름
    private String icon;  // 아이콘 이미지
    private int awakeCount;  // 각성 개수
    private int awakeTotal;  // 전체 각성 개수
    private String grade;  // 등급
    private String tooltip;  // 툴팁
}
