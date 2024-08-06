package com.lotionary.entity.profile;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Optional;

@Entity
@Getter
@Setter
@Table(name = "profile")
public class Profile {
    /* TODO
       1:N, 1:1 관계 설정
       모든 Entity에 annotation 설정
    */
    @Id
    @Column(name = "profile_id")
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    // 기본 정보
    @Column (name = "character_name")
    private String characterName;  // 닉네임

    @Column (name = "server_name")
    private String serverName;  // 서버명

    @Column (name = "level")
    private int characterLevel;  // 전투 레벨

    @Column (name = "class_name")
    private String characterClassName;  // 직업명

    @Column (name = "item_level")
    private String itemAvgLevel;  // 현재 아이템 레벨

    @Column (name = "item_max_level")
    private String itemMaxLevel;  // 최대 아이템 레벨

    @Column (name = "image")
    private String characterImage;  // 이미지 파일

    @Column (name = "expedition_level")
    private int expeditionLevel;  // 원정대 레벨

    @Column (name = "pvp_grade")
    private String pvpGradeName;  // pvp 등급

    // 영지 관련
    @Column (name = "town_level")
    private Optional<Integer> townLevel;  // 영지 레벨

    @Column (name = "town_name")
    private String townName;  // 영지 이름

    // 칭호
    @Column (name = "title")
    private String title;  // 칭호

    // 길드 관련
    @Column (name = "guild_member_grade")
    private String guildMemberGrade;  // 길드 직위

    @Column (name = "guild_name")
    private String guildName;  // 길드명

    // 능력치 관련
    @Column (name = "using_skill_point")
    private int usingSkillPoint;  // 사용 스킬

    @Column (name = "total_skill_point")
    private int totalSkillPoint;  // 전체 스킬 포인트

    @Column (name = "stat")
    private List<Stat> stats;  // 스탯(치특신제인숙)

    @Column (name = "tendency")
    private List<Tendency> tendencies;  // 성향(지성, 담력, 매력, 친절)

    @Column (name = "ark_passive")
    private ArkPassive arkPassive;  // 아크패시브

    // 장비
    @Column (name = "equipment")
    private List<Equipment> equipments;  // 장비 목록

    // 아바타
    @Column (name = "avatar")
    private List<Avatar> avatars;  // 아바타 착용 목록

    // 스킬
    @Column (name = "combat_skill")
    private List<CombatSkill> combatSkills;  // 스킬 목록

    // 각인
    @Column (name = "engraving")
    private Engraving engraving;

    // 카드
    @Column (name = "card")
    private Card card;

    // 보석
    @Column (name = "gem")
    private Gem gem;

    // pvp 증명전

    // 수집품
    @Column (name = "collectible")
    private List<Collectible> collectibles;  // 수집품 목록
}
