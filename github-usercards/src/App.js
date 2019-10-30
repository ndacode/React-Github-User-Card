import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/usercard';
import UserList from './components/userlist';


class App extends React.Component {

    constructor (){
      super();
      this.state={
        user: {},
        followers: []
      }
    }
    
    componentDidMount() {
      axios
        .get('https://api.github.com/users/ndacode')
        .then(res => {
          console.log(res.data)
          this.setState({
            user: res.data
          });
        })
        .catch(err => {
          console.log('The data was not returned', err.response);
        })
      axios
        .get('https://api.github.com/users/ndacode/followers')
        .then(response => {
          console.log(response.data)
          this.setState({
            followers: response.data
          });
        })
    }

    render() {
      return(
      <>
        <div>
          <UserCard
          img={this.state.user.avatar_url}
          name={this.state.user.name}
          login={this.state.user.login}
          bio={this.state.user.bio}
          followers={this.state.user.followers_url}
          githubUrl={this.state.user.url}/>
        </div>
        <div>
        {this.state.followers.map(follower => <UserCard
        key={follower.id}
        img={follower.avatar_url}
        name={follower.name}
        login={follower.login}
        githubUrl={follower.html_url}
        followers={follower.followers_url}

        />


        )}
        </div>
      </>
      )
  } 
}


export default App;
