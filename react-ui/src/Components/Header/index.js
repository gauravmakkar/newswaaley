/**
 * Created by gaurav.m on 12/10/17.
 */
import React from 'react'

export default class Header extends React.Component {


    render() {
        return (
            <div style={{
                overflow: 'auto',
                clear: 'both',
                padding: '20px',
            }}>
                <div style={{width: '25%', float: 'left', paddingTop: 5, paddingBottom: 5}}>
                    <div style={{width: 'auto', float: "left", textAlign: "right", fontSize: 50, fontWeight: 'bold'}}>
                        09
                    </div>
                    <div style={{
                        float: 'left',
                        textAlign: 'left',
                        paddingTop: 8,
                        paddingBottom: 8,
                        fontSize: 12,
                        paddingLeft: 8,
                        color: 'darkgrey'
                    }}>
                        <div>December 2017</div>
                        <div>Saturday</div>
                        <div>12:00 PM IST</div>
                    </div>

                </div>
                <div style={{
                    width: '50%',
                    textAlign: "center",
                    float: 'left',
                    fontSize: 59,
                    fontWeight: 'bold',
                    textShadow: '0px 3px 3px darkgrey'
                }}>
                    <span>NEWSWAALEY</span><span style={{fontSize: 14}}>.com</span>
                </div>
                <div style={{
                    width: '25%',
                    textAlign: "right",
                    float: 'left',
                    paddingTop: 15,
                    paddingBottom: 15,

                }}>
                    <div style={{fontSize: 21, fontWeight: 'bold'}}>29°C</div>
                    <div style={{fontSize: 12, color: 'darkgrey'}}>Gurgaon</div>
                </div>
            </div>
        )
    }
}

