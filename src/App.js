import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';
import Nav from './Componenets/Nav';
import Catogory from './Componenets/Catogories';


const App = () => (
    <>
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <BookList />
                    <BookForm />
                </Route>
                <Route exact path="/categories">
                    <Catogory />
                </Route>
            </Switch>
        </Router>
    </>
);
export default App;