
import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
    state = {
        posts: [
          {
            id: 1,
            title: 'Título 1',
            body: 'O corpo 1'
          },
          {
            id: 2,
            title: 'Título 2',
            body: 'O corpo 3'
          },
          {
            id: 3,
            title: 'Título 3',
            body: 'O corpo 3'
          }
        ]
      };
  

    render(){
      const { posts } = this.state;

      return (
            <div className="App">
              {posts.map(post => (
                <div key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          );
        }
      }

export default App;
