package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Tendency {

    private String type;  // 타입
    private int point;  // 포인트
    private int maxPoint;  //  최대 포인트
}
