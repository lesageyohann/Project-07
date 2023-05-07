import { useState} from 'react'

function Collapse(props) {
    const [open, setOPen] = useState(false)
    const toggle = () => {setOPen(!open);};

    return (
        <div>
          <button onClick={toggle}>{props.label}</button>
          {open && (
            <div className="toggle">
              {props.content}
            </div>
          )}
        </div>
      );
}

export default Collapse