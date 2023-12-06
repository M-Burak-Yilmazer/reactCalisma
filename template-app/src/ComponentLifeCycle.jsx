//* component deki constructor ile başlar delete ile biter. ekrandaki bilginin silinmesi ile biter;

//? componentDidMount: constructor oluştu, sonra componuentdidmount calıştı, o uygulamaya ayağa kalktığı anlamına gelir, güncelleme yapılırsa componentDidUpdate oluşur, silinirse componentwillUnmount olur.

//!component live cycle da olmazsa olmaz render metodudur. 

//* componentDidMount( ) : state constructor içinde oluşturulur, state durumunu componentdidmount içinde oluşturursak reacta has bir durum oluşmuş olur. 


componentDidMount() {
    console.log("Component oluşturuldu");
  }

 
  componentDidUpdate() {
    console.log("component güncellendi.");
  }