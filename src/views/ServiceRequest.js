import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router-dom';
import RaisedButton from '../components/MaterializeRaisedButton';
import '../styles/inputFile.scss';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class ServiceRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileInput: [],
    };
  }

  handleFilePath = () => {
    const file = document.getElementById('upload').files;
    if (file.length === 0) {
      this.setState({
        fileInput: null,
      });
    } else {
      let fileNames = '';
      for (let i = 0; i < file.length; i++) {
        fileNames = `${file[i].name}`;
      }
      this.setState({
        fileInput: fileNames,
      });
    }
  }

  render() {
    const fileValue = this.state.fileInput || 'Select a file to upload';

    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 flow-text'>
            <h2>Please use this form to request services.</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Name' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Email' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Phone' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Department' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Project Description'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Project Goal'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Project Budget'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Key Messages'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Primary Target Audience'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Secondary Target Audience'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Project Contact (if other than yourself)'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Comments'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <DatePicker hintText='Desired Completion Date' />
          </div>
          <div className='col s12 m6'>
            <div className='file-field input-field'>
              <div className='btn'>
                <span>Upload Files</span>
                <input
                  id='upload'
                  type='file'
                  multiple
                  onChange={this.handleFilePath}
                />
              </div>
              <div className='file-path-wrapper'>
                <input
                  value={fileValue}
                  className='file-path validate'
                  type='text'
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className='col s12 m6'>
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
          </div>
          <div className='col s12 m6'>
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
          </div>
          <div className='col s12'>
            <RaisedButton label='Submit' primary />
            <Checkbox
              label={
                <span>
                  I have read the{''}
                  <Link exact to='/planning-guide' style={{ fontWeight: 500 }}>
                    Planning Guide
                  </Link>
                </span>
              }
              style={styles.checkbox}
              inputStyle={{ width: '35px' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceRequest;
