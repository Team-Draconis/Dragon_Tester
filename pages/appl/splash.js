import NavBar from '../NavBar'
export default function Splash() {
  return (
    <div>
      <NavBar/>
      <h3>Splash page</h3>
      <a href="http://localhost:3000/appl/info" className="card">
        <h3>Go to basic info page</h3>
      </a>
    </div>
  );
}
