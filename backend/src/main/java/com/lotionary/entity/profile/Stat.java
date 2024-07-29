package com.lotionary.entity.profile;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class Stat {

    private String type;  // 타입
    private String value;  // 수치
    private List<String> tooltip;  // 툴팁
}
