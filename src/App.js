import React from 'react'

function App() {
  return (
    <div className="container">
    <header>
        <div className="logo">
            <a href=""><img src="images/logo.png" alt="logo"/> <p>Smart Store</p> </a>
        </div>
        <div className="buttons">
            <ul>
                <li><a href=""> <p> About Us </p></a></li>
                <li><a href=""> <p> Sign Up </p></a></li>
                <li><a href=""> <p> Log In </p></a></li>
            </ul>
        </div>
    </header>
    <div className="content">
        <div className="texts">
            <h1>We Have a Solution</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dignissimos sequi sed at consequatur fugiat magnam, quas ex accusamus dolorem eum similique impedit tempora modi obcaecati laborum reprehenderit. Exercitationem, aut.
            </p>
        </div>
        <div className="image">
            <img src="images/insanlar.jpg" alt="flat-illustration"/>
        </div>

    </div>
</div>
  );
}

export default App;
