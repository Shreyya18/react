import React from "react";
import Search from "./component/Search";
const App = () => {
    const[searchTerm,setSearchTerm] = React.useState("");
    return (
    <main>
        <div className="pattern"/>
        <div className="wrapper">
            <header>
                <img src="./hero.png" alt="Hero" />
                <h1>Find <span className="text-gradient">movies</span> You'll Enjoy Without the Hassle</h1>
            </header>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <h1 className="text-white">{searchTerm}</h1>
        </div>

    </main>
    );
    }

    export default App;