import { query } from '@pluginjs/dom'
import Modal from '@pluginjs/modal'

const root = query('#multi-level')
const prompt = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  theme: 'sm',
  title: 'Modal title',
  buttons: {
    active: {
      title: 'open modal',
      close: false,
      fn() {
        Modal.open(pop)
      }
    }
  }
}
const pop = {
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  theme: 'sm',
  buttons: {
    active: {
      title: 'open modal',
      close: false,
      fn() {
        Modal.alert('This is an alert')
      }
    }
  }
}
query('.multi-level', root).addEventListener('click', () => {
  Modal.open(prompt)
})
