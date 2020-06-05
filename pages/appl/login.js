import NavBar from '../NavBar'
export default function login() {
  const handleSubmit = (e) => {
    console.log(e);
  };
  
  return (
    <div>
      <NavBar/>
      <h3>Applicant Login page</h3>
      <h4>Applicant login information, email address and password</h4>
      <form >
        Name: <input type="text" name="fname"/> <br/>
        Email: <input type="text" name="femail"/> <br/>
        <input onClick={handleSubmit} type="submit" />
      </form>
      <a href="/appl/splash" className="card">
        <h3>Go to the splash page</h3>
      </a>
    </div>
  );
}
