import * as React from 'react';
import styled from 'styled-components';

import { Edit, X } from 'react-feather';

import { Action } from '~/components';
import { useTheme } from '~/hooks';

export type Props<ItemType> = {
  children: ItemType;

  titleKey?: keyof ItemType;
  uriKey?: keyof ItemType;
  thumbKey?: keyof ItemType;
  dateKey?: keyof ItemType;
  idKey?: keyof ItemType;
  onDelete?: () => void;
};

const Container = styled.article`
  display: flex;
  margin-top: ${p => p.theme.unit}px;

  border-radius: ${p => p.theme.unit / 4}px;
  background-color: ${p => p.theme.colors.light};

  overflow: hidden;

  height: ${p => p.theme.unit * 4}px;

  & > img {
    height: ${p => p.theme.unit * 4}px;
    width: ${p => (p.theme.unit * 4 * 16) / 9}px;

    object-fit: cover;

    color: ${p => p.theme.colors.light};
    background-color: ${p => p.theme.colors.light};
  }
  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    flex-grow: 1;

    padding: ${p => p.theme.unit / 2}px;

    h1,
    h2,
    h3 {
      margin: 0;
      font-size: ${p => p.theme.fontSizePx.regular};
      font-weight: 400;
    }

    h1 {
      font-size: ${p => p.theme.fontSizePx.large};
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    padding: ${p => p.theme.unit / 2}px;

    opacity: 0;
    transition: opacity 0.1s linear;
  }
  &:hover > div:nth-of-type(2) {
    opacity: 1;
  }
`;

export const ListItem = <T,>({
  children,
  titleKey,
  uriKey,
  thumbKey,
  dateKey,
  idKey,
  onDelete,
}: Props<T>): JSX.Element => {
  const theme = useTheme();

  let title = children[titleKey || ('name' as keyof T)] as unknown as string;
  let uri = children[uriKey || ('uri' as keyof T)] as unknown as string;
  let thumb = children[
    thumbKey || ('thumbUri' as keyof T)
  ] as unknown as string;
  let date = children[dateKey || ('date' as keyof T)] as unknown as string;
  let id = children[idKey || ('id' as keyof T)] as unknown as string;

  if (!id || typeof id !== 'string') id = '';
  if (!title || typeof title !== 'string') title = 'Untitled';
  if (!uri || typeof uri !== 'string') uri = '#';
  if (!thumb || typeof thumb !== 'string') thumb = '';
  if (!date || typeof date !== 'string') date = new Date().toISOString();

  return (
    <Container>
      <img src={thumb} alt={title} />
      <div>
        <a href={uri}>
          <h1>{title}</h1>
          <h2>{uri}</h2>
        </a>
        <h3>
          <time dateTime={date}>{new Date(date).toLocaleString()}</time>
        </h3>
      </div>
      <div>
        <Action
          key="edit"
          icon={<Edit size={theme.unit} />}
          title="Edit bookmark"
          href={`/edit/${id}`}
        />
        <Action
          key="delete"
          icon={<X size={theme.unit} />}
          title="Delete bookmark"
          onClick={onDelete}
        />
      </div>
    </Container>
  );
};
ListItem.displayName = 'ListItem';

export default ListItem;
