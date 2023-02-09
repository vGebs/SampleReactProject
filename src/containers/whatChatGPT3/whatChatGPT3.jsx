import React from 'react';
import { Feature } from '../../components';
import './whatChatGPT3.css'

const WhatChatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt__whatgpt3-feature">
                <Feature title="What is ChatGPT-3?" text="Here is a bunch of filler text to tell you about ChatGPT-3 and how cool it is"/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilites are beyond your imagination</h1>
                <p>Explore this library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="ChatBots" text="Some more text about ChatGPT-3 and how it is a chatbot"/>
                <Feature title="Knowledgebase" text="It has a wide knowledgebase, you can ask it almost anyting!"/>
                <Feature title="Education" text="You can learn using ChatGPT, it has all of the answers"/>
            </div>
        </div>
    )
};

export default WhatChatGPT3;