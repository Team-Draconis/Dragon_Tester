import NavBar from '../NavBar'
export default function Report() {
  const handleSubmit = (e) => {
    console.log('clicked!')
  }

  return (
    <div>
      <NavBar/>
      <h3>Report page</h3>
      <h4>This will contain a summary of the submitted information and the option to finalize or not.</h4>
      <h4>We will need to include the legal stuff, too.</h4>
      <input type="checkbox" id="Legal" name="Legal" value="True"/>
      <label for="Legal"> I have read the above and agree to the conditions</label><br/>
      <form action="/appl/end"><input onClick={handleSubmit} type="submit"/></form>

      <a href="/appl/Sandbox" className="card">
        <h3>return to test</h3>
      </a>
    </div>
  );
}
