import React from 'react';
import ReactDOM from 'react-dom';
//import {HooksApp} from './HooksApp';
//import {CounterApp} from './components/1-useState/counterApp';
//import {CounterWithCustomHook} from './components/1-useState/CounterWithCustomHook';

// import {SimpleForm} from './components/2-useEffect/SimpleForm'
// import {FormWithCustomHook} from './components/2-useEffect/FormWithCustomHook'
//import {MultipleCustomHooks} from './components/3-examples/MultipleCustomHooks';
//import {FocusScreen} from './components/4-useRef/FocusScreen';
//import {RealExampleRef} from './components/4-useRef/RealExampleRef';
// import {ReLayoutEffect} from './components/5-useLayoutEffect/ReLayoutEffect'
import {CallbackHook} from './components/6-useMemo/CallbackHook'

ReactDOM.render(
    <CallbackHook />,
  document.getElementById('root')
);

