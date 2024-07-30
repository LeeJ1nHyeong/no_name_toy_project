package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Collectible {

    private String type;  // 타입
    private String icon;  // 아이콘 이미지
    private int point;  // 수집 포인트
    private int maxPoint;  // 최대 수집 포인트
    private List<CollectiblePoint> collectiblePoints;  // 수집 현황
}
