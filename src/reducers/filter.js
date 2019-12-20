import { FILTER_TASK } from '../constans';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case FILTER_TASK:
      return activeFilter;
    default:
      return state;
  }
}

export default filter;