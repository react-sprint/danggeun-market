import React from 'react';

function WritingStuff() {
  return (
    <div>
      <form>
        <div>
          <input type="file" accept="image/*" />
        </div>
        <div>
          <input type="text" placeholder="글 제목" />
        </div>
        <div>
          <select>
            <option>디지털/가전</option>
            <option>가구/인테리어</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="￦ 가격 입력 (선택사항)" />
        </div>
        <div>
          <textarea placeholder="브랜드, 사이즈, 색상, 소재 등 물품에 대한 자세한 정보를 작성하면 구매자에게 도움이 돼요." />
        </div>
        <div>
          <button type="submit">작성</button>
        </div>
      </form>
    </div>
  );
}

export default WritingStuff;
