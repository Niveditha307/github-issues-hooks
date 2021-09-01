import { Route,Switch,BrowserRouter } from 'react-router-dom';
import GitHubIssuesList from "./components/GitHubIssuesList"
import GitHubIssuesListItem from './components/GitHubIssuesListItem';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Header from "./components/Header"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path = "/" component = {GitHubIssuesList}/>
      <Route  exact path = "/issues/:id" component = {GitHubIssuesListItem}/>
      <Route exact path = "/About" component = {About} />
      <Route exact path = "/Contact" component = {Contact}/>
      <Route component = {NotFound}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
