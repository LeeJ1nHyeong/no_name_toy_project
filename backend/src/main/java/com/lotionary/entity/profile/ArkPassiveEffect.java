package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
public class ArkPassiveEffect {

    private Optional<Integer> abilityStoneLevel;  // 어빌리티 스톤 레벨
    private String grade;  // 등급
    private int level;  // 레벨
    private String name;  // 이름
    private String description;  // 설명
}
