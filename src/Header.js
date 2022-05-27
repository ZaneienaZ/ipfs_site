import React from 'react'
export default function Header () {

    const [darkMode, setDarkMode] = React.useState(false);
    

	React.useEffect(() => {
		if (darkMode) {
		  document.body.classList.add("dark");
		} else {
		  document.body.classList.remove("dark");
		}
	  }, [darkMode]);

    return (
        <header>
        <div className="dropdown"> 
            <span>Mouse over me</span>
                <div className= 'dropdown-content-container'>
                <p id="sidebarFirst">Hi</p>
  
                <a src="https://github.com/ZaneienaZ"></a>
                <p id="sidebarSecond">
                    
                        friend
                    </p>
                
                <p id="sidebarThird">thank you</p>
                <p id= "sidebarFourth">for stopping by</p>
                </div>
        </div>
  
        <div id="website">ane's nook for Go and other things.            
            <button className="toggleDark"
            title={darkMode? "lite-mode":"dark-mode"}
            alt = "darkmode toggle"
			    	onClick={() => setDarkMode(!darkMode)}>
		    </button>
        </div>

        <div id= "photoContainer">
        <div className="headerPhoto" src = "DSC_0635.JPG"> </div></div>
    </header>
    )
  }