import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CounterProvider } from '../../../../provider/src/counter';
import { CounterList } from '../../counter';
import { buildCounter } from '../../../../test/data/counter/buildCounter';
import { StubCounterStore } from '../stubs/stub-counter-store';
import * as store from '../../../../store/src';

describe('CounterList', () => {
  function renderCounterList(stubCounterStore: store.CounterStore) {
    render(
      <CounterProvider store={stubCounterStore}>
        <CounterList />
      </CounterProvider>,
    );
  }

  it('counter 생성 클릭 이벤트를 감지한다.', async () => {
    const stubCounterStore = new StubCounterStore();

    renderCounterList(stubCounterStore);

    await userEvent.click(screen.getByRole('button', { name: 'counter 생성' }));

    expect(stubCounterStore.getSnapshot().counters).toHaveLength(1);
  });

  it('counter 들을 화면에 출력한다.', () => {
    const counters = Array(10).fill(0).map(buildCounter);
    const stubCounterStore = new StubCounterStore(counters);
    renderCounterList(stubCounterStore);

    expect(screen.getAllByRole('listitem')).toHaveLength(counters.length);
  });
});
