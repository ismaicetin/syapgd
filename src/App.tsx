import React, { useEffect, useState } from 'react';
import './style.css';
import Grid, { ItemType } from './grid';
import dataList from './data.json';

const control = (today: Date, limit: number): number => {
  let msLimit = (limit + 1) * 86400 * 1000
  let myData = document.getElementsByTagName("table")
  let rows: Array<any>
  rows = Array.from(myData[0].rows)
  return rows.reduce((acc, item: HTMLTableRowElement) => {
    let isBackgroundColorRed = item.style.backgroundColor
    let mailReceivedDate = new Date(item.children[1].innerHTML).getTime()
    let solutionSentDate = item.children[2].innerHTML ? new Date(item.children[2].innerHTML).getTime() : today.getTime()
    mailReceivedDate = mailReceivedDate + msLimit
    if (mailReceivedDate < solutionSentDate) {
      //wrong Date
      // beklenen kırmızı
      if (isBackgroundColorRed != "red") acc++
    } else {
      //true Date
      // beklenen kırmızı degil
      if (isBackgroundColorRed == "red") acc++
    }
    // console.log(isBackgroundColorRed, mailReceivedDate, solutionSentDate, acc, msLimit)
    return acc
  }, 0)
}
export default function App() {
  let sourceProp: ItemType[] = dataList;
  let todayDateString = "2021-10-06"
  let today = new Date(todayDateString)
  const [first, setfirst] = useState(0)
  useEffect(() => {
    setfirst(control(today, 5))
  }, [])

  return (
    <div>
      <h1>Dgpays Case Study </h1>
      <Grid source={sourceProp} />
      <hr />
      Hatalı kayıt sayısı:<b>{first}</b>
    </div>
  );
}
