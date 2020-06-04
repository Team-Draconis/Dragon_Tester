import NavBar from '../NavBar'
export default function Splash() {
  return (
    <div>
      <NavBar/>
      <h3>Company dashboard</h3>
      <h4>This will contain a table that lists the email, city, score and a button to see result</h4>
      <a href="/" className="card">
        <h3>Log Out</h3>
      </a>
    </div>
  );
}
