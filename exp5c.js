import React from 'react';
function Header({ title }) {
  return <header><h1>{title}</h1></header>;
}
class Content extends React.Component {
  render() {
    const { paragraphs } = this.props;
    return (
      <section>
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </section>
    );
  }
}
function Footer() {
  return <footer><p>© 2025 All rights reserved</p></footer>;
}
function Page() {
  return (
    <div>
      <Header title="Welcome to My Site" />
      <Content paragraphs={["This is the first paragraph.", "Here's another one."]} />
      <Footer />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}
export default App;
