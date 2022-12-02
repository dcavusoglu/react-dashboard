import React from 'react'
import { Pie as PieChart } from '../../components';
import { pieChartData } from '../../data/dummy';
import { Header } from '../../components'

const Pie = () => {
  return (
    <div>
      <Header category='Pie' title='Project Cost Breakdown' />
      <PieChart data={pieChartData} legendVisiblity height="full"/>
    </div>
  )
}

export default Pie
