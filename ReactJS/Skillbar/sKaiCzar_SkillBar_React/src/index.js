import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './other.css';

const nskills=[
    {skillName: "HTML", mastery: 70},
    {skillName: "CSS", mastery: 74},
    {skillName: "JavaScript", mastery: 85},
    {skillName: "BootStrap", mastery: 65},
    {skillName: "React.js", mastery: 60},
    {skillName: "jQuery", mastery: 40},
    {skillName: "C++", mastery: 78},
    {skillName: "Java", mastery: 50},
    {skillName: "Python", mastery: 42}
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={ collapsed:true };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ collapsed: false })
        }, 6000);
    }
    render(){
        const {collapsed} = this.state;
        const { hue, saturation, skills } = this.props;

        return(
            <div className={`container ${collapsed ? 'collapsed' : ''}`}>
                <h1>Skill Bars - React Component</h1>
                <hr/>
                <ul className="skills">
                    {skills.map((skill, index) =>
                        <div>
                            <li
                                key={skill.skillName}
                                style={{ width: `${skill.mastery}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 2.5) }%)` }}
                            >
                                {skill.skillName}
                            </li>
                            <span>
                                {skill.mastery}
                            </span>
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}



ReactDOM.render(
    <App hue="175" saturation="50" skills={nskills}/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
