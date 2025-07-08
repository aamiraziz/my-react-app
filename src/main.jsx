import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Variables from './Variables.jsx'
import MyFunctionalComponent from './MyFunctionalComponent'
import MyForm from './MyForm.jsx'
import TableOf from './TableOf.jsx'
import CounterFunction from './CounterFunction.jsx'
import CounterClass from './CounterClass.jsx'
import Counts from './Counts.jsx'
import CounterR from './CounterR.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Variables/>  */}
    {/* <MyForm />  */}
    {/* <Variables titleefe = "Mr." /> */}
    {/* <App /> */}
    {/* <Variables /> */}
    {/* <TableOf number = {108} /> */}
    {/* <CounterFunction /> */}
    {/* <CounterClass /> */}
    {/* <Counts /> */}
    <CounterR />
  </StrictMode>,
)
