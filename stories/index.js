import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table, { Th } from '../src';

storiesOf('Table', module)
  .add('example 1', () => (
    <Table>
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
    <Table defaultSortBy={{ A: true, B: false, C: false }} defaultOrderBy="asc">
      <thead>
        <tr>
          <Th sortKey="A">A</Th>
          <Th sortKey="B">B</Th>
          <Th sortKey="C">C</Th>
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
    <Table ref={(r) => { r && console.log('table ref', r); }} />
  ));
