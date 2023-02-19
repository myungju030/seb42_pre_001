import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Tages from './pages/Tags';
import Users from './pages/Users';
import Companies from './pages/Companies';
import styled, { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import Ask from './pages/Ask';
import Answers from './pages/Answers';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <Header />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/questions" element={<Questions />}></Route>
          <Route path="/questions/ask" element={<Ask />}></Route>
          <Route path="/questions/question" element={<Answers />}></Route>
          <Route path="/tags" element={<Tages />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/companies" element={<Companies />}></Route>
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/users/logout" element={<Logout />} />
        </Routes>
      </PageLayout>
    </Provider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`

  *{
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  }

  body {
  width: 100vw;
  height: 100vh;  
  background-color: hsl(210deg 8% 98%)
  }

  a {
    text-decoration: none;
  }
`;

const PageLayout = styled.div`
  padding-top: 50px;
`;
