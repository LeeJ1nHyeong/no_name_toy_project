package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GemEffectSkill {

    private int gemSlot;  // 슬롯 번호
    private String name; // 이름
    private List<String> description;  // 설명
    private String option;  // 옵션
    private String icon;  // 아이콘 이미지
    private String tooltip;  // 툴팁
}
