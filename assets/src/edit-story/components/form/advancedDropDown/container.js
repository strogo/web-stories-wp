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
import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * Internal dependencies
 */
import useFocusOut from '../../../utils/useFocusOut';
import SearchInput from './searchInput';
import { isKeywordFilterable } from './utils';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-width: 160px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.bg.black};
  border-radius: ${({ theme }) => theme.border.radius.default};
  padding: 5px;
  margin-top: 16px;
`;

function OptionsContainer({
  onClose,
  isOpen,
  getOptionsByQuery,
  hasSearch,
  renderContents,
}) {
  const ref = useRef();
  const inputRef = useRef();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [queriedOptions, setQueriedOptions] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [trigger, setTrigger] = useState(0);

  useFocusOut(ref, onClose, [onClose]);

  const handleSearchInputChanged = useCallback(
    ({ target: { value } }) => setSearchKeyword(value),
    []
  );

  const handleLoadOptions = useCallback(() => {
    getOptionsByQuery(searchKeyword).then(setQueriedOptions);
  }, [getOptionsByQuery, searchKeyword]);

  useEffect(() => {
    if (getOptionsByQuery && isKeywordFilterable(searchKeyword)) {
      handleLoadOptions();
    } else {
      setQueriedOptions(null);
    }
  }, [getOptionsByQuery, searchKeyword, handleLoadOptions]);

  useEffect(() => {
    if (isOpen) {
      inputRef?.current?.focus();
    }
  }, [isOpen]);

  return (
    <Container role="dialog" ref={ref}>
      {hasSearch && (
        <SearchInput
          ref={inputRef}
          value={searchKeyword}
          onChange={handleSearchInputChanged}
          onClose={onClose}
          isExpanded={isExpanded}
          focusFontListFirstOption={() => setTrigger((v) => v + 1)}
        />
      )}
      {renderContents({
        searchKeyword,
        setIsExpanded,
        trigger,
        queriedOptions,
      })}
    </Container>
  );
}

OptionsContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  getOptionsByQuery: PropTypes.func,
  hasSearch: PropTypes.bool,
  renderContents: PropTypes.func.isRequired,
};

export default OptionsContainer;