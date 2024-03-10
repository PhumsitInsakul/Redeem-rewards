import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstProducts, setFirstProducts] = useState([
    { name: 'อเมริกาโน่', points: 600, quantity: 0 },
    { name: 'เอสเปรสโซ่', points: 650, quantity: 0 },
    { name: 'ลาเต้', points: 650, quantity: 0 },
    { name: 'คาปูชิโน่', points: 650, quantity: 0 },
    { name: 'มอคค่า', points: 700, quantity: 0 }
  ]);

  const [secondProducts, setSecondProducts] = useState([
    { name: 'เค้กช็อกโกแลต', points: 650, quantity: 0 },
    { name: 'เค้กส้มวาเลนเซีย', points: 700, quantity: 0 },
    { name: 'เค้กฝอยทอง', points: 700, quantity: 0 },
    { name: 'เค้กสตรอว์เบอร์รี', points: 750, quantity: 0 },
    { name: 'เค้กมัจชะครีมสด', points: 850, quantity: 0 }
  ]);

  const [thirdProducts, setThirdProducts] = useState([
    { name: 'ชาดำ', points: 550, quantity: 0 },
    { name: 'ชาเย็น', points: 550, quantity: 0 },
    { name: 'ชาพีช', points: 600, quantity: 0 },
    { name: 'ชามะนาว', points: 600, quantity: 0 },
    { name: 'ชาน้ำผึ้งมะนาว', points: 650, quantity: 0 }
  ]);

  const [fourthProducts, setFourthProducts] = useState([
    { name: 'เครปเย็น', points: 600, quantity: 0 },
    { name: 'แพนเค้ก', points: 650, quantity: 0 },
    { name: 'พาร์เฟ่ต์', points: 890, quantity: 0 },
    { name: 'พานาคอตต้า', points: 890, quantity: 0 },
    { name: 'วาฟเฟิลเนยสด', points: 890, quantity: 0 }
  ]);

  const decreaseQuantity = (index, productList, setProductList) => {
    const updatedProducts = [...productList];
    updatedProducts[index].quantity = Math.max(updatedProducts[index].quantity - 1, 0);
    setProductList(updatedProducts);
  };

  const increaseQuantity = (index, productList, setProductList) => {
    const updatedProducts = [...productList];
    updatedProducts[index].quantity += 1;
    setProductList(updatedProducts);
  };

  // Back-end รับข้อมูล allProducts
  const handleSubmit = () => {
    const allProducts = [
      ...firstProducts,
      ...secondProducts,
      ...thirdProducts,
      ...fourthProducts
    ];
    console.log(allProducts);

    setFirstProducts(firstProducts.map(product => ({ ...product, quantity: 0 })));
    setSecondProducts(secondProducts.map(product => ({ ...product, quantity: 0 })));
    setThirdProducts(thirdProducts.map(product => ({ ...product, quantity: 0 })));
    setFourthProducts(fourthProducts.map(product => ({ ...product, quantity: 0 })));
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-circle">
          อัศวินโต๊ะกลมในตำนาน
        </div>
        <ul>
          <p className="sidebar-category">แลกของรางวัล</p>
        </ul>
      </div>

      <div className="main-content">
        <h2 className='main-header'>รายการของรางวัล</h2>
        <div className="input-row">
          <label htmlFor="studentCardId">รหัสบัตร:</label>
          <input type="text" id="studentCardId" />
          <label htmlFor="studentId">รหัสนิสิต:</label>
          <input type="text" id="studentId" />
          <label htmlFor="studentName">ชื่อ-นามสกุล:</label>
          <input type="text" id="studentName" />
          <label htmlFor="studentPoints">คะแนน:</label>
          <input type="text" id="studentPoints" />
        </div>
        <div className="product-list-container">
          <div className="product-list">
            <table>
              <thead>
                <tr>
                  <th>กาแฟเย็น</th>
                  <th>คะแนน</th>
                  <th>จำนวน</th>
                </tr>
              </thead>
              <tbody>
                {firstProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.points}</td>
                    <td>
                      <button className="decrease" onClick={() => decreaseQuantity(index, firstProducts, setFirstProducts)}>-</button>
                      <input type="text" value={product.quantity} />
                      <button className="increase" onClick={() => increaseQuantity(index, firstProducts, setFirstProducts)}>+</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="product-list">
            <table>
              <thead>
                <tr>
                  <th>เค้ก</th>
                  <th>คะแนน</th>
                  <th>จำนวน</th>
                </tr>
              </thead>
              <tbody>
                {secondProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.points}</td>
                    <td>
                      <button className="decrease" onClick={() => decreaseQuantity(index, secondProducts, setSecondProducts)}>-</button>
                      <input type="text" value={product.quantity} />
                      <button className="increase" onClick={() => increaseQuantity(index, secondProducts, setSecondProducts)}>+</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="product-list">
            <table>
              <thead>
                <tr>
                  <th>ชา</th>
                  <th>คะแนน</th>
                  <th>จำนวน</th>
                </tr>
              </thead>
              <tbody>
                {thirdProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.points}</td>
                    <td>
                      <button className="decrease" onClick={() => decreaseQuantity(index, thirdProducts, setThirdProducts)}>-</button>
                      <input type="text" value={product.quantity} />
                      <button className="increase" onClick={() => increaseQuantity(index, thirdProducts, setThirdProducts)}>+</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="product-list">
            <table>
              <thead>
                <tr>
                  <th>ของหวาน</th>
                  <th>คะแนน</th>
                  <th>จำนวน</th>
                </tr>
              </thead>
              <tbody>
                {fourthProducts.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.points}</td>
                    <td>
                      <button className="decrease" onClick={() => decreaseQuantity(index, fourthProducts, setFourthProducts)}>-</button>
                      <input type="text" value={product.quantity} />
                      <button className="increase" onClick={() => increaseQuantity(index, fourthProducts, setFourthProducts)}>+</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
        <div className="submit-container">
          <button className="submit-button" onClick={handleSubmit}>ตกลง</button>
        </div>
      </div>
    </div>
  );
}

export default App;
