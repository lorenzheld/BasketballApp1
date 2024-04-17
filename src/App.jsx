  import { useState } from 'react'
  import './mvp.css'
  import Team from "./assets/Team.jsx";
  import History from "./assets/History.jsx";

  function App() {


    const [homeName, setHomeName] = useState(0);
    const [GuestName, setGuestName] = useState(0);
    const [homePoints, setHomePoints] = useState(0);
    const [guestPoints, setGuestPoints] = useState(0);

    return (
      <div>
        <section id="section-1">
          <header>
            <h2>Basketballspiel</h2>
            <p>Lorenz Held</p>
          </header>
          <aside>
            <Team
                label="Home team"
                name={homeName}
                setName={setHomeName}
                points={homePoints}
                setPoints={setHomePoints}
                />

          </aside>
          <aside>
            <History
            />
          </aside>
          <aside>
            <Team
                label="Guest team"
                name={GuestName}
                setName={setGuestName}
                points={guestPoints}
                setPoints={setGuestPoints}
            />
          </aside>
        </section>
      </div>
    )
  }

  export default App

