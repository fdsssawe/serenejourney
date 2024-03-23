import React from 'react';
import SimpleMDE from 'react-simplemde-editor';



export const Edittor = () => {
  const imageUrl = '';
  const [value, setValue] = React.useState('');

  const handleChangeFile = () => {};

  const onClickRemoveImage = () => {};

  const onChange = React.useCallback((value : any) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: 'autosave-id', // Add the missing 'uniqueId' property
      },
    }),
    [],
  );

  return (
    <div style={{ padding: 30 }}>
      <button >
        Загрузить превью
      </button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <button  color="error" onClick={onClickRemoveImage}>
          Удалить
        </button>
      )}
      {imageUrl && (
        <img  src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
      )}
      <br />
      <br />
      <input placeholder="Title" />
      <input placeholder="Tags" />
      <SimpleMDE  value={value} onChange={onChange} options={options} />
      <div >
        <button >
          Опубликовать
        </button>
        <a href="/">
          <button >Отмена</button>
        </a>
      </div>
    </div>
  );
};