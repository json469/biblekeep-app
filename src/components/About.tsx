import * as React from 'react';
import '../App.css';

class About extends React.Component {

    public render() {

        return (

            <div id='about'>
            <p>
                Created by <a href='https://github.com/json469'>Jesse Son</a>
            </p>
            <br/>
            <p>
                Unless otherwise indicated, all Scripture quotations are from the <a href='https://api.esv.org/'>ESV® Bible</a> (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. You may not copy or download more than 500 consecutive verses of the ESV Bible or more than one half of any book of the ESV Bible.
            </p>
            <br/>
            <p>
                Website icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </p>
            </div>
        )
    }
}

export default About