package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Optional;

@Getter
@Setter
public class Profile {

    // 기본 정보
    private String characterName;  // 닉네임
    private String serverName;  // 서버명
    private int characterLevel;  // 전투 레벨
    private String characterClassName;  // 직업명
    private String itemAvgLevel;  // 현재 아이템 레벨
    private String itemMaxLevel;  // 최대 아이템 레벨
    private String characterImage;  // 이미지 파일
    private int expeditionLevel;  // 원정대 레벨
    private String pvpGradeName;  // pvp 등급

    // 영지 관련
    private Optional<Integer> townLevel;  // 영지 레벨
    private String townName;  // 영지 이름

    // 칭호
    private String title;  // 칭호

    // 길드 관련
    private String guildMemberGrade;  // 길드 직위
    private String guildName;  // 길드명

    // 능력치 관련
    private int usingSkillPoint;  // 사용 스킬 포인트
    private int totalSkillPoint;  // 전체 스킬 포인트
    private List<Stat> stats;  // 스탯(치특신제인숙)
    private List<Tendency> tendencies;  // 성향(지성, 담력, 매력, 친절)
    private ArkPassive arkPassive;  // 아크패시브
}
