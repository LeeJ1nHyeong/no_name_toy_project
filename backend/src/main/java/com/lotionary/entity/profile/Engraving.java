package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Optional;

@Getter
@Setter
public class Engraving {

    private Optional<List<MountedEngraving>> mountedEngravings;  // 장착 각인
    private Optional<List<EngravingEffect>> engravingEffects;  // 각인 효과
    private Optional<List<ArkPassiveEffect>> arkPassiveEffects;  // 아크패시브 효과
}
