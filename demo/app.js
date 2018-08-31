import Carousel from '../src/index';
import React from 'react';
import ReactDom from 'react-dom';

// QUICK TESTING
const TestComponent1 = props => {
  const style = {
    padding: '100px 0',
    background: '#eee',
    textAlign: 'center'
  }
  return (
    <div style={style} onClick={() => props.clickEvent(props.name)}>
      {props.name}
    </div>
  )
}
const TestComponent2 = props => {
  const style = {
    padding: '100px 0',
    background: '#ccc',
    textAlign: 'center'
  }
  return (
    <div style={style} onClick={() => props.clickEvent(props.name)}>
      {props.name}
    </div>
  )
}
const TestComponent3 = props => {
  const style = {
    padding: '100px 0',
    background: '#aaa',
    textAlign: 'center'
  }
  return (
    <div style={style} onClick={() => props.clickEvent(props.name)}>
      {props.name}
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: 6,
      wrapAround: false,
      underlineHeader: false,
      slidesToShow: 1.0,
      cellAlign: 'left',
      transitionMode: 'scroll'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    console.log(name);
  }

  render() {
    return (
      <div style={{ width: '50%', margin: 'auto' }}>
        <Carousel
          transitionMode={this.state.transitionMode}
          cellAlign={this.state.cellAlign}
          slidesToShow={this.state.slidesToShow}
          wrapAround={this.state.wrapAround}
          slideIndex={this.state.slideIndex}
          renderTopCenterControls={({ currentSlide }) => (
            <div
              style={{
                fontFamily: 'Helvetica',
                color: '#fff',
                textDecoration: this.state.underlineHeader
                  ? 'underline'
                  : 'none'
              }}
            >
              Nuka Carousel: Slide {currentSlide + 1}
            </div>
          )}
        >
          <TestComponent1 name='Test 1' clickEvent={(this.handleClick)} /> 
          <TestComponent2 name='Test 2' clickEvent={(this.handleClick)} /> 
          <TestComponent3 name='Test 3' clickEvent={(this.handleClick)} /> 
        </Carousel>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <button onClick={() => this.setState({ slideIndex: 0 })}>1</button>
            <button onClick={() => this.setState({ slideIndex: 1 })}>2</button>
            <button onClick={() => this.setState({ slideIndex: 2 })}>3</button>
          </div>
        </div>
        {this.state.transitionMode !== 'fade' && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {this.state.slidesToShow > 1.0 && (
              <div>
                <button onClick={() => this.setState({ cellAlign: 'left' })}>
                  Left
                </button>
                <button onClick={() => this.setState({ cellAlign: 'center' })}>
                  Center
                </button>
                <button onClick={() => this.setState({ cellAlign: 'right' })}>
                  Right
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('content'));
