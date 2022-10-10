import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CounterProvider } from '../../../../provider/src/counter';
import { buildCounter } from '../../../../test/data/counter/buildCounter';
import * as store from '../../../../store/src';
import { StubCounterStore } from '../stubs/stub-counter-store';
import { CounterItem } from '../../counter/CounterItem';
import * as core from '../../../../core/src';

describe('CounterItem', () => {
  function renderCounterItem(
    counter: core.Counter,
    stubCounterStore: store.CounterStore,
  ) {
    render(
      <CounterProvider store={stubCounterStore}>
        <CounterItem counter={counter} />
      </CounterProvider>,
    );
  }

  it('counter 를 화면에 출력한다.', () => {
    const stubCounterStore = new StubCounterStore();
    const newCounter = buildCounter();
    renderCounterItem(newCounter, stubCounterStore);

    expect(screen.getByText(newCounter.currentCount)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '증가' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '감소' })).toBeInTheDocument();
  });

  it('증가 버튼 클릭 이벤트를 감지한다.', async () => {
    const stubCounterStore = new StubCounterStore();
    const newCounter = buildCounter();
    renderCounterItem(newCounter, stubCounterStore);

    await userEvent.click(screen.getByRole('button', { name: '증가' }));

    expect(stubCounterStore.getSnapshot().counters[0]).toBe(newCounter);
  });
});
