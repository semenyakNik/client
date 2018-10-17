import * as React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props: any){
      super(props);
      this.state ={
          name: ''
      };

  }


  public handleSubmit = (event:any) => {
      event.preventDefault();
      const data = {
          "firstName": event.target.firstName.value,
          "lastName": event.target.lastName.value,
          "phone": +event.target.phone.value,
          "email": event.target.email.value,
          "company": event.target.company.value
      };
      console.log(JSON.stringify(data));


      fetch("https://localhost:3000/contact/?key=78942ef2c1c98bf10fca09c808d718fa3734703e", {
          method: "POST",
          body: JSON.stringify(data),
          headers: new Headers({
              'Content-Type': 'application/json'
          })
      });
      console.log(event.target.firstName.value)
  };





  public render() {
    fetch('https://localhost:3000/contact/?key=78942ef2c1c98bf10fca09c808d718fa3734703e')
      .then((response) => {
          return response;
      })
      .then((user) => {
          console.log(user)
      });


    return (
        <div className="container">
            <div className="App">
                <form onSubmit={this.handleSubmit} action="">
                    <label htmlFor="">
                        firstName
                        <input name="firstName" type="text"/>
                    </label>
                    <label htmlFor="">
                        lastName
                        <input name="lastName" type="text"/>
                    </label>
                    <label htmlFor="">
                        phone
                        <input name="phone" type="text"/>
                    </label>
                    <label htmlFor="">
                        email
                        <input name="email" type="text"/>
                    </label>
                    <label htmlFor="">
                        company
                        <input name="company" type="text"/>
                    </label>

                    <button type="submit">send</button>
                </form>
            </div>
        </div>
    );
  }
}

export default App;
