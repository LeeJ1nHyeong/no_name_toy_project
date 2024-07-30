package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CollectiblePoint {

    private String pointName;  // 이름
    private int point;  // 수집 포인트
    private int maxPoint;  // 최대 수집 포인트
}
