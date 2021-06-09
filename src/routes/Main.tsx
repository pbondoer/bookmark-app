import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useTitle } from 'hookrouter';
import { connect } from 'unistore/react';
import Fuse from 'fuse.js';

import { Plus, Upload, Frown, HelpCircle } from 'react-feather';

import { useTheme } from '~/hooks';
import { Layout, TopBar, Status } from '~/components/layout';
import { Action, List, ListItem } from '~/components';
import { Bookmark } from '~/types';
import { actions, exportBookmarks, State } from '~/store';

type OwnProps = {
  // ...
};

type InjectedProps = {
  bookmarks: Bookmark[];
  removeItem: (_id: string) => void;
};

export type Props = OwnProps & InjectedProps;

export const Main: React.FC<Props> = ({ bookmarks, removeItem }) => {
  useTitle('Bookmarks - React');
  const theme = useTheme();

  const [items, setItems] = useState(bookmarks);
  const [query, setQuery] = useState('');
  const fuse = useMemo(() => {
    return new Fuse(bookmarks, {
      keys: [
        {
          name: 'name',
          weight: 3,
        },
        {
          name: 'uri',
          weight: 1,
        },
      ],
    });
  }, [bookmarks]);

  useEffect(() => {
    setItems(query ? fuse.search(query).map(i => i.item) : bookmarks);
  }, [bookmarks, fuse, query]);

  return (
    <Layout>
      <TopBar
        actions={[
          <Action
            key="export"
            icon={<Upload size={theme.unit} />}
            title="Export as JSON"
            onClick={() => {
              exportBookmarks();
            }}
          >
            Export
          </Action>,
          <Action
            key="add"
            icon={<Plus size={theme.unit} />}
            title="Create a new bookmark"
            href="/edit/new"
          >
            Add new
          </Action>,
        ]}
        onSearch={query => {
          setQuery(query);
        }}
      />
      <List items={items}>
        {{
          // eslint-disable-next-line react/display-name
          renderItem: item => (
            <ListItem
              key={item.id}
              onDelete={() => {
                removeItem(item.id);
              }}
            >
              {item}
            </ListItem>
          ),
          // eslint-disable-next-line react/display-name
          renderEmpty: () => {
            const Icon = bookmarks.length === 0 ? HelpCircle : Frown;
            const message =
              bookmarks.length === 0 ? 'No bookmarks' : 'No results found';
            return (
              <Status>
                <Icon size={theme.unit * 4} />
                <span>{message}</span>
              </Status>
            );
          },
        }}
      </List>
    </Layout>
  );
};
Main.displayName = 'Main';

export default connect<OwnProps, unknown, State, InjectedProps>(['bookmarks'], {
  removeItem: actions.delete,
})(Main);
