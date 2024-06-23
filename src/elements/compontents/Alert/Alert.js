import { html } from 'lit';
import './Alert.scss';

export const Alert = ({ color, content }) => {
    return html`
<div class=${['alert', `alert-${color}`].join(' ')} role="alert">
    ${content}
</div>
  `;
};
