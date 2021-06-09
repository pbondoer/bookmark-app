import * as React from 'react';
import styled from 'styled-components';

export type Props<ItemType> = {
  items: Array<ItemType>;
  children: {
    renderItem: (_item: ItemType, _index: number) => React.ReactNode;
    renderEmpty: () => React.ReactNode;
  };
};

const Container = styled.section``;

export const List = <T,>({ items, children }: Props<T>): JSX.Element => {
  return (
    <Container>
      {items.length > 0
        ? items.map((item, i) => children.renderItem(item, i))
        : children.renderEmpty()}
    </Container>
  );
};
List.displayName = 'List';

export default List;
