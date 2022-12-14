import React from "react";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import Header from "../../components/Header/Header";




// const initialStateItems = [
//   {
//     image: "https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp.jpg",
//     name: "Dan Abramov",
//     description: "React core member",
//     twitterLink: "https://twitter.com/dan_abramov"
//   }
// ];

class Root extends React.Component {
  // state = {
  //   items: [...initialStateItems],
  // };



  render() {
    return (
      <BrowserRouter>
      <Header ></Header>
      <h1>hello</h1>
      <Routes>
          <Route  path="/" element={<TwittersView  />} />
          <Route exact path="/articles" element={<ArticlesView/>} />
          <Route path="/notes" element={<NotesView/>} />
      </Routes>
      
      </BrowserRouter>

    );
  }
}

export default Root;
