import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from '../utils/api/fbInstance';
import BottomNavBar from '../components/common/BottomNavBar';

const WritingStuff = () => {
  const [inputs, setInputs] = useState({ title: '', price: '', contents: '' });
  const [attachment, setAttachment] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const fileRef = storageService.ref().child(`userid/${uuidv4()}`);
    const response = await fileRef.putString(attachment, 'data_url');
    const attachmentUrl = await response.ref.getDownloadURL();
    const stuff = {
      input: inputs,
      createAt: Date.now(),
      creatorId: 'userid',
      attachmentUrl,
    };

    dbService.collection('stuffList').add(stuff);
    setInputs({ title: '', price: '', contents: '' });
    setAttachment(null);
  };

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setInputs({ ...inputs, [name]: value });
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      console.log(finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent;

      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearPhoto = () => {
    setAttachment(null);
  };
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
      <BottomNavBar />
    </div>
  );
};

export default WritingStuff;
