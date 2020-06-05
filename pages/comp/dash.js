import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";
import Link from "next/link";

const Dashboard = ({ testResults }) => {
  if (testResults) {
    return (
      <div>
        <h1>Coding Test Report</h1>
        {testResults.map((testResult) => {
          return (
            <div key={testResult._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/test/${testResult._id}`}>
                      <a>{testResult.candidate_email}</a>
                    </Link>
                    <p>From {testResult.city}</p>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/test/${testResult._id}`}>
                    <Button primary>View Codes</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
};

Dashboard.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/codetest");
  const { data } = await res.json();
  return { testResults: data };
};

export default Dashboard;
