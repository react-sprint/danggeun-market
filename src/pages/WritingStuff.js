import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import { dbService, storageService } from '../utils/api/fbInstance';
import WritingHeader from '../components/layout/write/WritingHeader';
import { PaddingInner } from '../components/layout/Inner';
import SelectPhoto from '../components/layout/write/SelectPhoto';
import StuffTitle from '../components/layout/write/StuffTitle';
import SelectCategory from '../components/layout/write/SelectCategory';
import WriteContents from '../components/layout/write/WriteContents';
import WritePrice from '../components/layout/write/WritePrice';
import Loading from '../components/layout/write/Loading';

const WritingStuff = () => {
  const [inputs, setInputs] = useState({ title: '', price: '', contents: '' });
  const [category, setCategory] = useState(1);
  const [attachment, setAttachment] = useState([]);
  const [loading, setLoading] = useState(false);
  const region = useSelector((state) => state.neighbor.address);
  const uid = useSelector((state) => state.user.currentUser?.email);
  const history = useHistory();

  if (uid === undefined) {
    alert('로그인을 하지않은 상태입니다. 로그인을 해주세요.');
    history.push('/login');
    return <p>로그인을 하지않은 상태입니다. 로그인을 해주세요.</p>;
  }

  if (region === 'notMyNeighbor') {
    alert('위치 정보가 등록되어있지 않습니다. 위치를 입력해주세요.');
    history.push('/gps');
    return <p>위치 정보가 등록되어있지 않습니다. 위치를 입력해주세요.</p>;
  }

  const regionRegex = /...[동읍면리]/g.exec(region)[0].replace(/ /gi, '');
  const uidRegex = /(.*?)[@]/g.exec(uid)[0].replace(/@/gi, '');

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let stuffAttchmentUrl = [];
    let stuff = {
      input: inputs,
      category,
      createAt: Date.now(),
      creatorId: uidRegex,
      attachmentUrl: 'default',
      region: regionRegex,
    };

    if (attachment) {
      for (const dataUrl of attachment) {
        const fileRef = storageService.ref().child(`userid/${uuidv4()}`);
        const response = await fileRef.putString(dataUrl, 'data_url');
        const attachmentUrl = await response.ref.getDownloadURL();

        stuffAttchmentUrl.push(attachmentUrl);
        stuff = {
          input: inputs,
          category,
          createAt: Date.now(),
          creatorId: uidRegex,
          attachmentUrl: stuffAttchmentUrl,
          region: regionRegex,
        };
      }
    }

    const { title, contents } = inputs;

    if (title.length < 3) {
      setLoading(false);
      return alert('글 제목을 최소 세 글자 이상 작성해 주세요');
    }

    if (contents.length < 3) {
      setLoading(false);
      return alert('글 내용을 최소 세 글자 이상 작성해 주세요');
    }

    console.log(attachment, stuff);
    dbService.collection('stuffList').add(stuff);
    setInputs({ title: '', price: '', contents: '' });
    setAttachment([]);
    setLoading(false);
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
    let priceComma = NumberPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (priceComma === '0') priceComma = '';

    setInputs({ ...inputs, price: priceComma });
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;

    let fileUrl = [];

    const fileArr = Array.from(files);

    fileArr.map((file) => {
      const reader = new FileReader();

      reader.onloadend = (event) => {
        const {
          currentTarget: { result },
        } = event;

        fileUrl.push(result);
        setAttachment([...attachment, ...fileUrl]);
      };
      return reader && reader.readAsDataURL(file);
    });
  };

  const onClearPhoto = (no) => {
    setAttachment((state) => {
      return state.filter((item) => item !== state[no]);
    });
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
      <PaddingInner>
        <form>
          <SelectPhoto onChange={onFileChange} attachment={attachment} onClearPhoto={onClearPhoto} />
          <StuffTitle onChange={onChange} title={title} />
          <SelectCategory onCategory={onCategory} />
          <WritePrice onChange={onPrice} price={price} />
          <WriteContents onChange={onChange} contents={contents} />
        </form>
      </PaddingInner>
      {loading && <Loading />}
      <MenuBar />
    </div>
  );
};

export default WritingStuff;
