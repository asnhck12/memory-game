import './App.css'
import MainLayout from './MainLayout'
import ghLogo from './assets/github_icon.svg'

function App() {

  return (
    <>
    <div className="header">
      <h2>Memory Game</h2>
    </div>
    <MainLayout/>
    <div id="footer">
            <div id="gitHubText">
                <a href="https://github.com/asnhck12" target="_blank">
                    <p>asnhck12</p>
                    </a>
            </div>
            <div id="gitHubIcon">
                <a href="https://github.com/asnhck12" target="_blank">
                    <img src={ghLogo} />
                    </a>
            </div>
        </div>
    </>
  )
}

export default App
