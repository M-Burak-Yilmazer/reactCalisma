//*ders tekrarı eventler; syntetic eventlar
//* eventlar camel case olarak yazılıyor
//* react ortamına dinamiklik getirmek için, statiklik cıkma için, DOM manipulasyonu mevzusu geliyor,
//* ne kadar az manipulasyon o kadar hız
//*2019 a kadar sadece class component  kullanılıyordu
//! sonrasında hooklar cıktı, son bes altı aydır dökümantasyondan da class componentler cıktı
//! local state uygulamamızı saplayan useState hooku kullanılıyor
//* sadece react componentlerinde en üstte tanımlanmalıdır
//*  useState initial state değeri alır, useState hep aynı değeri döndürür.
//?===========================================================================

import { useState } from "react";

//*react ortamında react bootstrap component bazlı kullanımıdır
//*kullanmak için yarn add npm install, npm install react-boostrap boostrap  kurulum linki
//* import from "react-bootstrap/Button" seklinde import edilmeli ve
//* <Button variant="primary">Primary</Button> componentin içine bu şekilde kullanılır.
//* parentlardan(app.js,index.js) herhangi birine import "bootstarp/dist/css/boostrap.min.css" dosyası girilmeli()
//!1-yarn add react-bootstrap bootstrap-
//!2- import "bootstrap/dist/css/bootstrap.min.css"
//!3- yarn start
//! className ve HtmlFor farkı var nüans farkları var;
//! bu şekilde bootstrap bağlanabilir, ve class üzerinden calışır
//! html to jsx compiler da istediğimiz codları dönüştürebiliriz.

//*inputun her veri girişiminde değişimini onChange ile yakalayabiliriz, doma anlık değişimi stateler ile yakalayabiliriz.
//! inputun valuesunu saklamak için local state kullanılır. state güncellendiğinde anlık olarak render eder react. ilgili alanda dom manipülasyonu olur.
//! state de tutulan değeri value propu ile inputa başlangıç değeri sağlamış oluruz. onChange eventi ile beraber value probu kullanılır.
//! eğer ki value probu kullanılmazsa state in o anki değişimi proba işlemez
//! submit eventini forma vermek lazım submite verilirse 

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
    username:${username} 
    email: ${email}
    password: ${password}`);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="mt-4 p-2">
      <h2 className="text-center text-primary">Forms In React</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello {username}
          </label>
          <input
            onChange={handleUsername}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span className="text-success">{email}</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            value={password}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
