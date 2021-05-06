// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const loadGlobeModule = () => import(/* webpackPrefetch: true */ '../globe')

let Globe = React.lazy(loadGlobeModule)

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label
        style={{marginBottom: '1rem'}}
        onFocus={loadGlobeModule}
        onMouseEnter={loadGlobeModule}
      >
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
        <React.Suspense fallback="loafing...">
          {showGlobe ? <Globe /> : null}
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
