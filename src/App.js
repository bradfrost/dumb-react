import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Button } from './components/Button/Button';
import { Section } from './components/Section/Section';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero title="This is my hero" description="This is the hero description text" />
        <Section title="Hi I'm a section title" description="This is a description of the section">
        	<Card title="Card Title" description="This is the card" />
        </Section>

		<Section title="Hi I'm another section" description="This is a different description">
			<Button onClick={() => alert('i was clicked!')} text="Click Me Please" />
        </Section>
        <Footer />
      </div>
    );
  }
}

export default App;
