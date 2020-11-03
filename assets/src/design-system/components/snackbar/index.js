/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { THEME_CONSTANTS } from '../../';

/**
 * Internal dependencies
 */

// todo use the same helper as dialog to get width respectfully of wordPress nav

export const Snackbar = styled.div`
  position: fixed;
  bottom: 40px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems};
  width: 100vw;
  z-index: ${THEME_CONSTANTS.Z_INDEX.SNACKBAR};
`;
Snackbar.propTypes = {
  alignItems: PropTypes.string,
};
Snackbar.defaultProps = {
  alignItems: 'center',
};

export default Snackbar;
