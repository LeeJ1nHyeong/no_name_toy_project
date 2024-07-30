package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CardEffect {

    private int index;  // 카드 세트효과 인덱스
    private List<Integer> cardSlots;  // 세트효과 카드 슬롯 번호
    private List<CardEffectItem> cardEffectItems;  // 세트 효과 목록
}
