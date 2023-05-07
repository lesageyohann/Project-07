import { useState} from 'react'

function Collapse(props) {
    const [open, setOPen] = useState(false)

    const toggle = () => {setOPen(!open);};

    return (
        <div>
          <button onClick={toggle}>{props.label}</button>
          {open && (
            <div className="toggle">
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
          )}
        </div>
      );
}

export default Collapse