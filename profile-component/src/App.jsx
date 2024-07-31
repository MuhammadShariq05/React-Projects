
import "./App.css";

function App() {
  return (
    <>
      <body>
        <div className="card">
          <div class="header"></div>
          <div className="userProfile">
            <img
              src="https://wallpapers.com/images/high/cool-profile-picture-g3nzxs9mvrwkt7ew.webp"
              alt="user"
              className="userpic"
            />
            <h1 className="name">Shaky</h1>
            <p class="location">London</p>
          </div>

          <div class="stats">
            <div class="stat">
              <span class="number">80K</span><br />
              <span class="label">Followers</span>
            </div>
            <div class="stat">
              <span class="number">803K</span><br />
              <span class="label">Likes</span>
            </div>
            <div class="stat">
              <span class="number">1.4K</span><br />
              <span class="label">Photos</span>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
