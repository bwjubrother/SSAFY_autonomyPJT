# :currency_exchange: 유한회사 맡촌

![full_logo](README.assets/full_logo-1605487065583.png)

## :corn: :tent: :circus_tent:  Contents

- [서비스 소개](##서비스-소개)
  - [기획의도](###기획의도)
  - [MATCHON](###MATCHON)
  - [주요기능](###주요기능)
  - [기술스택](###기술스택)
- [설치 및 실행](##설치 및 실행)



## :cow: :dog: 서비스 소개

### :mortar_board: 기획의도

> 어느순간 당신은 스포츠 경기를 하고 싶을 때가 있습니다. 스포츠 경기를 하기 위해 많은 난관이 있습니다. 보통 `인원모집 -> 시간선정 -> 장소선정 -> 장소예약`의 방식으로 번거롭게 해야 스포츠 경기를 즐길 수 있습니다. 또한, 인원모집을 함에 있어서 개인들의 실력을 알 수 없기에 시작부터 번거롭습니다. 복잡한 준비과정이 귀찮아서 운동하는 것을 망설이게 되기도 합니다. 이러한 문제를 한 번에 해결할 수 있는 서비스는 없을까? 란 질문에서부터 MATCHON 서비스를 기획하게 되었습니다.

> 저희 유한회사 맡촌의 MATCHON 서비스는 다음과 같은 불편함을 극복한 서비스 입니다.



- 스포츠 동호회의 문제점

  - 운동을 주 목적이라기 보다는 음주문화 등으로 주 목적이 변질되어 있는 경우가 있습니다.

  - 운동경기가 정해진 시간에 정해진 역할로 주로 하기 때문에 스포츠 경기에 대한 자율성이 부족합니다.

  - 동호회에 소속되어 생활을 해보지 않은 이상 본인과 잘 맞는지 알기 어렵습니다.

    

- 인원모집의 번거로움

  - 동호회
    - 한정된 인원으로 시합하기 때문에 객관적인 실력을 측정하기 힘듭니다.
    - 동호회에서의 입지가 있기 때문에 다양한 플레이를 하기 어렵습니다.
  - 개인
    - 인원모집하는 것 자체가 힘듭니다.



- 시간, 장소 정하는 것의 번거로움
  - 내가 원하는 시간에 스포츠 경기를 구하기 어렵습니다.
  - 이용가능한 경기장이 주변에 어떤 것들이 있는지 다 파악하기 어렵습니다.
  - 또한, 경기장 정보를 자세히 알기 어렵습니다.



###  :soccer: :basketball: :tennis: :8ball: :bowling: MATCHON 

>  스포츠 팀매칭 시스템 ( 풋살, 농구, 테니스, 당구, 볼링)

>  다음과 같은 요구가 있을 때 MATCHON 을 이용하세요.

- 선호 지역, 시간 에 해당하는 경기 매칭
- 스포츠 경기 상대가 없을 때
- 스포츠 경기(풋살, 농구 등) 상대가 부족하여 원활한 경기를 할 수 없을 때
- 색다른 사람과 스포츠 경기를 하고 싶을 때
- 나의 실력을 뽑내고 싶을 때



### 	:gem: 주요기능

- 검증된 사용자 pool
  - 카카오톡 로그인을 통해 무분별한 가입을 방지합니다.
  - 악성 사용자에게는 penalty 부여, penalty 를 따른 사용자 관리를 하고 있습니다.



- 위치 기반 스포츠 매칭

  - 스포츠 매칭을 신청하면 선택지역(ex. 서울시 강남구) 내의 매칭지역을를 선정한 다른 사람과 스포츠 경기를 매칭합니다.
  - 선택지역구 에 해당하는 경기장을 보기 쉽게 지도상에 표시하여 장소를 정할 수 있습니다.



- 전적 관리 시스템

  - 스포츠 경기 별 전적을 제공합니다.
  - 전적과 승률을 한 눈에 알아볼 수 있는 UI를 제공합니다.
  - 랭크시스템을 활용하여 자신의 실력을 뽑낼 수 있습니다.

  

- 실시간 채팅

  - 서로의 정보를 교환할 수 있습니다.
  - 경기장을 선정하고 경기시각을 조율할 수 있습니다.



- 편의성 (PWA)

  - APP처럼 활용가능 합니다.
  - PUSH 알림을 통해 스포츠 매칭을 원활하게 할 수 있습니다.
  - 서비스 접근성이 쉬워집니다.



### :hammer_and_wrench: 기술 스택

#### backend

- django
- python thread

#### frontend

- vue.js, vuex, vuetify
- node.js
- Google Firebase

#### SCM ( Software Configuration Management)

- git
- Jira

#### DB

- mysql

- Google Firebase
- firebase Realtime Database

#### deploy tools

- Jenkins
- AWS
- Nginx
- Firebase Hosting

#### pwa





## :seedling: 설치 및 실행

#### :raised_back_of_hand: backend

##### 가상환경 설정

```bash
$ python -m venv venv
# 가상환경은 git 레퍼지토리에 기록되지 않으므로 각자 설정해주어야 합니다.
```

##### 가상환경 켜기

```bash
# ven가 위치하는 폴더에서
$ source venv/Scripts/activate
```

##### 가상환경 끄기

```bash
$ deactivate
```

##### pip 리스트 갱신

```bash
$ pip freeze > requirements.txt
```

##### pip 설치

```bash
$ pip install -r requirements.txt
```

##### `./backend`에서 실행

```bash
$ python manage.py runserver
```





#### :raised_hand: frontend

##### `./frontend` 에서 설치

```bash
$ npm i
# npm-shrinkwrap.json에 기록된 라이브러리가 자동으로 설치됩니다.
```

##### 실행

```bash
$ npm run serve
```





#### :vertical_traffic_light: Commit 그라운드 룰

#### 커밋 메시지

```bash
$ git commit -m "S03P31A306-29 | Backend Devtools Setup Done"
# 지라 이슈번호 | 커밋메시지로 적습니다.
```

#### feature 관리

```bash
$ git branch(혹은 checkout) feature/user-accounts-setup
# feature/기능이름으로 적습니다.
# 해당 브랜치는 develop으로 병합 후 삭제합니다.
```