import './App.scss';
import BARCODE from "./images/image-qr-code.png";


function App() {
  return (
    <div className="App">
      <div className="barcode-container">
        <img src={BARCODE} alt="bar code" className='barcode-container__img' />
        <h1 className='barcode-container__title t-title'>Improve your front-end skills by building projects</h1>
        <p className='barcode-container__sub t-sub'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
