import logo from './logo.svg';
import './App.css';
import Post from "./Post"
import Navbar from "./Navbar"
import Comment from "./Comment"
import Card from "./Card"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <Post userID="Dek_SE" message="Yeah , I got a grade A in Mobile Programing.">
        <Comment userID="อีแฮ่มช่างสวบ" message="ไม่ต้องแซะจ้า" ></Comment>
        <Comment userID="อีแฮ่มแม่งช่วยด้วยยยย" message="ไม่ต้องพูด" ></Comment>
      </Post>
      <Card></Card>
      
    </div>
    
  );
}

export default App;
