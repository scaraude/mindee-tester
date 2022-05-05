import React, { useState, useEffect } from 'react'
import { AnnotationViewer, getImagesFromPDF } from 'react-mindee-js'

import dummyPDF from './note-de-frais.pdf'

function App() {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    console.log(dummyPDF, typeof dummyPDF);
    getImagesFromPDF("http://localhost:9000/static/organisations/6d883f43-7a9a-459d-925f-f55be9efae25/documents-to-control/77c01714-10d5-451c-9e1e-1d14378471f1.pdf").then((images) => {
      console.log("images", images, typeof images);
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
