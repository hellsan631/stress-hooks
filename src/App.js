import React from 'react';
import Benchmark from './components/Benchmark';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import HooksComponent from './components/HooksComponent';
import CodeSnippet from './components/CodeSnippet';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import retrieveArguments from 'retrieve-arguments';
import {
  classComponentCode,
  functionalComponentCode,
  hooksComponentCode,
} from './utils/sourceCode';
import defaultBenchmark from './utils/defaultBenchmark';
import retrieveArrowArguments from './utils/retrieveArrowArguments';
import './App.css';

const componentMap = {
  class: ClassComponent,
  functional: FunctionalComponent,
  hooks: HooksComponent,
};

const componentDescriptionMap = {
  class: 'class component',
  functional: 'functional component without hooks',
  hooks: 'functional component with hooks',
};

const componentCodeMap = {
  class: classComponentCode,
  functional: functionalComponentCode,
  hooks: hooksComponentCode,
};

const clearedTimes = { startTime: null, endTime: null };

/* eslint-disable no-eval */
let defaultBenchmarkFunction;
eval(`defaultBenchmarkFunction = ${defaultBenchmark}`);
/* eslint-enable no-eval */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benchmark: defaultBenchmarkFunction,
      component: null,
      runBenchmark: false,
      withMemo: false,
      values: [35],
      startTime: null,
      stopTime: null,
      totalRenders: 10,
      benchmarkBody: defaultBenchmark,
      syntaxError: null,
      runtimeError: null,
    };
  }

  catchRuntimeError = errorMessage => {
    this.setState({
      runtimeError: errorMessage,
      runBenchmark: false,
      ...clearedTimes,
    });
  };

  handleChangeBenchmark = value => {
    this.setState({ benchmarkBody: value });
  };

  handleUpdateBenchmark = () => {
    try {
      let benchmark;
      /* eslint-disable no-eval */
      eval(`benchmark = ${this.state.benchmarkBody}`);
      /* eslint-enable no-eval */
      this.setState({ benchmark, syntaxError: null });
    } catch (error) {
      this.setState({ syntaxError: error.message, benchmark: null });
    }
  };

  handleChangeArgument = idx => e => {
    const values = this.state.values.slice();
    values.splice(idx, 1, e.currentTarget.value);
    this.setState({ values, ...clearedTimes });
  };

  handleChangeTotalRenders = e => {
    this.setState({ totalRenders: e.currentTarget.value, ...clearedTimes });
  };

  handleChangeComponent = component => {
    return () => {
      this.setState({ component, ...clearedTimes });
    };
  };

  handleChangeWithMemo = () => {
    this.setState(state => ({ withMemo: !state.withMemo, ...clearedTimes }));
  };

  handleClickRunBenchmark = e => {
    e.preventDefault();
    this.setState({ runBenchmark: true, startTime: new Date() });
  };

  stopBenchmark = () => {
    this.setState({ runBenchmark: false, stopTime: new Date() });
  };

  isComponent = component => {
    return this.state.component === component;
  };

  isClassComponent = () => {
    return this.isComponent('class');
  };

  isFunctionalComponent = () => {
    return this.isComponent('functional');
  };

  isHooksComponent = () => {
    return this.isComponent('hooks');
  };

  renderBenchmarkFunction = () => {
    const { benchmarkBody } = this.state;
    return (
      <React.Fragment>
        <h2>Benchmark function:</h2>
        <label>
          Benchmark function:
          <br />
          <Editor
            value={benchmarkBody}
            onValueChange={this.handleChangeBenchmark}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
            className="Editor"
            onBlur={this.handleUpdateBenchmark}
          />
        </label>
      </React.Fragment>
    );
  };

  renderErrors = () => {
    const { syntaxError, runtimeError } = this.state;
    return (
      <React.Fragment>
        {Boolean(syntaxError) && <p>Syntax error: {syntaxError}</p>}
        {Boolean(runtimeError) && <p>Runtime error: {runtimeError}</p>}
      </React.Fragment>
    );
  };

  renderArgumentInputs = () => {
    const { benchmark, benchmarkBody, values, syntaxError } = this.state;
    let benchmarkArguments = [];
    try {
      benchmarkArguments = retrieveArguments(benchmark);
    } catch {
      if (!syntaxError) {
        benchmarkArguments = retrieveArrowArguments(benchmarkBody);
      }
    }
    return benchmarkArguments.map((argument, idx) => (
      <label key={idx}>
        {argument} ={' '}
        <input
          name={argument}
          type="text"
          value={values[idx]}
          onChange={this.handleChangeArgument(idx)}
          disabled={syntaxError}
        />
        <br />
      </label>
    ));
  };

  renderOptions = () => {
    const { totalRenders, syntaxError, withMemo } = this.state;
    return (
      <React.Fragment>
        <label>
          Total number of renders:{' '}
          <input
            name="total number of renders"
            type="number"
            value={totalRenders}
            onChange={this.handleChangeTotalRenders}
            disabled={syntaxError}
          />
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="class"
              checked={this.isClassComponent()}
              onChange={this.handleChangeComponent('class')}
              disabled={syntaxError}
            />
            {componentDescriptionMap.class}
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="functional"
              checked={this.isFunctionalComponent()}
              onChange={this.handleChangeComponent('functional')}
              disabled={syntaxError}
            />
            {componentDescriptionMap.functional}
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="hooks"
              checked={this.isHooksComponent()}
              onChange={this.handleChangeComponent('hooks')}
              disabled={syntaxError}
            />
            {componentDescriptionMap.hooks}
          </label>
        </div>
        <label>
          Use useMemo:
          <input
            name="withMemo"
            type="checkbox"
            checked={withMemo}
            onChange={this.handleChangeWithMemo}
            disabled={syntaxError || !this.isHooksComponent()}
          />
        </label>
      </React.Fragment>
    );
  };

  renderGoButton = () => {
    const { syntaxError, component } = this.state;
    return (
      <button
        onClick={this.handleClickRunBenchmark}
        disabled={syntaxError || !component}
      >
        Go!
      </button>
    );
  };

  renderBenchmark = () => {
    const {
      runBenchmark,
      component,
      benchmark,
      values,
      totalRenders,
      withMemo,
    } = this.state;
    return (
      runBenchmark && (
        <Benchmark
          component={componentMap[component]}
          benchmark={benchmark}
          values={values}
          totalRenders={totalRenders}
          withMemo={withMemo}
          stopBenchmark={this.stopBenchmark}
          catchRuntimeError={this.catchRuntimeError}
        />
      )
    );
  };

  renderResults = () => {
    const {
      runBenchmark,
      startTime,
      stopTime,
      totalRenders,
      component,
      withMemo,
    } = this.state;

    const componentDescription = this.isHooksComponent()
      ? `${componentDescriptionMap[component]} ${
          withMemo ? '' : 'without '
        }using useMemo`
      : componentDescriptionMap[component];
    return (
      !runBenchmark &&
      Boolean(startTime) &&
      Boolean(stopTime) && (
        <p>
          Calculating the function {totalRenders} times took the{' '}
          {componentDescription} {stopTime.getTime() - startTime.getTime()}{' '}
          milliseconds.
        </p>
      )
    );
  };

  renderBenchmarkInfo = () => {
    const { component, benchmark, values, withMemo } = this.state;
    let benchmarkString = 'null';
    if (benchmark) {
      benchmarkString = benchmark.toString();
      benchmarkString = benchmarkString.slice(
        0,
        benchmarkString.indexOf('{') + 1
      );
    }
    const propsString = `
props = {
  benchmark: ${benchmarkString}...},
  catchRuntimeError: errorMessage => {...},
  values: [${values.join(' ')}],
  withMemo: ${withMemo},
}
      `;
    return (
      Boolean(component) && (
        <React.Fragment>
          <CodeSnippet code={componentCodeMap[component]} />
          <CodeSnippet code={propsString} />
        </React.Fragment>
      )
    );
  };

  render() {
    return (
      <>
        <h1>Stress Testing React Hooks</h1>
        <form>
          {this.renderBenchmarkFunction()}
          {this.renderErrors()}
          <br />
          {this.renderArgumentInputs()}
          {this.renderOptions()}
          {this.renderGoButton()}
        </form>
        {this.renderBenchmark()}
        {this.renderResults()}
        {this.renderBenchmarkInfo()}
      </>
    );
  }
}

export default App;
