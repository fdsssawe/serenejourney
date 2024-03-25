import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import api from '@/http';
import { useRouter } from 'next/navigation';
import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';
import { useParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useRef } from 'react';
import Link from 'next/link'
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })


export const Editor = () => {
  const navigate = useRouter();
  const { id } = useParams();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [fields, setFields] = React.useState({
    title: '',
    tags: '',
    text: '',
    imageUrl: '',
  });

  const isEditing = Boolean(id);

  React.useEffect(() => {
    if (id) {
      api
        .get(`/posts/${id}`)
        .then(({ data }) => {
          setFields({
            ...data,
            tags: data.tags.join(','),
          });
        })
        .catch((err) => {
          alert('Error while fetching post data');
          console.warn(err);
        });
    }
  }, []);

  const isEmptyFields = Object.values({ title: fields.title, text: fields.text }).some((v) => !v);

  const setFieldValue = (name : any, value : any) => {
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const onChange = React.useCallback((value : any) => {
    setFieldValue('text', value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Enter your text here...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: 'autosave-id',
      },
    }),
    [],
  );

  const handleChangeFile = async (e : any) => {
    try {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      const { data } = await api.post('/upload', formData);
      setFieldValue('imageUrl', data.url);
      e.target.value = '';
    } catch (e) {
      console.warn(e);
      alert('Error while uploading image');
    }
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      console.log(fields, fields.tags);

      const apiMethod = isEditing
        ? api.patch.bind(this, `/posts/${id}`)
        : api.post.bind(this, '/posts');

      const { data } = await apiMethod({
        title: fields.title,
        text: fields.text,
        imageUrl: 'http://localhost:5000' + fields.imageUrl,
        tags: fields.tags.split(','),
      }) as { data: any };

      const postId = id || data._id;

      navigate.push(`/posts/${postId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper style={{ padding: 30 }}>
    <Button onClick={() => inputFileRef?.current?.click()} variant="outlined" size="large" className='mr-2'>
      Upload preview
    </Button>
      <input ref={inputFileRef} hidden type="file" onChange={handleChangeFile} />
      {fields.imageUrl && (
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            setFieldValue('imageUrl', '');
          }}>
          Удалить
        </Button>
      )}
      {fields.imageUrl && (
        <img className={styles.image} src={`http://localhost:5000${fields.imageUrl}`} />
      )}
      <br />
      <br />
      <TextField
        value={fields.title}
        onChange={(e) => setFieldValue('title', e.target.value)}
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Title"
        fullWidth
      />
      <TextField
        value={fields.tags}
        onChange={(e) => setFieldValue('tags', e.target.value)}
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Tags"
        fullWidth
      />
      <SimpleMDE
        className={styles.editor}
        value={fields.text}
        onChange={onChange}
        options={options}
      />
      <div className={styles.buttons}>
        <Button onClick={onSubmit} disabled={isEmptyFields} size="large" variant="contained">
          {!isEditing ? 'Publish' : 'Save changes'}
        </Button>
        <Link href="/">
          <Button disabled={isLoading} size="large" className='ml-2'>
            Cancel
          </Button>
        </Link>
      </div>
    </Paper>
  );
};