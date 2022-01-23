import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { loadPosts } from './util/load-posts'
import { Posts } from './components/Posts';

class App extends Component {
    state = {
      posts: []
    };
      
   async componentDidMount() {
     await this.loadPosts();
    }

    loadPosts =  async () =>{
      const postsAndPhotos = await loadPosts();
     this.setState({posts: postsAndPhotos});
    }
    
    render(){
      const { posts } = this.state;

      return (
          <section className='container'>
            <Posts posts={posts}/>
          </section>
      );
    }
  }


      export default App;
