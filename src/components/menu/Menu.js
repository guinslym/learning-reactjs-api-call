import React from 'react'
import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'editorials', active: true, name: 'Editorials' },
  { key: 'review', name: 'Reviews' },
  { key: 'events', name: 'Upcoming Events' },
]

const MenuExampleProps = () => (
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li>Components tutorial with API call</li>
      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a target="_blank" href="git remote add origin git@github.com:guinslym/learning-reactjs-api-call.git">Github</a></li>
      </ul>
    </div>
  </nav>
)

export default MenuExampleProps
