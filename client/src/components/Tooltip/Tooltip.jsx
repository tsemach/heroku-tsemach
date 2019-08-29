import React, { Component } from 'react';

class Tooltip extends Component {
  state = {  }
  render() { 
    return (  
      <React.Fragment>
      <div id="tooltip" className="top">
        <div class="tooltip-arrow" />
        <div class="tooltip-label">ToolTip Component</div>
      </div>

      <div id="tooltip" className="right">
        <div class="tooltip-arrow" />
        <div class="tooltip-label">ToolTip Component</div>
      </div>

      <div id="tooltip" className="bottom">
        <div class="tooltip-arrow" />
        <div class="tooltip-label">ToolTip Component</div>
      </div>

      <div id="tooltip" className="left">
        <div class="tooltip-arrow" />
        <div class="tooltip-label">ToolTip Component</div>
      </div>
    </React.Fragment>
    );
  }
}
 
export default Tooltip;
