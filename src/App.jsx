import { useState, useRef } from 'react';

const App = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [pickedColor, setPickedColor] = useState('');
  const imageRef = useRef(null);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(file);
    }
  };


  const pickColor = async () => {
    if (!window.EyeDropper) {
      alert("Your browser doesn't support the EyeDropper API.");
      return;
    }

    try {
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();
      setPickedColor(result.sRGBHex);
    } catch (error) {
      console.error("Color picking failed:", error);
    }
  };

  return (
    <div className="app" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Color Finder using EyeDropper & File API -Verkefni 10</h1>
      <p style={{ marginBottom: '1rem', fontSize: "1rem", color: '#E6E6E6' }}>Please upload an image to activate the Eyedropper and then hover over the image in order to use the Eyedropper</p>

      { }
      <input type="file" accept="image/*" onChange={handleFileUpload} style={{ marginBottom: '1rem' }} />

      { }
      {imageSrc && (
        <div style={{ marginBottom: '1rem' }}>
          <img src={imageSrc} alt="Uploaded" ref={imageRef} style={{ maxWidth: '100%', height: 'auto', cursor: 'crosshair' }} onClick={pickColor} />
        </div>
      )}

      { }
      {pickedColor && (
        <div>
          <p>Picked Color:</p>
          <div style={{ backgroundColor: pickedColor, width: '100px', height: '50px', margin: '0 auto', border: '1px solid #000' }}></div>
          <p>{pickedColor}</p>
        </div>
      )}
    </div>
  );
};

export default App;
