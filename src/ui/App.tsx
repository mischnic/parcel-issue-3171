import * as React from 'react'
// routing, etc.

import { Reset } from '~/ui/shared/Reset'

export class App extends React.Component {
  public render() {
    return (
      <div>
        <title>Dashboard</title>
        <Reset />
      </div>
    )
  }
}