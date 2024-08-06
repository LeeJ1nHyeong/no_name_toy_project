package com.lotionary.repository;

import com.lotionary.entity.profile.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    
    Profile save(Profile profile);  // 저장
    Optional<Profile> findById(Long id);  // id 검색
    Optional<Profile> findByNickname(String nickname);  // 닉네임 검색
}
