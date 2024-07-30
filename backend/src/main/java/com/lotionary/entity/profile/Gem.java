package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Gem {

    private List<MountedGem> mountedGems;  // 장착 보석
    private List<GemEffect> gemEffects;  // 보석 효과
}
