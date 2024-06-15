// import { ChildrenComponent } from "./components/ChildrenComponent"
// import { FirstComponents } from "./components/FirstComponents"
// import { SecondComponents } from "./components/SecondComponents"
// import { ThirdComponents } from "./components/ThirdComponents"
// import React, { useReducer } from "react"
// import DataFetchingUsingFC from "./components/DataFetchingUsingFC"
// import EffectHookMouseMove from "./components/EffectHookMouseMove"
// import EffectHookOne from "./components/EffectHookOne"
// import FuncComponentC from "./components/FuncComponentC"
// import HookCount from "./components/HookCount"
// import HookCounterTwo from "./components/HookCounterTwo"
// import HookUseArr from "./components/HookUseArr"
// import HookUseObj from "./components/HookUseObj"
// import IntervalHookCounter from "./components/IntervalHookCounter"
// import MouseContainer from "./components/MouseContainer"
// import PostForm from "./components/PostForm"
// import PostLists from "./components/PostLists"
// import ReduceHookCount from "./components/ReduceHookCount"
// import ReduceHookCountTwo from "./components/ReduceHookCountTwo"
// import ReduceHookCountThree from "./components/ReduceHookCountThree"
// import CountComponentA from "./components/CountComponentA"
// import CountComponentB from "./components/CountComponentB"
// import CountComponentC from "./components/CountComponentC"
import DataFetchingTwo from "./components/DataFetchingTwo"

// import FRParentInput from "./components/FRParentInput"
// import FocusInput from "./components/FocusInput"
// import Form from "./components/Form"
// import Fragment1 from "./components/Fragment1"
// import LifeCycleA from "./components/LifeCycleA"
// import ParentComp from "./components/ParentComp"
//import PortalDemo from "./components/PortalDemo"
// import RefDemo from "./components/RefDemo"

// import { ArraySample } from "./components/ArraySample"
// import { FunctionSample } from "./components/FunctionSample"
// import { MultiType } from "./components/MultiType"
// import { SampleColor } from "./components/SampleColor"

// import { UserCard } from "./components/UserCard"

// import ClassClicks from "./components/ClassClicks"
// import { ClassComponent } from "./components/ClassComponent"
// import { ConditionalRendering } from "./components/ConditionalRendering"
// import Counter from "./components/Counter"
// import EventBind from "./components/EventBind"
// import { FunctionClicks } from "./components/FunctionClicks"
// import Inline from "./components/Inline"
// import { JsxExample } from "./components/JsxExample"
// import MyStyleSheet from "./components/MyStyleSheet"
// import NameList from "./components/NameList"
// import ParentComponent from "./components/ParentComponent"
// import { PropsExample } from "./components/PropsExample"
// import { StateExample } from "./components/StateExample"
// import './components/appStyle.css'
// import styles from './components/appStyle.module.css'

//import ClickCounter from "./components/ClickCounter"
// import ClickCounterTwo from "./components/ClickCounterTwo"
// import CounterTwo from "./components/CounterTwo"
// import ErrorBoundary from "./components/ErrorBoundary"
// import Hero from "./components/Hero"
//import HoverCounter from "./components/HoverCounter"
// import HoverCounterTwo from "./components/HoverCounterTwo"
// import User from "./components/User"
// import ComponentC from "./components/ComponentC"
// import { UserProvider } from "./components/UserContext"

import DataFetchingThree from "./components/DataFetchingThree"
import ParentComponentUsingUCB from "./components/ParentComponentUsingUCB"
import CounterUsingUM from "./components/CounterUsingUM"
import FocusInputUsingUR from "./components/FocusInputUsingUR"
import HookTimerUsingUR from "./components/HookTimerUsingUR"
import DocTitleOne from "./components/DocTitleOne"
import DocTitleTwo from "./components/DocTitleTwo"
import CounterOne from "./components/CounterOne"
import Counter2Two from "./components/Counter2Two"
import UseForm from "./components/UseForm"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./React-Router/Home"
import Layout from "./React-Router/Layout"
// import { Link, Outlet } from 'react-router-dom'
import Blogs from "./React-Router/Blogs"
import About from "./React-Router/About"
import NoPage from "./React-Router/NoPage"
import CustomerAdd from "./components/CustomerAdd"
import CustomerView from "./components/CustomerView"
import { Provider} from "react-redux"
import { store } from "./store"






// const intialState=0;

// const reducer =(state,action)=>{

//     switch (action) {
//         case 'Increment':
//             return state+1
//             break;
//         case 'Decrement':
//             return state-1
//             break;
//         case 'Reset':
//             return intialState
//             break;

//         default:
//             return state;
//     }

// }


// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();


