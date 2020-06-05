import NavBar from '../NavBar'

export default function Info() {
  return (
    <div>
      <NavBar/>
      <h3>Basic info page</h3>
      <h4>This page will contain the forms for submitting your email address and city preference</h4>
      <h4>We may also want to allow the user to select a difficulty setting for the test</h4>
      <a href="/appl/Sandbox" className="card">
        <h3>Go to code test</h3>
      </a>
    </div>
  );
}
