package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Optional;

@Getter
@Setter
public class CombatSkill {

    private String name;  // 이름
    private String icon;  // 아이콘 이미지
    private int level;  // 스킬 레벨
    private String type;  // 스킬 타입
    private boolean isAwakening;  // 각성기 여부
    private List<Tripod> tripods; // 트라이포드 목록
    private Optional<Rune> rune; // 장착 룬
    private String tooltip;  // 툴팁
}
