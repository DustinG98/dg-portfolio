import React, { Component } from 'react';

import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
import editorStyles from './editorStyles.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';

import { convertToRaw, convertFromRaw } from 'draft-js'

import { axiosWithAuth } from '../../../auth/axiosWithAuth'

class HeadlinesPicker extends Component {
  componentDidMount() {
    setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }

  onWindowClick = () =>
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    this.props.onOverrideContent(undefined);

  render() {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
      <div>
        {buttons.map((Button, i) => // eslint-disable-next-line
          <Button key={i} {...this.props} />
        )}
      </div>
    );
  }
}

class HeadlinesButton extends Component {
  onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    this.props.onOverrideContent(HeadlinesPicker);

  render() {
    return (
      <div className={editorStyles.headlineButtonWrapper}>
        <button onClick={this.onClick} className={editorStyles.headlineButton}>
          H
        </button>
      </div>
    );
  }
}

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';

export default class CustomToolbarEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  sendData = () => {
    axiosWithAuth().post('/blog', {
        title: 'test',
        section: 'test',
        imageSource: 'testURL',
        content: convertToRaw(this.state.editorState._immutable.currentContent)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  getData = () => {
      axiosWithAuth().get('/blog/5e287beb22d43a455847093a')
        .then(async (res) => {
            console.log(res.data.content)
            console.log(convertFromRaw(res.data.content))
            // this.setState({editorState: convertFromRaw(res.data.content)})
        })
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="editCont">
          <div className="edit-toolbar">
              <button onClick={this.sendData}>SendData</button>
              <button onClick={this.getData}>GetData</button>
			<Toolbar>
				{
				// may be use React.Fragment instead of div to improve perfomance after React 16
				(externalProps) => (
					<div className="toolbar-buttons">
					<BoldButton {...externalProps} />
					<ItalicButton {...externalProps} />
					<UnderlineButton {...externalProps} />
					<CodeButton {...externalProps} />
					<Separator {...externalProps} />
					<HeadlinesButton {...externalProps} />
					<UnorderedListButton {...externalProps} />
					<OrderedListButton {...externalProps} />
					<BlockquoteButton {...externalProps} />
					<CodeBlockButton {...externalProps} />
					</div>
				)
				}
			</Toolbar>
		  </div>
        <div className="editor" onClick={this.focus}>
			<div className="text-editor">
			<Editor
				editorState={this.state.editorState}
				onChange={this.onChange}
				plugins={plugins}
				ref={(element) => { this.editor = element; }}
			/>
		  </div>
        </div>
      </div>
    );
  }
}