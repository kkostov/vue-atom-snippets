'use babel';

import VueAtomSnippetsView from './vue-atom-snippets-view';
import { CompositeDisposable } from 'atom';

export default {

  vueAtomSnippetsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.vueAtomSnippetsView = new VueAtomSnippetsView(state.vueAtomSnippetsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.vueAtomSnippetsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'vue-atom-snippets:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.vueAtomSnippetsView.destroy();
  },

  serialize() {
    return {
      vueAtomSnippetsViewState: this.vueAtomSnippetsView.serialize()
    };
  },

  toggle() {
    console.log('VueAtomSnippets was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
