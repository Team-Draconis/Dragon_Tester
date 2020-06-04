import NavBar from '../NavBar'
export default function Splash() {
  return (
    <div>
      <NavBar/>
      <h3>Splash page</h3>
      <h4>This page will contain boilerplate about what Dragon Tester is and how it helps applicants</h4>
      <a href="/appl/info" className="card">
        <h3>Go to basic info page</h3>
      </a>
    </div>
  );
}
