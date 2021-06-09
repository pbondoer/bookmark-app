import * as React from 'react';
import { useState } from 'react';
import { connect } from 'unistore/react';
import { navigate } from 'hookrouter';
import { nanoid } from 'nanoid';

import { ArrowLeft, Check } from 'react-feather';

import { useTheme } from '~/hooks';
import { Layout, TopBar } from '~/components/layout';
import { Form, Input, Action } from '~/components';
import { actions, State } from '~/store';
import { Bookmark } from '~/types';

type OwnProps = {
  id: string | 'new';
};

type InjectedProps = {
  bookmarks: Bookmark[];
  update: (_bookmark: Bookmark) => void;
};

export type Props = OwnProps & InjectedProps;

export const Edit: React.FC<Props> = ({ id, bookmarks, update }) => {
  const theme = useTheme();

  const bookmark = (bookmarks || []).find(item => item.id == id);

  const [name, setName] = useState(bookmark?.name || '');
  const [uri, setUri] = useState(bookmark?.uri || '');

  return (
    <Layout>
      <TopBar
        actions={[
          <Action
            key="back"
            icon={<ArrowLeft size={theme.unit} />}
            title="Go back"
            href="/"
          >
            Go back
          </Action>,
        ]}
      />
      <Form>
        <div>
          <label htmlFor="name">Bookmark name</label>
          <Input
            name="name"
            placeholder="My awesome link"
            value={name}
            onChange={e => {
              setName(e.currentTarget.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="url">Bookmark URL</label>
          <Input
            name="url"
            placeholder="https://..."
            value={uri}
            onChange={e => {
              setUri(e.currentTarget.value);
            }}
          />
        </div>

        {bookmark && (
          <div>
            <time dateTime={bookmark.date}>
              Bookmark created on {new Date(bookmark.date).toLocaleString()}
            </time>
          </div>
        )}

        <Action
          key="save"
          icon={<Check size={theme.unit} />}
          title="Save"
          onClick={() => {
            update({
              id: !bookmark ? nanoid() : id,
              name,
              uri,
              // Random thumbnail
              thumbUri: !bookmark
                ? `https://placekitten.com/${Math.round(
                    Math.random() * 200 + 100
                  )}/${Math.round(Math.random() * 200 + 100)}`
                : bookmark?.thumbUri,
              date: !bookmark ? new Date().toISOString() : bookmark?.date,
            });

            navigate('/');
          }}
        >
          {bookmark ? 'Save' : 'Create'}
        </Action>
      </Form>
    </Layout>
  );
};
Edit.displayName = 'Edit';

export default connect<OwnProps, unknown, State, InjectedProps>(
  ['bookmarks'],
  actions
)(Edit);
