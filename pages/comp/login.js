import NavBar from '../NavBar'
export default function Splash() {
  return (
    <div>
      <NavBar/>
      <h3>Company Login page</h3>
      <h4>We will need to make a simple company login here</h4>
      <a href="/comp/dash" className="card">
        <h3>Go to the dashboard</h3>
      </a>
    </div>
  );
}
