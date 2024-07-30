package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Card {

    private List<MountedCard> mountedCards;  // 장착 카드
    private List<CardEffect> cardEffects;  // 카드 효과 목록
}
