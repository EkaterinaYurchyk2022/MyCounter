import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import Button from "./Button";
import Display from "./Display";
import Input from "./Input";

const App = () => {
  let [count, setCount] = useState(0)

  let [valueInputMax, setValueInputMax] = useState(0)

  let [valueInputStart, setValueInputStart] = useState(0)

  let [edit, setEdit] = useState<null | string>(null)

  const titleMax = "max value:"
  const titleStart = "start value:"

  const disabledInc = count === valueInputMax
  const disabledReset = count === 0

  let btn_inc = () => count < valueInputMax ? setCount(count + 1) : count
  let btn_reset = () => count > valueInputStart ? setCount(count = valueInputStart) : count
  let setButton = () => {
    setCount(valueInputStart)
    setEdit(null)
  }

  const classRedMax = valueInputMax <= valueInputStart ? "red" : " "
  const classRedStart = valueInputStart < 0 || valueInputStart >= valueInputMax ? "red" : " "


  const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.currentTarget.value)
    setValueInputMax(value);
    if (value <= valueInputStart) {
      setEdit('Incorrect value')
    } else {
      setEdit('Enter SET')
    }

  }

  const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.currentTarget.value)
    setValueInputStart(value);
    if (value < 0 || value >= valueInputMax) {
      setEdit('Incorrect value')
    } else {
      setEdit('Enter SET')
    }

  }

  useEffect(() => {
    let stringValue = localStorage.getItem("value MAX")
    if (stringValue) {
      let newValueMax = JSON.parse(stringValue)
      setValueInputMax(newValueMax)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("value MAX", JSON.stringify(valueInputMax))
  }, [valueInputMax])

  useEffect(() => {
    let stringValue = localStorage.getItem("value MIN")
    if (stringValue) {
      let newValueMin = JSON.parse(stringValue)
      setValueInputStart(newValueMin)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("value MIN", JSON.stringify(valueInputStart))
  }, [valueInputStart])

  useEffect(() => {
    let stringValue = localStorage.getItem("count")
    if (stringValue) {
      let newCount = JSON.parse(stringValue)
      setCount(newCount)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [valueInputStart])

  return (
      <div className="app_wrapper">
        <div className="App one">
          <div className="display_wrapper">
            <Input title={titleMax} onChange={onChangeHandlerMax} value={valueInputMax} classRed={classRedMax}/>
            <Input title={titleStart} onChange={onChangeHandlerStart} value={valueInputStart}
                   classRed={classRedStart}/>

          </div>
          <div className="btn_wrapper_one">
            <Button name='set' callBack={setButton} disabled={disabledInc}/>
          </div>
        </div>
        <div className="App two">
          <div className="display_wrapper">
            <Display count={count} valueInputMax={valueInputMax} valueInputStart={valueInputStart} edit={edit}/>
          </div>
          <div className="btn_wrapper">
            <Button name='inc' callBack={btn_inc} disabled={disabledInc}/>
            <Button name='reset' callBack={btn_reset} disabled={disabledReset}/>
          </div>
        </div>
      </div>
  )
}


export default App;