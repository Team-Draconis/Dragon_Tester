import NavBar from "../NavBar";
export default function Report() {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <NavBar />
      <h3>Applicant Register page</h3>
      <h4>New Applicant's will register here</h4>
      {/* <form action="/appl/info"> */}
      <form >
        Name: <input type="text" name="fname"/> <br/>
        Email: <input type="text" name="femail"/> <br/>
        <input onClick={handleSubmit} type="submit" />
      </form>

      <a href="/" className="card">
        <h3>return to login</h3>
      </a>
    </div>
  );
}
