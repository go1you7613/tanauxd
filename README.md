# DAESINLOAN Prototype

대출중개관리시스템 화면을 개발 전에 검토하기 위한 GitHub 프로토타입 저장소입니다.

## Review Prototype

- 진입 파일: `prototype/index.html`
- 목적: 공통 UI 요소를 분리한 뒤 화면 흐름을 먼저 검토
- 1차 범위: 로그인, 지사관리 목록, 지사관리 상세, 지사관리 등록

## Prototype Principles

- 실제 운영 개발 파일과 분리합니다.
- 사이드바, 헤더, 검색, 테이블, 폼, 모달, 페이징은 공통 컴포넌트로 관리합니다.
- 정적 HTML/CSS/JS만 사용해 `file://` 환경에서도 리뷰할 수 있게 구성합니다.
