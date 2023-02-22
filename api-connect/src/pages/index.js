import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/PostCreate.module.css';

const cliente = axios.create({
  baseURL: 'http://localhost:4000/'
})


const PostCreate = () => {
  const [titulo, setTitulo] = useState('');
  const [title, setTitle] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [tituloContent, setTituloContent] = useState('');
  const [imagenDestacada, setImagenDestacada] = useState(null);
  const [text, setText] = useState("");
  const [texto, setTexto] = useState('');
  const [parrafoArray, setParrafoArray] = useState([]);
  const [detectEvent, setDetectEvent] = useState(false);

  const enviarPost = async (e) => {
    e.preventDefault();
    try {
      const { data } = await cliente.post('/post', { titulo, subtitulo, parrafoArray, imagenDestacada });
      console.log('La imagen se cargó con éxito');
    } catch (error) {
      console.error('Error al cargar la imagen', error);
    }
  }

  const insertTitle = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setTitulo(`<h1>${title} </h1>`);
    }
  }
  const insertSubTitle = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSubtitulo(`<h3>${subtitle} </h3>`);
    }
  }

  const insertTituloContent = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setTituloContent((tituloContent) => tituloContent + "\n");
      setDetectEvent(!detectEvent);
    }
  }

  const inserContent = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setText((text) => text + "\n");
      setDetectEvent(!detectEvent);
    }
  };
  useEffect(() => {
    setTexto(`<p>${text.replace(/\n/g, '</p><p>')}</p>`);
  }, [text]);
  useEffect(() => {
    setTexto(`<h3>${tituloContent.replace(/\n/g, '</p><p>')}</h3>`)
  }, [tituloContent])

  useEffect(() => {
    setParrafoArray([...parrafoArray, texto]);
    setText('');
    setTituloContent('');
  }, [detectEvent]);


  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: titulo }} />
      <div dangerouslySetInnerHTML={{ __html: subtitulo }} />
      <div className={styles.contenido}>
        {parrafoArray?.map((htmlString, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: htmlString }} />
        ))}
      </div>
      <form className={styles.formulario} onSubmit={enviarPost}>
        <input
          placeholder='Inserte titulo'
          className={styles.titulo}
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          onKeyDown={insertTitle}
        />

        <input
          placeholder='Inserte encabezado'
          className={styles.encabezado}
          value={subtitle}
          onChange={(e) => { setSubtitle(e.target.value) }}
          onKeyDown={insertSubTitle} />
        <input
          placeholder='Inserte subtitulo'
          className={styles.subtitulo}
          value={tituloContent}
          onChange={(e) => { setTituloContent(e.target.value) }}
          onKeyDown={insertTituloContent} />
        <textarea
          placeholder='Contenido'
          value={text}
          onChange={(e) => { setText(e.target.value) }}
          onKeyDown={inserContent}
        />
        <input
          type="file"
          className={styles.file}
          onChange={(e) => { setImagenDestacada(e.target.files[0]) }} />
        <input type='submit' value={"enviar"} />
      </form>

    </>
  )

}

export default PostCreate;
/*
<div>
{
  <h1 dangerouslySetInnerHTML={{ __html: titulo }} />
}
</div>
{
<div dangerouslySetInnerHTML={{ __html: html }} />
}*/