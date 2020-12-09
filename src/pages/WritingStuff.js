import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { dbService, storageService } from '../utils/api/fbInstance';
import WritingHeader from '../components/layout/write/WritingHeader';
import { Inner } from '../components/layout/Inner';
import SelectPhoto from '../components/layout/write/SelectPhoto';
import StuffTitle from '../components/layout/write/StuffTitle';
import SelectCategory from '../components/layout/write/SelectCategory';
import WriteContents from '../components/layout/write/WriteContents';
import WritePrice from '../components/layout/write/WritePrice';

const WritingStuff = () => {
  const [inputs, setInputs] = useState({ title: '', price: '', contents: '' });
  const [category, setCategory] = useState(1);
  const [attachment, setAttachment] = useState(null);
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    const fileRef = storageService.ref().child(`userid/${uuidv4()}`);
    const response = await fileRef.putString(attachment, 'data_url');
    const attachmentUrl = await response.ref.getDownloadURL();
    const stuff = {
      input: inputs,
      category,
      createAt: Date.now(),
      creatorId: 'userid',
      attachmentUrl,
    };

    dbService.collection('stuffList').add(stuff);
    setInputs({ title: '', price: '', contents: '' });
    setAttachment(null);
    alert('상품이 성공적으로 등록되었습니다.');
    history.push('/');
  };

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setInputs({ ...inputs, [name]: value });
  };

  const onPrice = (event) => {
    const regex = /[^0-9]/g;
    const price = event.target.value.replace(regex, '');
    let NumberPrice = Number(price);
    if (NumberPrice >= 99999999) NumberPrice = 99999999;
    let priceComma = NumberPrice.toString().replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ',',
    );
    if (priceComma === '0') priceComma = '';

    setInputs({ ...inputs, price: priceComma });
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
    reader && reader.readAsDataURL(theFile);
  };

  const onClearPhoto = () => {
    setAttachment(null);
  };

  const onCategory = (event) => {
    const {
      target: { value },
    } = event;

    setCategory(value);
  };

  const { title, price, contents } = inputs;
  return (
    <div>
      <WritingHeader onClick={onSubmit} />
      <Inner>
        <form>
          <SelectPhoto
            onChange={onFileChange}
            attachment={attachment}
            onClearPhoto={onClearPhoto}
          />
          <StuffTitle onChange={onChange} title={title} />
          <SelectCategory onCategory={onCategory} />
          <WritePrice onChange={onPrice} price={price} />
          <WriteContents onChange={onChange} contents={contents} />
        </form>
      </Inner>
    </div>
  );
};

export default WritingStuff;
