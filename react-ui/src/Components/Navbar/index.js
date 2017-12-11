/**
 * Created by gaurav.m on 12/10/17.
 */
import React from 'react'

export default class Navbar extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: '#3B619F', borderTop: '1px solid darkgrey', borderBottom: '1px solid darkgrey',
                boxShadow: '0px 2px 2px lightgrey'
            }}>
                <div className="nav-link" style={{
                    padding: 10,
                    display: 'inline-block'
                }}>
                    HOME
                </div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>NATION</div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>MOVIE</div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>SPORTS</div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>ENTERTAINMENT
                </div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>ASTRO</div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>HEALTH</div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>LIFESTYLE</div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>BUSINESS</div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>TECH</div>
                <div className="nav-link" style={{padding: 10, display: 'inline-block'}}>BLOGS</div>
            </div>
        )
    }
}