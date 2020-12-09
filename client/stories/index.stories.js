/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, object } from "@storybook/addon-knobs"

import AppButton from '@/components/AppButton.vue'

export default {
  component: AppButton,
  title: 'Button',
  decorators: [ withKnobs ]
}

export const withText = () => ({
  components: { AppButton },
  props: {
    styles: {
      default: object('Styles', { color: 'red' })
    },
  },
  template: '<AppButton @click="action" :styles="styles">Hello Button</AppButton>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render() {
    return <AppButton onClick={linkTo('Button', 'With Some Emoji')}>With JSX</AppButton>;
  }
})

export const withSomeEmoji = () => ({
  components: { AppButton },
  template: '<AppButton>😀 😎 👍 💯</AppButton>'
})
