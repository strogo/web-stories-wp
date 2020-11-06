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
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

/**
 * Internal dependencies
 */
import { Button, BUTTON_TYPES } from '../../button';
import { Text, Headline } from '../../typography';
import { Modal } from '..';

export default {
  title: 'DesignSystem/Components/Modal',
  component: Modal,
};

export const _default = () => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <Headline as="h1">{'Lorem ipsum dolor'}</Headline>
      <Text>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
      </Text>
      <Button
        type={BUTTON_TYPES.PRIMARY}
        onClick={() => setToggleModal(!toggleModal)}
      >
        {'Toggle Modal'}
      </Button>

      <Modal
        ariaHideApp={false} // this is ONLY for storybook to eliminate a warning, we set the app id in the root index of dashboard
        contentLabel={'my storybook modal label'}
        aria={{
          labelledby: 'additional Headline for aria - optional',
          describedby: 'additional described by for aria - optional',
        }}
        isOpen={toggleModal}
        onClose={() => {
          action('close modal clicked');
          setToggleModal(!toggleModal);
        }}
      >
        <div>
          <Headline as="h2">{'Ut enim ad minim veniam'}</Headline>
          <Text>
            {
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          </Text>
        </div>
      </Modal>
    </>
  );
};

export const OverriddenStyles = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <Headline as="h1">{'Lorem ipsum dolor'}</Headline>
      <Text>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
      </Text>
      <Button
        type={BUTTON_TYPES.PRIMARY}
        onClick={() => setToggleModal(!toggleModal)}
      >
        {'Toggle Modal'}
      </Button>

      <Modal
        ariaHideApp={false} // this is ONLY for storybook to eliminate a warning, we set the app id in the root index of dashboard
        isOpen={toggleModal}
        onClose={() => {
          action('close modal clicked');
          setToggleModal(!toggleModal);
        }}
        contentStyles={{
          backgroundColor: 'salmon',
          borderRadius: '5px',
          padding: '10px 20px',
        }}
        overlayStyles={{
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
        }}
      >
        <div>
          <Headline as="h2">{'Ut enim ad minim veniam'}</Headline>
          <Text>
            {
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          </Text>
        </div>
      </Modal>
    </>
  );
};
