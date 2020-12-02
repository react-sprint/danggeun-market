import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, inputChange } from '../modules/profile';
import ProfileEdit from '../pages/ProfileEdit';

const EditContainer = () => {
  const { name, inputName } = useSelector(({ counter }) => ({
    name: counter.name,
    inputName: counter.inputName,
  }));

  const dispatch = useDispatch();

  const onInputChange = useCallback((input) => dispatch(inputChange(input)), [
    dispatch,
  ]);
  const onChangeName = useCallback((name) => dispatch(changeName(name)), [
    dispatch,
  ]);

  return (
    <ProfileEdit
      name={name}
      inputName={inputName}
      onChange={onInputChange}
      onChangeName={onChangeName}
    />
  );
};

export default EditContainer;
