const branchRows = [
  ['80', '<a href="#branches-detail">더블유[3]</a>', '003000000', '더블유', 'daesinloan', '총괄관리자', '정상', '<a href="#branches-detail">상품별 수당</a>', '<a href="#recruiters-list">더블유</a>'],
  ['79', '<a href="#branches-detail">프라[4]</a>', '004000000', '프라', 'pra04', '금융사', '정상', '<a href="#branches-detail">상품별 수당</a>', '<a href="#recruiters-list">김경애</a>'],
  ['78', '<a href="#branches-detail">본사[6]</a>', '006000000', '본사', 'branch06', '지사', '숨김', '<a href="#branches-detail">상품별 수당</a>', '<a href="#recruiters-list">김선민</a>']
];

const Pages = {
  login() {
    return `<div class="login-page">
      <form class="login-card">
        <h1>DAESINLOAN.</h1>
        ${field('아이디', input({ placeholder: '아이디' }))}
        ${field('패스워드', input({ type: 'password', placeholder: '패스워드' }))}
        ${field('인증코드', input({ placeholder: '6자리' }))}
        <div class="form-actions">${button('로그인', 'btn--primary')}</div>
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
