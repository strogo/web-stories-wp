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

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Label, Row, MULTIPLE_VALUE } from '../../../form';
import { useCommonObjectValue } from '../../utils';
import { DEFAULT_PADDING } from './common';
import LockedPaddingControls from './locked';
import UnlockedPaddingControls from './unlocked';

function PaddingControls({ selectedElements, pushUpdateForObject }) {
  const padding = useCommonObjectValue(
    selectedElements,
    'padding',
    DEFAULT_PADDING
  );

  // When multiple element selected with padding locked value combined, it treated as false, reversed behavior with aspect lock ratio.
  const lockPadding =
    padding.locked === MULTIPLE_VALUE ? false : padding.locked;

  return (
    <Row>
      <Label>{__('Padding', 'web-stories')}</Label>
      {lockPadding ? (
        <LockedPaddingControls
          padding={padding}
          pushUpdateForObject={pushUpdateForObject}
        />
      ) : (
        <UnlockedPaddingControls
          padding={padding}
          pushUpdateForObject={pushUpdateForObject}
        />
      )}
    </Row>
  );
}

PaddingControls.propTypes = {
  selectedElements: PropTypes.array.isRequired,
  pushUpdateForObject: PropTypes.func.isRequired,
};

export default PaddingControls;
