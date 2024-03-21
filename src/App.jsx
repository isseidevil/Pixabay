import { useEffect, useState } from "react"
import "./App.css"


const App = () => {
  const[data,setData]=useState([])
  const[search,setSearch]=useState("")
  const[image,setImage]=useState(null)

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=42604544-0f7dec6c689896f50c3d82c14&q=${search}&image_type=photo&pretty=true`)
    .then((res)=>res.json())
    .then((d)=>setData(d.hits))
  })
  const click = (x)=>{
    setImage(x)
  }
  return (
    <div className="Pixabay">
      <div className="title">
      <div id="t-left">Dummy</div>
      <div id="t-right">
        <a href="#">LogIn</a>
        <button id="t-but">Join</button>
        <button>Upload</button>
      </div>
      </div>

      <div className="navi">
        <div className="txt">
          <h1>Enjoy Free Images</h1>
          <h2>From Anywhere</h2>
        </div>
      <input type="text" className="searching" placeholder="Search image here" onChange={(e)=>setSearch(e.target.value)} />
      {
        image && (
          <div>
            <img src={image} />
        </div>
        )
      }
      </div>
      <div class="overlay"></div>
      {
        data.map((item)=>{
          return(
            <div key={item.id} className="img-desig" >
              <img src={item.webformatURL} onClick={()=>click(item.largeImageURL)} id="img-s"/>
            </div>
          )
        })
      }
      <section className="foot">
        <div className="site">
          <div className="main">
            <h1>Dummy</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel fugiat animi ullam debitis modi vitae nihil recusandae ex ipsum!</p>
          </div>
          <div className="link">
            <div className="group">
              <span>Discover</span>
              <a href="#">Editor's Choice</a>
              <a href="#">Curated Collections</a>
              <a href="#">Popular Images</a>
              <a href="#">Popular Videos</a>
              <a href="#">Popular Music</a>
              <a href="#">Popular Searches</a>
            </div>
            <div className="group">
              <span>Community</span>
              <a href="#">Blog</a>
              <a href="#">Forum</a>
              <a href="#">Creators</a>
              <a href="#">Cameras</a>
            </div>
            <div className="group">
              <span>About</span>
              <a href="#">About Us</a>
              <a href="#">FAQ</a>
              <a href="#">License Summary</a>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies Policy</a>
              <a href="#">Digital Services Act</a>
              <a href="#">Report Content</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="claim">
        <p>copywrite: @Issei-sama</p>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </footer>
    </div>
  )
}

export default App
  