import React, { useState, useEffect } from 'react'
import { AnnotationViewer, getImagesFromPDF } from 'react-mindee-js'

import dummyPDF from './note-de-frais.pdf'

function App() {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    console.log(dummyPDF, typeof dummyPDF);
    getImagesFromPDF(dummyPDF).then((images) => {
      setImages(images);
    });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {images.map((image, key) => (
          <img
            src={image}
            alt="thumbnail"
            key={key}
            onClick={() => setSelectedImageIndex(key)}
            width="100vw"
          />
        ))}
      </div>
      <AnnotationViewer
        style={{ width: "100%", height: 600, background: "black" }}
        data={{ image: images[selectedImageIndex] }}
      />
    </div>)
}

export default App;
