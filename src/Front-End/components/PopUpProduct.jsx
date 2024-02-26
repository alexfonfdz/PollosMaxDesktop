import PropTypes from "prop-types";
import { useState } from 'react'
import './PopUp.css';

const PopupProduct = ({onClose, onConfirm, productName }) => {
    const [color, setColor] = useState({
        color: 'rgba(0, 0, 0, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderTopColor: 'rgba(0, 0, 0, 1)',
        borderRightColor: 'rgba(0, 0, 0, 1)',
        borderBottomColor: 'rgba(0, 0, 0, 1)',
    })

    const [quantity, setQuantity] = useState(0);
    function handleClick(e) {
        e.preventDefault();
        onConfirm(quantity);
      }

    function handleMouseUp() {
        setColor({
            color: 'rgba(0, 0, 0, 1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderTopColor: 'rgba(0, 0, 0, 1)',
            borderRightColor: 'rgba(0, 0, 0, 1)',
            borderBottomColor: 'rgba(0, 0, 0, 1)',
        })
    }

    function handleMouseDown() {
        setColor({
            color: 'rgba(30, 30, 30, 1)',
            borderColor: 'rgba(30, 30, 30, 1)',
            borderTopColor: 'rgba(30, 30, 30, 1)',
            borderRightColor: 'rgba(30, 30, 30, 1)',
            borderBottomColor: 'rgba(30, 30, 30, 1)',
        })
    }

    function handleHover() {
        setColor({
            color: 'rgba(30, 30, 30, 1)',
            borderColor: 'rgba(30, 30, 30, 1)',
            borderTopColor: 'rgba(30, 30, 30, 1)',
            borderRightColor: 'rgba(30, 30, 30, 1)',
            borderBottomColor: 'rgba(30, 30, 30, 1)',
        })
    }

    return (
        <div className="modal-container" id="modal">
            <div className="modal-content d-inline-flex justify-content-lg-center align-items-lg-center" style={{ background: 'rgb(251, 225, 147)', width: '400px', height: '550px', padding: '75px', borderRadius: '10px', border: '2px solid var(--bs-emphasis-color)', marginTop: '80px' }}>
                <div style={{ width: '350px', textAlign: 'center', height: '500px' }}>
                    <div className="d-lg-flex justify-content-lg-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x d-lg-flex align-content-around align-self-end order-1 justify-content-lg-end align-items-lg-start" style={{ width: '40px', height: '40px', cursor: 'pointer' }} onClick={onClose}>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                        </svg>
                    </div>
                    <div>
                        <p style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'Allerta', marginTop: '10px', marginBottom: '0px' }}>{productName}</p>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <p style={{ marginTop: '10px', fontFamily: 'Allerta', textAlign: 'left', fontSize: '18px' }}>Cantidad</p>
                    </div>
                    <div>
                        <div className="text-start" style={{ borderRadius: '5px', color: 'rgb(157,153,153)', background: '#D9D9D9', padding: '10px', border: '2px solid var(--bs-emphasis-color)', width: '330px' }}>
                        <input type="number" style={{ color: 'black', background: 'rgba(255,255,255,0)', borderColor: 'rgba(194,186,186,0)', outline: 'none' }} onChange={e => setQuantity(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <p style={{ marginTop: '10px', textAlign: 'left', fontFamily: 'Allerta', fontSize: '18px' }}>Notas</p>
                    </div>
                    <div style={{ alignContent: "initial", borderRadius: '5px', color: 'rgb(157,153,153)', background: '#D9D9D9', padding: '10px', width: '330px', height: '120px', border: '2px solid var(--bs-emphasis-color)' }}>
                        <input type="text" style={{ color: 'black', background: 'rgba(255,255,255,0)', borderStyle: 'none', borderColor: 'rgba(194,186,186,0)', height: '95px', outline: 'none' }} />
                    </div>
                    <div>
                        <button onClick={handleClick} className="btn btn-primary" type="button" style={{color:'white', marginTop: '20px', fontFamily: 'Allerta', background: color.color, borderWidth: '5px', borderColor: color.borderColor, borderTopColor: color.borderTopColor, borderRightColor: color.borderRightColor, borderBottomColor: color.borderBottomColor, outline: 'none' }} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseOver={handleHover} onMouseLeave={handleMouseUp}>AGREGAR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

PopupProduct.propTypes = {
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired, 
    productName: PropTypes.string.isRequired,
};

export default PopupProduct;