package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ArkPassive {

    private boolean isArkPassive;  // 활성화 여부
    private List<ArkPassivePoint> points;  // 아크패시브 포인트
}
