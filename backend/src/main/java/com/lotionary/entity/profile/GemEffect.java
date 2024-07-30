package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GemEffect {

    private String description;  // 설명
    private List<GemEffectSkill> gemEffectSkills;  // 보석 효과

}
