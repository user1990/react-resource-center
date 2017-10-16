import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class IconCheckbox extends Component {
  state = {
    DialogOpen: false
  }

  handleDialogOpen = () => {
    this.setState({ DialogOpen: true })
  }

  render () {
    return (
      <div style={{ display: this.props.icon ? 'flex' : 'block' }}>
        <Checkbox
          label={this.props.label}
          name={this.props.name}
          checked={this.props.isChecked}
          onCheck={e => this.props.handleCheck(e)}
          style={this.props.style}
          inputStyle={this.props.inputStyle}
        />
        {this.props.icon && (
          <div style={{ marginLeft: '8px' }}>
            <img
              onClick={this.handleDialogOpen}
              style={{
                zIndex: 2
              }}
              src={this.props.src}
              alt={this.props.alt}
            />
            <Dialog
              title={this.props.dialogTitle}
              modal={false}
              open={this.state.DialogOpen}
              onRequestClose={this.handleDialogClose}
              autoScrollBodyContent
              action={[
                <FlatButton
                  label='Ok'
                  onTouchTap={this.handleDialogClose}
                  keyboardFocused
                />
              ]}
            >
             <span
              dangerouslySetInnerHTML={{ __html: this.props.dialogText }}
             />
            </Dialog>
          </div>
        )}
      </div>
    )
  }
}

export default IconCheckbox