function App() {
  // const[count,dispatch]=useReducer(reducer,intialState)

  // const items=[
  //   {id:1,name:"Item1"},
  //   {id:2,name:"Item2"},
  //   {id:3,name:"Item3"}
  // ]

  // const handleClick=()=>{
  //   alert("Button Clicked")
  // }


  return (
    <Provider store={store}>


    {/* // <UserContext.Provider value={{countState:count,countDispatch:dispatch}}> */}
    <>
      {/* <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>

      </BrowserRouter> */}

      {/*------------ Basics----------- */}
      {/* <h1 className="error">Error</h1>
     <h1 className={styles.success}>Success</h1> */}

      {/* <div>Hello Sundar using React</div>
      <FirstComponents/>
      <SecondComponents/> */}
      {/* <ThirdComponents name="sundar" age={23} isMarried={false} />
      <ThirdComponents name="vijay" age={49} isMarried={true} />
      <ThirdComponents name="dhoni" age={40} isMarried={true} />
      <ChildrenComponent>
        <p>This is a sample para1</p>
        <p>This is a sample para2</p>
      </ChildrenComponent> */}
      {/* <ArraySample items={items}/> */}
      {/* <SampleColor color="yellow"/> */}
      {/* <MultiType value ="Sundar"/>
      <MultiType value ={23}/>
      <MultiType value ={true}/> */}
      {/* <div>
        <h1>Parent Component</h1>
        <FunctionSample handleClick={handleClick}/>
      
      </div> */}

      {/* -----Profile Card Using React -------*/}
      {/* <UserCard/> */}


      {/* ------Class Component in React  ------*/}

      {/* <ClassComponent/> */}
      {/* <ClassComponent name="BMW" />
      <ClassComponent name="Audi" />
      <ClassComponent name="Benz"/> */}

      {/* ----JSX ----*/}
      {/* <JsxExample/> */}

      {/*---- Props ----*/}
      {/* <PropsExample name= "Sundar">
        <p>This is a children props</p>
      </PropsExample>
      <PropsExample name= "Dhoni"/>
      <PropsExample name= "Vijay"/> */}

      {/*---- Setstate----- */}
      {/* <StateExample/> */}
      {/* <Counter/> */}

      {/*------- Event Handling------ */}
      {/* <FunctionClicks/> */}
      {/* <ClassClicks/> */}

      {/* -------Binding Events --------*/}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}


      {/* -----List and Keys-------- */}
      {/* <NameList/> */}

      {/*------ Css Styling in React ------*/}
      {/* <MyStyleSheet primary={true}/> */}
      {/* <Inline/> */}

      {/*---- Form Handling------ */}
      {/* <Form/> */}


      {/*-------- Lifecycle Methods --------*/}
      {/* <LifeCycleA/> */}


      {/*------Fragments ---------*/}
      {/* <Fragment1/> */}


      {/*------ PureComponent-------- */}
      {/* <ParentComp/> */}

      {/*------- Refs -------*/}
      {/* <RefDemo/> */}
      {/* <FocusInput/> */}

      {/* ------ForwardRefs ------*/}
      {/* <FRParentInput/> */}

      {/*------ Portals------- */}
      {/* <PortalDemo/> */}

      {/*------ ErrorBoundary ----------*/}

      {/* <ErrorBoundary>
    <Hero heroName="Batman"/>
    </ErrorBoundary>
    <ErrorBoundary>
        
    <Hero heroName="IronMan"/>
    </ErrorBoundary>
    <ErrorBoundary>

    <Hero heroName="Joker"/>
    </ErrorBoundary> */}


      {/*--------HigherOrder Component(Hoc)--------- */}

      {/* <ClickCounter name="Sundar"/>
      <HoverCounter /> */}


      {/*----------- Render-Props --------*/}

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=>isLoggedIn ? "Sundar" :"Guest"}/> */}

      {/* <CounterTwo >
        {(count, increaseCounter) => (<ClickCounterTwo count={count} increaseCounter={increaseCounter} /> )} 
      </CounterTwo>
      <CounterTwo >
        {(count, increaseCounter) => ( <HoverCounterTwo count={count} increaseCounter={increaseCounter} /> )} 
      </CounterTwo> */}

      {/* ---------Context API ----------*/}

      {/* <UserProvider value="Sundar">
      <ComponentC/>
      </UserProvider> */}

      {/*----------- Http Methods--------- */}
      {/* <PostLists/> */}
      {/* <PostForm/> */}


      {/*-------- React Hooks --------*/}

      {/* ------useState Hook ------*/}
      {/* <HookCount/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookUseObj/> */}
      {/* <HookUseArr/> */}

      {/*----- useEffect Hook ------*/}

      {/* <EffectHookOne/> */}
      {/* <EffectHookMouseMove/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetchingUsingFC/> */}

      {/*------ useContext Hook---- */}
      {/* <UserContext.Provider value={'Sundar'}>
        <ChannelContext.Provider value={'Guest'}>
          <FuncComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/*------ useReducer Hook----- */}
      {/* <ReduceHookCount/> */}
      {/* <ReduceHookCountTwo/> */}
      {/* <ReduceHookCountThree/> */}

      {/*------useReducer with useContext Hook-------*/}
      {/* Count -{count}
      <CountComponentA />
      <CountComponentB />
      <CountComponentC /> */}

      {/*------- Fetching data with useState & useEffect Hook------- */}
      {/* <DataFetchingTwo/> */}
      {/*------- Fetching data with useReducer & useEffect Hook------- */}
      {/* <DataFetchingThree/> */}

      {/*------ useCallBack hook------- */}
      {/* <ParentComponentUsingUCB/> */}

      {/*------ useMemo hook---------*/}
      {/* <CounterUsingUM/> */}


      {/*------ useRef hook---------*/}
      {/* <FocusInputUsingUR/> */}
      {/* <HookTimerUsingUR/> */}


      {/*--------- Custom Hook --------*/}

      {/*------ useDocumentTitle Hook------- */}
      {/* <DocTitleOne/>
          <DocTitleTwo/> */}
      {/*------ useCount Hook------- */}
      {/* <CounterOne/>
         <Counter2Two/> */}

      {/*------ useInput Hook------- */}
      {/* <UseForm/> */}


  {/*------ Redux ------- */}
    <h1>React Redux Customer Example</h1>
     <CustomerAdd/>
     <CustomerView />
    



    </>
    {/* // </UserContext.Provider> */}
    </Provider>
  )

}



export default App

