import logo from './logo.svg';
import './App.css';
import Blogs from './Blogs';
import {Route , Switch , BrowserRouter as Router} from 'react-router-dom'
import BlogPost from './BlogPost';

function App() {
  return (
    <div className="App">
     <h1>blog app</h1>
 <Router>
   <Switch>
     <Route path="/" exact  component={Blogs} />
     <Route path="/blog/:id" component={BlogPost}/>
   </Switch>
 </Router>
    </div>
  );
}

export default App;
