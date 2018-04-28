import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table, { Th } from '../src';

storiesOf('Table', module)
  .add('example 1', () => (
    <Table defaultSortBy="A" defaultOrderBy="asc">
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>a1</td>
          <td>b1</td>
          <td>c1</td>
        </tr>
        <tr>
          <td>a2</td>
          <td>b2</td>
          <td>c2</td>
        </tr>
        <tr>
          <td>a3</td>
          <td>b3</td>
          <td>c3</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add('example 2', () => (
    <Table
      defaultSortBy="B"
      defaultOrderBy="asc"
      defaultHandleClassNames={({sortBy, sortKey}) => {
        return sortBy === sortKey ? 'selected' : '';
      }}
      onSortChange={action('onSortChange')}>
      <thead>
        <tr>
          <Th sortKey="A">A</Th>
          <Th sortKey="B">B</Th>
          <Th handleClassNames={({orderBy}) => orderBy} sortKey="C">C</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>a1</td>
          <td>b1</td>
          <td>c1</td>
        </tr>
        <tr>
          <td>a2</td>
          <td>b2</td>
          <td>c2</td>
        </tr>
        <tr>
          <td>a3</td>
          <td>b3</td>
          <td>c3</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add('example 3 (refs)', () => (
    <Table defaultSortBy="A" defaultOrderBy="asc" ref={r => { r && action('Table Ref')(r) }} />
  ));
