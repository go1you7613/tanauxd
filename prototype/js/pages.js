const branchRows = [
  ['80', '<a href="#branches-detail">더블유[3]</a>', '003000000', '더블유', 'daesinloan', '총괄관리자', '정상', '<a href="#branches-detail">상품별 수당</a>', '<a href="#recruiters-list">더블유</a>'],
  ['79', '<a href="#branches-detail">프라[4]</a>', '004000000', '프라', 'pra04', '금융사', '정상', '<a href="#branches-detail">상품별 수당</a>', '<a href="#recruiters-list">김경애</a>'],
  ['78', '<a href="#branches-detail">본사[6]</a>', '006000000', '본사', 'branch06', '지사', '숨김', '<a href="#branches-detail">상품별 수당</a>', '<a href="#recruiters-list">김선민</a>']
];

const dashboardLoans = [
  ['2026-05-09 13:40', '더블유[3]', '김성수', '신청', '한성 EF-G론', '홍길동', '800101-1******', '5,000만원', '5,000만원', '<span class="status-badge status-badge--approved">승인</span>', '2026-05-09', '5,000만원', '9.5%', '완료', '-'],
  ['2026-05-09 13:12', '프라[4]', '김경애', '신청', '직장인 신용대출', '김민지', '870214-2******', '3,000만원', '-', '<span class="status-badge status-badge--review">심사</span>', '-', '-', '-', '접수', '-'],
  ['2026-05-09 12:48', '본사[6]', '김종원', '신청', '청년300', '이준호', '910402-1******', '2,000만원', '-', '<span class="status-badge status-badge--hold">보류</span>', '2026-05-09', '-', '-', '미비', '서류보완'],
  ['2026-05-09 11:35', 'jsm[8]', '박서연', '신청', '연계상품', '박서연', '930618-2******', '1,500만원', '-', '<span class="status-badge status-badge--received">접수</span>', '-', '-', '-', '대기', '-'],
  ['2026-05-08 18:22', '더블유[3]', '최윤', '신청', '한성 EF-G론', '최현우', '840922-1******', '1,800만원', '1,800만원', '<span class="status-badge status-badge--approved">승인</span>', '2026-05-08', '1,800만원', '10.2%', '완료', '-'],
  ['2026-05-08 17:40', '프라[4]', '정유진', '신청', '직장인 신용대출', '정유진', '890305-2******', '2,400만원', '2,200만원', '<span class="status-badge status-badge--pre">가승인</span>', '2026-05-08', '-', '-', '완료', '-'],
  ['2026-05-08 16:05', '본사[6]', '한도윤', '신청', '청년300', '한도윤', '950110-1******', '1,000만원', '-', '<span class="status-badge status-badge--sent">전송</span>', '-', '-', '-', '접수', '-'],
  ['2026-05-08 14:55', 'jsm[8]', '오지후', '신청', '한성 EF-G론', '오지후', '821020-1******', '2,000만원', '2,000만원', '<span class="status-badge status-badge--approved">승인</span>', '2026-05-08', '2,000만원', '9.8%', '완료', '-'],
  ['2026-05-08 13:24', '더블유[3]', '문하린', '신청', '직장인 신용대출', '문하린', '900713-2******', '3,500만원', '-', '<span class="status-badge status-badge--hold">부결</span>', '2026-05-08', '-', '-', '완료', '내부기준'],
  ['2026-05-08 10:18', '프라[4]', '강민준', '신청', '연계상품', '강민준', '880201-1******', '2,200만원', '-', '<span class="status-badge status-badge--received">접수</span>', '-', '-', '-', '대기', '-']
];

function attachmentIcon(fileName) {
  return `<button type="button" class="notice-file-icon" data-download-file="${fileName}" aria-label="첨부파일 다운로드">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.82-2.82l8.48-8.49" />
    </svg>
  </button>`;
}

