//state durum demektir, react componentin o anki durumuna ait js nesnesine state denir.
//props ile karıştırılabilir ancak
// state in ilk değeri olması gerekir.

//*state in o anki durumuna göre react tepki veriyor.
//* state in static olmasını istemeyiz.
//!duruma bağlı state değişimi,state nesnesini direk değiştiremeyiz, setState yapısı kurulmalı

//* constructor sayesinde state ilk durumu calışır,
//*onclick eventi calıştı o da show more metodunu calıştırır, o da setState nesnesini günceller , render metodunu yeniden çalıştırır.
//*istenilen değişikliğe karşı kendini  react ediyor.

//!propslar başlangıçtaki config dosyaları olarak düşünebiliriz, sabit ayar dosyaları, STate is durum bildirimleridir.State işlevselliktir.
//* Counter konulmuş, artış miktarı state i tanımlar, genel özellikleri ise propsları belirtir.
//! propslar immutable, state ise mutabledır.

//todo: propslar componentler arası veri akışına dahildir.stateler değiştiğinde yeni component oluşumu sağlamaz.

import React from "react";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
  }
  componentDidMount() {
    console.log("Component oluşturuldu");
  }

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };
  componentDidUpdate() {
    console.log("component güncellendi.");
  }

  render() {
    return (
      <div>
        <button onClick={this.showMore}>Click Here</button>
        {this.state.showContent ? (
          <div>
            <h1>State göründü</h1>
          </div>
        ) : null}
      </div>
    );
  }
}
export default State;
