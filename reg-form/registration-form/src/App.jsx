import './App.css';

function App() {
  return(
    <>
    <div className="container">
      <h1>Form in React</h1>
      <label htmlFor="fname">First Name*</label>
      <input type="text" placeholder="Enter First Name"/>
      <label htmlFor="lname">Last Name*</label>
      <input type="text" placeholder="Enter Last Name" />
      <label htmlFor="email">Enter email*</label>
      <input type="email" placeholder="Enter email" />
      <label htmlFor="contact">Contact*</label>
      <input type="number" placeholder="Enter Mobile Number" />
      <label htmlFor="gender">Gender*</label>
      <br />
      <input type="radio" name="gender" id="gender"/><label htmlFor="male">Male</label>
      <input type="radio" name="gender" />
      <label htmlFor="female">Female</label>
      <input type="radio" name="gender"/>
      <label htmlFor="other">Other</label>
      <br />
      <label htmlFor="subject">Your best subject</label>
      <br />
      <input type="checkbox" />
      <label htmlFor="english">English</label>
      <input type="checkbox" />
      <label htmlFor="english">Maths</label>
      <input type="checkbox" />
      <label htmlFor="english">Physics</label>
      <br />
      <label htmlFor="resume">Upload Resume*</label>
      <input type="file"/>
      <label htmlFor="url">Enter URL*</label>
      <input type="url" placeholder="Enter url"/>
      <label htmlFor="choice">Select your choice</label>
      <select name="" id="">
        <option value="">Select your ans</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <br />
      <label htmlFor="about">About</label>
      <textarea name="" id="" rows={3}></textarea>
      <p>Submit or Reset</p>
      <button>Reset</button>
      <button>Submit</button>
    </div>
    </>
  )

  
}

export default App