const Pages = {
  dashboard() {
    const notices = [
      ['대출 접수 검수 기준 변경 안내', '2026-05-09', true],
      ['5월 수수료 정산 일정 안내', '2026-05-08', true],
      ['본인인증 URL 점검 공지', '2026-05-07', false],
      ['상품별 조건표 업데이트', '2026-05-06', false],
      ['보안 정책 적용 안내', '2026-05-05', false]
    ].map(([title, date, isNew]) => `<li><a href="#notices">${title}${isNew ? '<span class="new-badge">NEW</span>' : ''}</a><time>${date}</time></li>`).join('');

    const body = `<section class="dashboard-page">
      <div class="dashboard-top">
        <section class="dashboard-overview">
          <h2 class="dashboard-section-title">통계 요약</h2>
          <div class="dashboard-stat-card" data-dashboard-summary="hq">
            <div class="dashboard-stat-card__tabs" aria-label="누적현황 기준">
              <button type="button" data-summary-mode="total" aria-pressed="false">전체 누적현황</button>
              <button type="button" class="is-active" data-summary-mode="year" aria-pressed="true">당해 연도 누적현황</button>
            </div>
            <p>승인액</p>
            <strong data-summary-field="amount">35,800만원</strong>
            <dl>
              <div><dt>승인</dt><dd data-summary-field="approved">91건</dd></div>
              <div><dt>승인율</dt><dd data-summary-field="rate">12.3%</dd></div>
              <div><dt>등록수</dt><dd data-summary-field="registered">739건</dd></div>
              <div><dt>접수</dt><dd data-summary-field="received">48건</dd></div>
            </dl>
          </div>
        </section>
        <section class="dashboard-card dashboard-notices">
          <div class="dashboard-panel-heading">
            <h2>공지사항</h2>
            <a class="dashboard-more-link" href="#notices">전체보기</a>
          </div>
          <ul>${notices}</ul>
        </section>
      </div>

      <section class="dashboard-card dashboard-stat-board">
        <div class="dashboard-stat-table-block">
          <table class="dashboard-mini-table">
            <caption>◎ 전일 기준 통계 (2026년 5월 10일)</caption>
            <thead><tr><th>등록수</th><th>접수</th><th>전송</th><th>심사</th><th>가승인</th><th>보류</th><th>부결</th><th>승인</th><th>승인율</th><th>승인액</th></tr></thead>
            <tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td class="u-danger">0</td><td class="u-primary">0</td><td>0%</td><td class="u-primary">0</td></tr></tbody>
          </table>
        </div>
        <div class="dashboard-stat-table-block">
          <table class="dashboard-mini-table">
            <caption>◎ 월별 통계 (5월)</caption>
            <thead><tr><th>구분</th><th>등록수</th><th>접수</th><th>전송</th><th>심사</th><th>가승인</th><th>보류</th><th>부결</th><th>승인</th><th>승인율</th><th>승인액</th></tr></thead>
            <tbody>
              <tr><th>당월</th><td>739</td><td>8</td><td>48</td><td>16</td><td>21</td><td>3</td><td class="u-danger">554</td><td class="u-primary">91</td><td>12.3%</td><td class="u-primary">35,800</td></tr>
              <tr><th>전월</th><td>682</td><td>7</td><td>42</td><td>14</td><td>19</td><td>2</td><td class="u-danger">510</td><td class="u-primary">82</td><td>12.0%</td><td class="u-primary">31,400</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="dashboard-panel dashboard-loans">
        <div class="dashboard-panel-heading">
          <h2>대출진행목록</h2>
          <a class="dashboard-more-link" href="#loans">전체보기</a>
        </div>
        <div class="dashboard-table-scroll">
          <table class="dashboard-loans-table">
            <thead><tr>${['접수일시', '지사명', '전송담당', '신청여부', '상품명', '신청자', '주민번호', '신청금액', '가승인액', '처리상태', '처리일', '승인금액', '승인이율', '서류', '사유', '메모'].map((head) => `<th>${head}</th>`).join('')}</tr></thead>
            <tbody>${dashboardLoans.map((row) => `<tr>${row.concat('-').map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        </div>
      </section>
    </section>`;

    return layout({
      activeId: 'dashboard',
      title: '대시보드',
      body
    });
  },

  notices() {
    const rows = [
      ['<input type="checkbox" aria-label="공지 선택">', '5', '<span class="notice-category notice-category--important">중요</span>', '<a href="#notices">대출 모집인 전산 사용 기준 안내</a>', '관리자', '2026-05-09', '128', attachmentIcon('notice-guideline.pdf'), '<button type="button" class="btn btn--danger">삭제</button>'],
      ['<input type="checkbox" aria-label="공지 선택">', '4', '<span class="notice-category notice-category--check">점검</span>', '<a href="#notices">시스템 정기 점검 일정 안내</a>', '운영팀', '2026-05-07', '94', attachmentIcon('system-check.pdf'), '<button type="button" class="btn btn--danger">삭제</button>'],
      ['<input type="checkbox" aria-label="공지 선택">', '3', '<span class="notice-category notice-category--update">업데이트</span>', '<a href="#notices">상품관리 화면 입력 항목 업데이트</a>', '관리자', '2026-05-02', '76', '-', '<button type="button" class="btn btn--danger">삭제</button>'],
      ['<input type="checkbox" aria-label="공지 선택">', '2', '<span class="notice-category notice-category--info">안내</span>', '<a href="#notices">첨부파일 등록 정책 안내</a>', '운영팀', '2026-04-29', '51', attachmentIcon('attachment-policy.pdf'), '<button type="button" class="btn btn--danger">삭제</button>'],
      ['<input type="checkbox" aria-label="공지 선택">', '1', '<span class="notice-category notice-category--notice">공지</span>', '<a href="#notices">관리자 게시판 운영 원칙</a>', '관리자', '2026-04-23', '33', '-', '<button type="button" class="btn btn--danger">삭제</button>']
    ];

    const filter = `<form class="panel filter-bar notices-filter">
      ${field('구분', select(['전체', '중요', '점검', '업데이트', '안내'], '전체'))}
      ${field('공개여부', select(['전체', '공개', '비공개'], '전체'))}
      ${field('검색', input({ placeholder: '검색어' }))}
      ${field('', select(['제목', '작성자'], '제목'))}
      <div class="button-row">${button('검색실행', 'btn--primary')}${button('검색취소')}</div>
    </form>`;

    return layout({
      activeId: 'notices',
      title: '공지사항',
      actions: `<a class="btn btn--primary" href="#notices">등록</a>`,
      body: filter + table(['', 'NO', '구분', '제목', '작성자', '등록일', '조회수', '첨부', '관리'], rows) + `<div class="pagination-summary"><span>전체 5개</span><span>Total 1 Pages</span></div>`
    });
  },

  login() {
    return `<div class="login-page">
      <form class="login-card">
        <h1>DAESINLOAN.</h1>
        ${field('아이디', input({ placeholder: '아이디' }))}
        ${field('패스워드', input({ type: 'password', placeholder: '패스워드' }))}
        ${field('인증코드', input({ placeholder: '6자리' }))}
        <div class="form-actions"><a class="btn btn--primary" href="#dashboard">로그인</a></div>
        <p>계정 정보 확인이 필요한 경우 관리자에게 문의 하세요.</p>
      </form>
    </div>`;
  },

  'branches-list'() {
    const filter = `<form class="panel filter-bar">
      ${field('지사명', input())}
      ${field('사용여부', select(['전체', '사용', '사용안함'], '전체'))}
      ${field('아이디', input())}
      <div class="button-row">${button('검색실행', 'btn--primary')}${button('검색취소')}</div>
    </form>`;

    return layout({
      activeId: 'branches-list',
      title: '지사관리',
      actions: `<a class="btn btn--primary" href="#branches-register">등록</a>`,
      body: filter + table(['번호', '지사명', '지사코드', '담당자 명', '아이디', '권한', '상품숨김', '상품별 수수료', '모집인 명'], branchRows)
    });
  },

  'branches-detail'() {
    const rows = [
      ['지사명', '더블유'],
      ['지사코드', '003000000'],
      ['아이디', 'daesinloan'],
      ['비밀번호', '등록됨'],
      ['인증코드', '123456'],
      ['권한', '총괄관리자'],
      ['수수료구분', '수수료정책'],
      ['회사명(지점명)', '더블유'],
      ['담당자 명', '더블유'],
      ['전화번호', '02-510-0010'],
      ['핸드폰번호', '010-1111-1111'],
      ['주소', '서울특별시 강남구 테헤란로 100'],
      ['상품숨김', '정상'],
      ['사용여부', '사용']
    ];

    return layout({
      activeId: 'branches-list',
      title: '지사관리',
      actions: `<a class="btn" href="#branches-list">목록으로</a> ${button('수정', 'btn--primary')}`,
      body: formGrid(rows)
    });
  },

  'branches-register'() {
    const rows = [
      ['지사명', input()],
      ['지사코드', input()],
      ['아이디', input({ placeholder: '영문, 숫자만 입력' })],
      ['비밀번호', input({ type: 'password' })],
      ['인증코드', input({ placeholder: '6자리' })],
      ['권한', select(['총괄관리자', '지사', '금융사', '대출사', '관리자'], '지사')],
      ['수수료구분', '<label><input type="radio" checked> 수수료정책</label> <label><input type="radio"> 상품별수수료</label>'],
      ['회사명(지점명)', input()],
      ['담당자 명', input()],
      ['전화번호', input()],
      ['핸드폰번호', input()],
      ['주소', input()],
      ['상품숨김', '<label><input type="radio" checked> 정상</label> <label><input type="radio"> 숨김</label>'],
      ['사용여부', '<label><input type="radio" checked> 사용</label> <label><input type="radio"> 사용안함</label>']
    ];

    return layout({
      activeId: 'branches-list',
      title: '지사관리',
      actions: `<a class="btn" href="#branches-list">목록으로</a>`,
      body: formGrid(rows) + `<div class="form-actions">${button('등록', 'btn--primary')}${button('취소')}</div>`
    });
  }
};
