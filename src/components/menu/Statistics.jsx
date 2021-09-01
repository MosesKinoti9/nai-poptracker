import { React, Component } from 'react'
import {Line} from 'react-chartjs-2'

export class LineChart extends Component {

    render(){
    return (
        <div className="container section stats" style={{width: 950, height: 30, padding: 20, color: 'white'}}>
         <h5 className="card z-depth-0 stats" style={{height: 70, padding: 20, color:'black'}}><strong>Statistics </strong><small>Nairobi</small></h5>
        <div className="card z-depth-0 map"></div>
        <div><Line 
        data={{
            labels: [ 'Jan', 'Feb', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Total Confirmed COVID-19 Cases in Nairobi (2021)',
                    data: [1200, 1960, 2450, 3320 , 2211, 887],
                    backgroundColor: '#00CED1',
                    borderColor: 'blue',
                    borderWidth: 1,
                },
                {
                    label: 'Total COVID-19 Recoveries in Nairobi (2021)',
                    data: [647, 760, 990, 1225, 505, 334],
                    backgroundColor: '#ADFF2F',
                    borderColor: 'green',
                    borderWidth: 1,
                },
                {
                    label: 'Total COVID-19 Deaths in Nairobi (2021)',
                    data: [109, 228, 300, 189, 90, 56],
                    backgroundColor: '#CD5C5C',
                    borderColor: 'firebrick', 
                    borderWidth: 1,
                }
            ]
        }}
        height={300} 
        width={300}
        options={{
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
            }
        }}/></div>
        </div>
    )
}

}

export default LineChart

