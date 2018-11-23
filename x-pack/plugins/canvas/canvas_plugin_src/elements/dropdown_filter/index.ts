/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import header from './header.png';

export const dropdownFilter: CanvasElement = () => ({
  name: 'dropdown_filter',
  image: header,
  height: 50,
  expression: `demodata
| dropdownControl valueColumn=project filterColumn=project | render`,
  filter: '',
});
